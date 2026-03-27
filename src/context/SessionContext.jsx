import React, { Children, createContext, useState } from "react";

export const context = createContext();

const SessionContext = ({ children }) => {
  let [session, setSession] = useState(JSON.parse(localStorage.getItem("sessionData")) || []);
  let [insertSession, setInsertSession] = useState(null);
  const [filteredSession, setFilteredSession] = useState(session);
  let [completed, setCompleted] = useState(false)

  const addSession = (sessionObj) => {
    //edit
    if (insertSession) {
      let updatedData = session.map((x) => {
        return x.id == sessionObj.id ? { ...x, ...sessionObj } : x;
      });
      setSession(updatedData);
      setFilteredSession(updatedData);
      setInsertSession(null);
      localStorage.setItem("sessionData", JSON.stringify(updatedData))
    }
    //add
    else {
      let data = [...session, sessionObj]
      localStorage.setItem("sessionData", JSON.stringify(data))
      setSession((prev) => [...prev, sessionObj]);
      setFilteredSession((prev) => [...prev, sessionObj]);
    }

  };

  const deleteSession = (id) => {
    let result = session.filter((data) => {
      return data.id != id;
    });
    setSession(result);
    setFilteredSession(result)
    localStorage.setItem("sessionData", JSON.stringify(result))
  };

  const markCompleted = (id) => {
    let result = session.map((data) => {
      return data.id == id ? { ...data, completed: !completed } : data;
    })
    setCompleted((prev) => !prev)
    setSession(result);
    setFilteredSession(result);
    localStorage.setItem("sessionData", JSON.stringify(result))
  }

  return (
    <context.Provider
      value={{
        addSession,
        setSession,
        setInsertSession,
        insertSession,
        session,
        deleteSession,
        filteredSession,
        setFilteredSession,
        markCompleted,
        setCompleted,
        completed
      }}
    >
      {children}
    </context.Provider>
  );
};

export default SessionContext;
