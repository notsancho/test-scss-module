import { Canceler } from 'axios';
import env from '@beam-australia/react-env';
import { axios } from 'libs/http/axios';
import { DetailsInterface } from '../authentication/authentication.types';
import {
  AcademicCoursesInterface,
  CourseEventsInterface,
  CourseInterface,
  CourseTasksInterface,
  EventInterface,
} from './academicCourses.types';

export const academicCourses = {
  getCourses: {
    action: (params = {}): Promise<{ data: AcademicCoursesInterface }> =>
      axios.get(`${env('API_URL')}/dashboard/courses/`, { params }),
    cancel: (() => null) as Canceler,
  },
  getCourse: {
    action: (id: number): Promise<{ data: CourseInterface }> => axios.get(`${env('API_URL')}/dashboard/courses/${id}/`),
    cancel: (() => null) as Canceler,
  },
  addCourse: {
    action: (params = {}): Promise<{ data: DetailsInterface }> =>
      axios.post(`${env('API_URL')}/dashboard/courses/`, params),
    cancel: (() => null) as Canceler,
  },
  editCourse: {
    action: (id: number, params = {}): Promise<{ data: DetailsInterface }> =>
      axios.patch(`${env('API_URL')}/dashboard/courses/${id}/`, params),
    cancel: (() => null) as Canceler,
  },
  getTasks: {
    action: (id: number, params: {}): Promise<{ data: CourseTasksInterface }> =>
      axios.get(`${env('API_URL')}/dashboard/courses/${id}/tasks/`, { params }),
    cancel: (() => null) as Canceler,
  },
  getEvents: {
    action: (id: number, params: {}): Promise<{ data: CourseEventsInterface }> =>
      axios.get(`${env('API_URL')}/dashboard/courses/${id}/events/`, { params }),
    cancel: (() => null) as Canceler,
  },
  addEvent: {
    action: (courseId: number, params: {}): Promise<{ data: DetailsInterface }> =>
      axios.post(`${env('API_URL')}/dashboard/courses/${courseId}/events/`, params),
    cancel: (() => null) as Canceler,
  },
  editEvent: {
    action: (courseId: number, eventId: number, params: {}): Promise<{ data: DetailsInterface }> =>
      axios.patch(`${env('API_URL')}/dashboard/courses/${courseId}/events/${eventId}/`, params),
    cancel: (() => null) as Canceler,
  },
  getEvent: {
    action: (courseId: number, id: number): Promise<{ data: EventInterface }> =>
      axios.get(`${env('API_URL')}/dashboard/courses/${courseId}/events/${id}/`),
    cancel: (() => null) as Canceler,
  },
  deleteEvent: {
    action: (courseId: number, eventId: number): Promise<{ data: DetailsInterface }> =>
      axios.delete(`${env('API_URL')}/dashboard/courses/${courseId}/events/${eventId}/`),
    cancel: (() => null) as Canceler,
  },
  deleteCourse: {
    action: (id: number): Promise<{ data: DetailsInterface }> =>
      axios.delete(`${env('API_URL')}/dashboard/courses/${id}/`),
    cancel: (() => null) as Canceler,
  },
};
