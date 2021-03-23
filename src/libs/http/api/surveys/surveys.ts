import { Canceler } from 'axios';
import env from '@beam-australia/react-env';
import { axios } from 'libs/http/axios';
import { SurveysListInterface, SurveysSectionsListInterface, CourseInterface } from './surveys.types';

export const surveys = {
  surveysList: {
    action: (params = {}): Promise<{ data: SurveysListInterface }> =>
      axios.get(`${env('API_URL')}/surveys/list/`, params),
    cancel: (() => null) as Canceler,
  },
  surveysSectionsList: {
    action: (params = {}): Promise<{ data: SurveysSectionsListInterface }> =>
      axios.get(`${env('API_URL')}/surveys/1/sections/list/`, params),
    cancel: (() => null) as Canceler,
  },
  coursesSearch: {
    action: (params = {}): Promise<{ data: CourseInterface }> =>
      axios.get(`${env('API_URL')}/surveys/courses/list/`, { params }),
    cancel: (() => null) as Canceler,
  },
};
