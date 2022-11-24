import React, { useContext, useEffect, useState } from "react";

// Define the context so it can be used for both the provider and the use hook
const UserNameContext = React.createContext<{
  userName: string | null;
  updateUserName: (name: string) => void;
}>({ userName: null, updateUserName: () => null });

/** Provider to hold the user name state */
export const UserNameProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userName, setUserName] = useState<string | null>(null);

  /** persist username to localstorage and rerender via useState */
  const updateUserName = (name: string) => {
    if (typeof name === "string") {
      localStorage.setItem("suggest-and-vote-userName", name);
      setUserName(name);
    }
  };

  // Client-side check if the username is already saved in localstorage
  useEffect(() => {
    if (!userName) {
      const name = localStorage?.getItem("suggest-and-vote-userName");
      if (name) setUserName(name);
    }
  }, [userName]);

  return (
    <>
      <UserNameContext.Provider value={{ userName, updateUserName }}>
        {children}
      </UserNameContext.Provider>
    </>
  );
};

/** custom hook to manage user name state */
const useUserName = () => {
  const { userName, updateUserName } = useContext(UserNameContext);
  return { userName, updateUserName };
};

export default useUserName;
