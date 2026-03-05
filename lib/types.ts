export interface Metric {
  label: string;
  value: number;
  change: number;
}

export interface Campaign {
  id: string;
  name: string;
  channel: string;
  status: 'Ativa' | 'Pausada';
  investment: number;
}

export interface ChartData {
  name: string;
  value: number;
}
