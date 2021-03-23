import { Canceler } from 'axios';
import env from '@beam-australia/react-env';
import { axios } from 'libs/http/axios';
import { DetailsInterface } from './authentication.types';

export const authentication = {
  register: {
    action: (params = {}): Promise<{ data: DetailsInterface }> =>
      axios.post(`${env('API_URL')}/users/register/`, params),
    cancel: (() => null) as Canceler,
  },
  login: {
    action: (params = {}): Promise<{ data: DetailsInterface }> =>
      axios.post(`${env('SSO_URL')}/authentication/login`, params),
    cancel: (() => null) as Canceler,
  },
  activate: {
    action: (params = {}): Promise<{ data: DetailsInterface }> =>
      axios.post(`${env('SSO_URL')}/users/activate/`, params),
    cancel: (() => null) as Canceler,
  },
  recovery: {
    action: (params = {}): Promise<{ data: DetailsInterface }> =>
      axios.post(`${env('SSO_URL')}/authentication/restore-request`, params),
    cancel: (() => null) as Canceler,
  },
  reset: {
    action: (params = {}): Promise<{ data: DetailsInterface }> =>
      axios.post(`${env('SSO_URL')}/authentication/restore-confirm`, params),
    cancel: (() => null) as Canceler,
  },
};
