import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

// Update the User type
interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  iat: number;
  // Add other properties as needed
}

// Update the UserContextProps type
interface UserContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
});

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
