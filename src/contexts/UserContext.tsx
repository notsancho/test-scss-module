import * as React from 'react';
// import { useRequest } from 'estafette';
// import { authentication } from 'libs/http/api';
import { DetailsInterface } from 'libs/http/api/authentication/authentication.types';

interface Props {
  user: DetailsInterface | null;
}

export const UserContext = React.createContext<Props>({
  user: null,
});

export const UserProvider = ({ children }: { children: React.ReactElement }): React.ReactElement => {
  // const { request: requestLogin, data: dataLogin, loading: loadingLogin } = useRequest<DetailsInterface>({
  //   data: {},
  // });

  const [user] = React.useState<DetailsInterface | null>(null);

  // React.useEffect(() => {
  //   if (jwtAccess) {
  //     const getUserInfo = async (): Promise<void> => {
  //       const data = await onFetchUserData();
  //       setUser(data);
  //     };
  //     getUserInfo();
  //   }
  // }, [jwtAccess]);

  // const onFetchUserData = (): Promise<User> => requestUser(me.get.action());

  // React.useEffect(() => {
  //   const login = async (): Promise<void> => {
  //     const params = {
  //       username: 'front@ebs.io',
  //       password: 'test123123test',
  //     };
  //     requestLogin(authentication.login.action(params));
  //   };
  //   login();
  // }, []);

  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
