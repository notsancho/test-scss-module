import * as React from 'react';
import { Layout } from 'ui/templates';
import { Button } from 'ui/atoms';

export default (): React.ReactElement => {
  return (
    <Layout className="calendar-layout">
      <h1>Test h1</h1>

      <Button />
    </Layout>
  );
};
