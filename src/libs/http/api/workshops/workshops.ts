import { Canceler } from 'axios';
import env from '@beam-australia/react-env';
import { axios } from 'libs/http/axios';
import { DetailsInterface } from '../authentication/authentication.types';
import {
  WorkshopsInterface,
  WorkshopsEventsInterface,
  WorkshopsItemInterface,
  EventInterface,
} from './workshops.types';

export const workshops = {
  getWorkshops: {
    action: (params = {}): Promise<{ data: WorkshopsInterface }> =>
      axios.get(`${env('API_URL')}/dashboard/workshops/`, { params }),
    cancel: (() => null) as Canceler,
  },
  getWorkshopsItem: {
    action: (id: number): Promise<{ data: WorkshopsItemInterface }> =>
      axios.get(`${env('API_URL')}/dashboard/workshops/${id}/`),
    cancel: (() => null) as Canceler,
  },
  addWorkshopsItem: {
    action: (params = {}): Promise<{ data: DetailsInterface }> =>
      axios.post(`${env('API_URL')}/dashboard/workshops/`, params),
    cancel: (() => null) as Canceler,
  },
  editWorkshopsItem: {
    action: (id: number, params = {}): Promise<{ data: DetailsInterface }> =>
      axios.patch(`${env('API_URL')}/dashboard/workshops/${id}/`, params),
    cancel: (() => null) as Canceler,
  },
  // getTasks: {
  //   action: (id: number, params: {}): Promise<{ data: CourseTasksInterface }> =>
  //     axios.get(`${env('API_URL')}/dashboard/workshops/${id}/tasks/`, { params }),
  //   cancel: (() => null) as Canceler,
  // },
  getEvents: {
    action: (id: number, params: {}): Promise<{ data: WorkshopsEventsInterface }> =>
      axios.get(`${env('API_URL')}/dashboard/workshops/${id}/events/`, { params }),
    cancel: (() => null) as Canceler,
  },
  addEvent: {
    action: (courseId: number, params: {}): Promise<{ data: DetailsInterface }> =>
      axios.post(`${env('API_URL')}/dashboard/workshops/${courseId}/events/`, params),
    cancel: (() => null) as Canceler,
  },
  editEvent: {
    action: (courseId: number, eventId: number, params: {}): Promise<{ data: DetailsInterface }> =>
      axios.patch(`${env('API_URL')}/dashboard/workshops/${courseId}/events/${eventId}/`, params),
    cancel: (() => null) as Canceler,
  },
  getEvent: {
    action: (courseId: number, id: number): Promise<{ data: EventInterface }> =>
      axios.get(`${env('API_URL')}/dashboard/workshops/${courseId}/events/${id}/`),
    cancel: (() => null) as Canceler,
  },
  deleteEvent: {
    action: (courseId: number, eventId: number): Promise<{ data: DetailsInterface }> =>
      axios.delete(`${env('API_URL')}/dashboard/workshops/${courseId}/events/${eventId}/`),
    cancel: (() => null) as Canceler,
  },
  deleteWorkshopsItem: {
    action: (id: number): Promise<{ data: DetailsInterface }> =>
      axios.delete(`${env('API_URL')}/dashboard/workshops/${id}/`),
    cancel: (() => null) as Canceler,
  },
};
