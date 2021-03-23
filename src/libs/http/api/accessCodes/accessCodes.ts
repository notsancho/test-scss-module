import { Canceler } from 'axios';
import { axios } from 'libs/http/axios';
import env from '@beam-australia/react-env';
import { DetailsInterface } from '../authentication/authentication.types';
import { AccessListInterface } from './accessCodes.types';

export const accessCodes = {
  getList: {
    action: (params = {}): Promise<{ data: AccessListInterface }> =>
      axios.get(`${env('API_URL')}/access-codes/list/`, { params }),
    cancel: (() => null) as Canceler,
  },
  addCode: {
    action: (params = {}): Promise<{ data: DetailsInterface }> => axios.post(`${env('API_URL')}/access-codes/`, params),
    cancel: (() => null) as Canceler,
  },
  delete: {
    action: (id: number): Promise<{ data: DetailsInterface }> => axios.delete(`${env('API_URL')}/access-codes/${id}/`),
    cancel: (() => null) as Canceler,
  },
};
