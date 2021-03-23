import * as React from 'react';
import { render } from 'react-dom';
import { NomenclaturesProvider } from 'contexts';
import { CreateRouter } from 'estafette-router';
import { routes } from 'routes';
import { history } from 'libs/history';

import 'styles/index.scss';

render(
  <NomenclaturesProvider>
    <CreateRouter routes={routes} history={history} />
  </NomenclaturesProvider>,
  document.getElementById('root'),
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    //returns installed service workers
    if (registrations.length) {
      for (const registration of registrations) {
        registration.unregister();
      }
    }
  });
}
