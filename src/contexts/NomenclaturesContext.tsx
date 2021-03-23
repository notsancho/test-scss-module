import * as React from 'react';

interface Props {
  readonly languages: any;
}

export const NomenclaturesContext = React.createContext<Props>({
  languages: [],
});

export const NomenclaturesProvider = ({ children }: { children: React.ReactElement }): React.ReactElement => {
  const languages = ['en'];

  return (
    <NomenclaturesContext.Provider
      value={{
        languages,
      }}
    >
      {children}
    </NomenclaturesContext.Provider>
  );
};
