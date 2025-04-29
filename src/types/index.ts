export interface ListItem {
  id: string;
  name: string;
  price: string;
  change: string;
  chart: string;
  icon: string;
}

export interface DashboardData {
  hotList: ListItem[];
  newList: ListItem[];
} 