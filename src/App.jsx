import React, { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import SessionForm from "./components/SessionForm";
import SessionCard from "./components/SessionCard";
import { context } from "./context/SessionContext";

export const App = () => {
  let [toggle, setToggle] = useState(false);
  let { session, filteredSession, setFilteredSession } = useContext(context);
  let [totalHours, setTotalHours] = useState(null);

  useEffect(() => {
    const totalMinutes = filteredSession?.reduce((acc, data) => {
      return acc + (Number(data.duration) || 0);
    }, 0);

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours == 0) {
      setTotalHours(`${minutes} min`);
    } else {
      setTotalHours(`${hours} h ${minutes} min`);
    }
  }, [filteredSession]);

  const seachCard = (value) => {
    if (!value) {
      setFilteredSession(session);
      return;
    }
    let filteredData = session.filter((data) =>
      data.topic?.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredSession(filteredData);
  };

  return (
    <>
      <div className="bg-stone-950 min-h-screen w-full">
        <Header setToggle={setToggle} />
        <div className="px-8 py-2 w-full text-end">
          <p className="mb-2 text-stone-400 italic font-serif">
            Total Study Duration: {totalHours}
          </p>
          <input
            onChange={(e) => seachCard(e.target.value)}
            className="border border-stone-400 py-2 px-3 rounded-md placeholder:text-stone-400 outline-none text-xs"
            type="text"
            placeholder="Search card by topic"
          />
        </div>
        {filteredSession.length == 0 && (
          <div className="h-100 w-full flex justify-center items-center flex-col">
            <h1 className="text-stone-500 text-2xl font-serif tracking-wider">
              No data found
            </h1>
            <p className="text-stone-500 font-serif text-xs tracking-widest">
              Please add some data
            </p>
          </div>
        )}
        <div className="px-8 mt-5 flex flex-wrap gap-5">
          {filteredSession &&
            filteredSession.map((data, index) => {
              return (
                <SessionCard key={index} data={data} setToggle={setToggle} />
              );
            })}
        </div>

        {toggle && <SessionForm setToggle={setToggle} />}
      </div>
    </>
  );
};
