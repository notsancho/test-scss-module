export interface AccessCodeInterface {
  id: 0;
  code: string;
  available_until: Date;
  date_created: Date;
  date_updated: Date;
  title: string;
  description: string;
  active: boolean;
}

export interface AccessListInterface {
  count: number;
  next: string;
  previous: string;
  results: AccessCodeInterface[];
}
