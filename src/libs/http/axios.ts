import $axios from 'axios';
import env from '@beam-australia/react-env';
import { load } from 'react-cookies';

export const axios = $axios.create();

// eslint-disable-next-line import/no-named-as-default-member
export const cancelToken = $axios.CancelToken;

axios.defaults.headers['Accept-Language'] = load('localization') || 'en';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Service-Token'] = env('SSO_SERVICE_TOKEN');

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if ($axios.isCancel(error)) {
      // eslint-disable-next-line
      return Promise.reject({ cancel: true, message: 'The endpoint was cancelled' });
    }

    return Promise.reject(error);
  },
);

export const axiosHeadersUpdater = (): void => {
  const accessToken = load('access-token');

  if (accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else if (axios.defaults.headers.common.Authorization) {
    delete axios.defaults.headers.common.Authorization;
  }

  // if (webToken) {
  //   axios.defaults.headers.common['Web-Authorization'] = `Token ${webToken}`;
  // } else if (axios.defaults.headers.common['Web-Authorization']) {
  //   delete axios.defaults.headers.common['Web-Authorization'];
  // }
};

axiosHeadersUpdater();

// export const axiosHeadersUpdaterLogin = (): void => {
//   axios.defaults.headers.post['Service-Token'] = env('SSO_SERVICE_TOKEN');
//   axios.defaults.baseURL = `https://${env('SSO_URL')}`;
// };

// export const axiosHeadersUpdaterApi = (): void => {
//   delete axios.defaults.headers.post['Service-Token'];
//   axios.defaults.baseURL = `https://${env('API_URL')}`;
// };

// axiosHeadersUpdaterApi();
