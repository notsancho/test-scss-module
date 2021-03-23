import { Canceler } from 'axios';
import env from '@beam-australia/react-env';
import { axios } from 'libs/http/axios';
import { StatisticResultInterface } from './statistic.types';

export const statistic = {
  getStatistic: {
    action: (params = {}): Promise<{ data: StatisticResultInterface[] }> =>
      axios.get(`${env('API_URL')}/dashboard/statistics/`, { params }),
    cancel: (() => null) as Canceler,
  },
  // getInvitedUsers: {
  //   action: (params = {}): Promise<{ data: UsersListInterface }> =>
  //     axios.get(`${env('API_URL')}/dashboard/invites/`, { params }),
  //   cancel: (() => null) as Canceler,
  // },
  // getUserInfo: {
  //   action: (id: number): Promise<{ data: UserInfoInterface }> => axios.get(`${env('API_URL')}/dashboard/users/${id}/`),
  //   cancel: (() => null) as Canceler,
  // },
  // patchUser: {
  //   action: (params: {}, id: number): Promise<{ data: UsersListInterface }> =>
  //     axios.patch(`${env('API_URL')}/dashboard/users/${id}/`, params),
  //   cancel: (() => null) as Canceler,
  // },
  // getTasks: {
  //   action: (id: number): Promise<{ data: UserTasksInterface }> =>
  //     axios.get(`${env('API_URL')}/dashboard/users/${id}/tasks/`),
  //   cancel: (() => null) as Canceler,
  // },
  // inviteUser: {
  //   action: (params: {}): Promise<{ data: DetailsInterface }> =>
  //     axios.post(`${env('API_URL')}/dashboard/invites/`, params),
  //   cancel: (() => null) as Canceler,
  // },
  // addTask: {
  //   action: (params: {}, id: number): Promise<{ data: UserTasksInterface }> =>
  //     axios.post(`${env('API_URL')}/dashboard/users/${id}/tasks/`, params),
  //   cancel: (() => null) as Canceler,
  // },
  // deleteTask: {
  //   action: (userId: number, taskId: number): Promise<{ data: UserTasksInterface }> =>
  //     axios.delete(`${env('API_URL')}/dashboard/users/${userId}/tasks/${taskId}/`),
  //   cancel: (() => null) as Canceler,
  // },
};
