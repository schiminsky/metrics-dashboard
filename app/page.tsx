'use client';

import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import MetricCard from '@/components/ui/MetricCard';
import Skeleton from '@/components/ui/Skeleton';
import { Metric, Campaign, ChartData } from '@/lib/types';

const StatusBadge = ({ status }: { status: string }) => (
  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
    status === 'Ativa' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
  }`}>
    {status}
  </span>
);

const FilterButton = ({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) => (
  <button 
    onClick={onClick} 
    className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
      active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`}
  >
    {label}
  </button>
);

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'Todos' | 'Ativa' | 'Pausada'>('Todos');
  const [metrics, setMetrics] = useState<Metric[]>([]); 
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setMetrics(data.metrics);
        setCampaigns(data.campaigns);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Lógica do Gráfico: Agrupa investimento por canal
  const chartData: ChartData[] = campaigns.reduce((acc: ChartData[], camp) => {
    const existing = acc.find(item => item.name === camp.channel);
    if (existing) {
      existing.value += camp.investment;
    } else {
      acc.push({ name: camp.channel, value: camp.investment });
    }
    return acc;
  }, []);

  const filteredCampaigns = campaigns.filter(c => 
    filter === 'Todos' ? true : c.status === filter
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Adcos Performance</h1>
        <button className="px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
          Exportar Relatório
        </button>
      </header>
      
      {/* 1. CARDS DE MÉTRICAS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {loading ? (
          <><Skeleton /><Skeleton /><Skeleton /></>
        ) : (
          metrics.map((m) => <MetricCard key={m.label} metric={m} />)
        )}
      </section>

      {/* 2. GRÁFICO RECHARTS */}
      <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Investimento Total por Canal</h3>
        <div className="h-64 w-full">
          {loading ? (
            <div className="flex items-center justify-center h-full"><Skeleton /></div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} dy={10} />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: '#f3f4f6' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value: number | string | undefined) => {
                    const val = typeof value === 'number' ? value : 0;
                    return [`R$ ${val.toLocaleString('pt-BR')}`, 'Investimento'];
                  }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
                  {chartData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#2563eb' : '#3b82f6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </section>

      {/* 3. TABELA COM FILTROS */}
      <section className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-4 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-lg font-semibold text-gray-900">Detalhamento de Campanhas</h3>
          <div className="flex gap-2">
            <FilterButton active={filter === 'Todos'} label="Todas" onClick={() => setFilter('Todos')} />
            <FilterButton active={filter === 'Ativa'} label="Ativas" onClick={() => setFilter('Ativa')} />
            <FilterButton active={filter === 'Pausada'} label="Pausadas" onClick={() => setFilter('Pausada')} />
          </div>
        </div>

        {loading ? (
           <div className="p-8 text-center"><Skeleton /></div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-xs font-semibold text-gray-500 uppercase bg-gray-50/30">
                  <th className="px-6 py-4">Campanha</th>
                  <th className="px-6 py-4">Canal</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Investimento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredCampaigns.map((camp) => (
                  <tr key={camp.id} className="hover:bg-blue-50/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{camp.name}</td>
                    <td className="px-6 py-4 text-gray-600">{camp.channel}</td>
                    <td className="px-6 py-4"><StatusBadge status={camp.status} /></td>
                    <td className="px-6 py-4 text-right font-medium text-gray-700">
                      R$ {camp.investment.toLocaleString('pt-BR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}