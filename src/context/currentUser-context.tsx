import React, { createContext, useContext } from "react";
import { useCurrentUser } from "../hooks";

type CurrentUserType = {
  [key: string]: string;
};

export const CurrentUserContext = createContext<CurrentUserType | null>(null);

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

export const useCurrentUserValue = () => useContext(CurrentUserContext);
