export interface SurveysListInterface {
  count: number;
  next: string | null;
  previous: string | null;
  results: [
    {
      id: number;
      date_created: Date;
      date_updated: Date;
      title: string;
      description: string;
      order: number;
      active: boolean;
    },
  ];
}

export interface SurveysSectionsListInterface {
  count: number;
  next: string | null;
  previous: string | null;
  results: [
    {
      id: number;
      date_created: Date;
      date_updated: Date;
      title: string;
      description: string;
      order: number;
      active: boolean;
      questions: {
        active: boolean;
        date_created: Date;
        date_updated: Date;
        description: string;
        id: number;
        input_type:
          | 'CHECKBOX'
          | 'MULTIPLE_SELECT'
          | 'MULTIPLE_SELECT_OTHER'
          | 'RADIO_BUTTON'
          | 'TEXT_INPUT'
          | 'NUMBER'
          | 'DECIMAL'
          | 'DATE'
          | 'TIME'
          | 'YEAR_SELECTOR'
          | 'COURSE_MULTIPLE_SELECT'
          | 'GPA_SINGLE_SELECT'
          | 'TIME_SELECTOR'
          | 'TIME_DURATION'
          | 'WORKSHOP_RADIO_BUTTON';
        options: {
          datetime_start: Date;
          id: number;
          name: string;
        }[];
        order: number;
        title: string;
        placeholder?: string;
        default?: string;
      }[];
    },
  ];
}

export interface CourseResultInterface {
  id: number;
  name: string;
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
}
export interface CourseInterface {
  count: number;
  next: string;
  previous: string;
  results: CourseResultInterface[];
}
