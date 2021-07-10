import * as React from "react";
import { useCurrentUser } from "../hooks";

type CurrentUserType = {
  [key: string]: string;
};

export const CurrentUserContext = React.createContext<CurrentUserType | null>(
  null
);

export const CurrentUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { currentUser } = useCurrentUser();

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {children}
    </CurrentUserContext.Provider>
  );
};
