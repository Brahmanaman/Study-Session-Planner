import React, { Children, createContext, useState } from "react";

export const context = createContext();

const SessionContext = ({ children }) => {
  let [session, setSession] = useState([]);
  let [insertSession, setInsertSession] = useState(null);

  const addSession = (sessionObj) => {
    //edit
    if (insertSession) {
      let updatedData = session.map((x) => {
        return x.id == sessionObj.id ? { ...x, ...sessionObj } : x;
      });
      console.log(updatedData);
      setSession(updatedData);
      setInsertSession(null);
    }
    //add
    else {
      setSession((prev) => [...prev, sessionObj]);
    }
  };

  const deleteSession = (id) => {
    let result = session.filter((data) => {
      return data.id != id;
    });
    setSession(result);
  };

  return (
    <context.Provider
      value={{
        addSession,
        setSession,
        setInsertSession,
        insertSession,
        session,
        deleteSession,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default SessionContext;
