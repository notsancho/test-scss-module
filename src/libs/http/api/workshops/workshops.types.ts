export interface WorkshopsItemInterface {
  id: number;
  date_created: Date;
  date_updated: Date;
  title: string;
  description: string;
  is_active: boolean;
  location: string;
  quarter: number;
}

export interface WorkshopsInterface {
  count: number;
  next: string;
  previous: string;
  results: WorkshopsItemInterface[];
}

export interface TaskInterface {
  id: number;
  name: string;
  description: string;
  datetime_start: Date;
  datetime_end: Date;
}

export interface WorkshopsTasksInterface {
  count: number;
  next: string;
  previous: string;
  results: TaskInterface[];
}

export interface EventInterface {
  id: number;
  status: 'in_process' | 'completed' | 'canceled ';
  name: string;
  description: string;
  location: string;
  datetime_start: Date;
  datetime_end: Date;
  repetition_rule: {
    FREQ: string;
    UNTIL: Date;
    INTERVAL: number;
    BYDAY: string;
    COUNT: number;
    BYMONTH: number;
    BYYEARDAY: number;
    BYWEEKNO: number;
    BYMONTHDAY: number;
  };
  main_calendar: number;
  deadline: {
    id: number;
    date_created: Date;
    date_updated: Date;
    datetime_start: Date;
    event: number;
  } | null;
  modification_rule: string;
}

export interface WorkshopsEventsInterface {
  count: number;
  next: string;
  previous: string;
  results: EventInterface[];
}
