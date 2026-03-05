import { NextResponse } from 'next/server';

const MOCK_METRICS = [
  { label: 'Total de Clientes', value: 2847, change: 12.5 },
  { label: 'Receita Mensal', value: 184320, change: 8.2 },
  { label: 'Taxa de Conversão', value: 3.6, change: -1.4 },
];

const MOCK_CAMPAIGNS = [
  { id: '1', name: 'Black Friday 2025', channel: 'Google Ads', status: 'Ativa', investment: 15000 },
  { id: '2', name: 'Newsletter Semanal', channel: 'Email', status: 'Ativa', investment: 2000 },
  { id: '3', name: 'Awareness Gen Z', channel: 'TikTok', status: 'Pausada', investment: 9800 },
  { id: '4', name: 'Proteção Solar - Verão 2026', channel: 'Google Ads', status: 'Ativa', investment: 12500 },
  { id: '5', name: 'Sérum Vitamin C - Awareness', channel: 'Meta Ads', status: 'Ativa', investment: 8400 },
  { id: '6', name: 'Retinol Noturno - Remarketing', channel: 'Google Ads', status: 'Ativa', investment: 4200 },
  { id: '7', name: 'Linha Anti-Acne - Influencers', channel: 'TikTok', status: 'Pausada', investment: 15000 },
  { id: '8', name: 'Brindes Exclusivos - Fidelidade', channel: 'Email', status: 'Ativa', investment: 1200 },
  { id: '9', name: 'Lançamento Bio-Performance', channel: 'LinkedIn', status: 'Ativa', investment: 9800 },
  { id: '10', name: 'Limpeza de Pele - Promoção', channel: 'Meta Ads', status: 'Pausada', investment: 5600 },
  { id: '11', name:'Ácido Hialurônico - Busca Direta', channel: 'Google Ads', status: 'Ativa', investment: 7300 },
  { id: '12', name: 'Skincare Masculino - Teste', channel: 'TikTok', status: 'Ativa', investment: 4500 },
  { id: '13', name: 'Hidratação Intensiva - Inverno', channel: 'Meta Ads', status: 'Pausada', investment: 3100 },
];
 
export async function GET() {
  return NextResponse.json({ metrics: MOCK_METRICS, campaigns: MOCK_CAMPAIGNS });
}