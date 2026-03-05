import { Metric } from '@/lib/types';

interface Props {
  metric: Metric;
}

export default function MetricCard({ metric }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-gray-500 text-sm font-medium">{metric.label}</h3>
      <p className="text-2xl font-bold mt-2 text-gray-900">R$ {metric.value.toLocaleString('pt-BR')}</p>
      
      {/* Indicador de variação */}
      <div className={`flex items-center mt-4 text-sm ${metric.change >= 0 ? 'text-green-600' : 'text-red-500'}`}>
        {metric.change > 0 && '+'}{metric.change}% vs. mês anterior
      </div>
    </div>
  );
}
