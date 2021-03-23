import * as React from 'react';

interface Props {
  className?: string;
}

export const Layout: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={`layout ${className ? className : ''}`}>
      <div>
        <div className="container">
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
};
