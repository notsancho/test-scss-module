export interface StatisticResultInterface {
  date: Date;
  item: {
    calendar_actions: number;
    created: number;
    delayed: number;
    percent_completed: number;
    percent_delayed: number;
    scheduled: number;
  };
}

export interface StatisticInterface {
  count: number;
  next: string;
  previous: string;
  results: StatisticResultInterface[];
}
