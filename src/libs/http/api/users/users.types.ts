export interface AnswerInterface {
  question: {
    title: string;
    description: string;
  };
  value: string;
  options: ['string'];
}

export interface UserInfoInterface {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  is_active: boolean;
  answers: AnswerInterface[];
}

export interface UserInterface {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  is_active: boolean;
  date_joined: Date;
}

export interface UsersListInterface {
  count: number;
  next: string;
  previous: string;
  results: UserInterface[];
}

export interface TaskInterface {
  id: number;
  name: string;
  description: string;
  datetime_start: Date;
  datetime_end: Date;
}

export interface UserTasksInterface {
  count: number;
  next: string;
  previous: string;
  results: TaskInterface[];
}
