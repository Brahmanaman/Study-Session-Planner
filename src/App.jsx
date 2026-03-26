import React, { useContext, useState } from "react";
import Header from "./components/Header";
import SessionForm from "./components/SessionForm";
import SessionCard from "./components/SessionCard";
import { context } from "./context/SessionContext";

export const App = () => {
  let [toggle, setToggle] = useState(false);
  let { session } = useContext(context);

  return (
    <>
      <div className="bg-stone-950 h-screen w-full">
        <Header setToggle={setToggle} />
        <div className="px-3 mt-5 flex flex-wrap gap-5">
          {session &&
            session.map((data, index) => {
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
