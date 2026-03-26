import { RxCross2 } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { context } from "../context/SessionContext";
import { nanoid } from "nanoid";

const SessionForm = ({ setToggle }) => {
  let { insertSession, setInsertSession, addSession, setSession } =
    useContext(context);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: insertSession,
    mode: "onChange",
  });

  const submitHandler = (data) => {
    if (insertSession) {
      addSession({ ...data, id: insertSession.id });
    } else {
      addSession({ ...data, id: nanoid() });
    }

    reset();
    setInsertSession(null);
    setToggle(false);
  };

  return (
    <>
      <div className="fixed inset-0">
        <div className="absolute z-50 inset-0 bg-stone-900/40 backdrop-blur-sm"></div>
        <div className="absolute top-10 left-[50%] -translate-x-[50%] z-900">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="p-5 flex items-start justify-center flex-col border border-transparent rounded-md bg-stone-950 w-87.5 relative z-100"
          >
            <div className="w-full h-full space-y-3">
              <h1 className="text-3xl mb-5">
                {insertSession ? "Edit" : "Add"}
              </h1>
              <RxCross2
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => {
                  setInsertSession(null);
                  reset();
                  setToggle((prev) => !prev);
                }}
              />
              <div className="flex flex-col gap-1">
                <label className="uppercase font-semibold tracking-wide text-xs">
                  Topic
                </label>
                <input
                  className="border border-stone-400 py-2 px-3 rounded-md placeholder:text-stone-400 outline-none text-xs"
                  type="text"
                  name="topic"
                  id="topic"
                  {...register("topic", { required: true })}
                  placeholder="Enter topic"
                />
                {errors.topic && (
                  <span className="text-red-500 text-xs">
                    Topic is required
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label className="uppercase font-semibold tracking-wide text-xs">
                  Subject
                </label>
                <select
                  {...register("subject", { required: true })}
                  className="border border-stone-400 py-2 px-3 rounded-md placeholder:text-stone-400 outline-none w-full bg-stone-950 text-xs"
                >
                  <option value="">Select Subject</option>
                  <option value="dsa">DSA</option>
                  <option value="webdev">Web Dev</option>
                  <option value="dbms">DBMS</option>
                  <option value="os">OS</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <span className="text-red-500 text-xs">
                    Subject is required
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label className="uppercase font-semibold tracking-wide text-xs">
                  Duration
                </label>
                <input
                  type="number"
                  name="duration"
                  id="duration"
                  min={10}
                  {...register("duration", { required: true })}
                  className="border border-stone-400 py-2 px-3 rounded-md placeholder:text-stone-400 outline-none w-full bg-stone-950 text-xs"
                />
                {errors.duration && (
                  <span className="text-red-500 ">Duration is required</span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label className="uppercase font-semibold tracking-wide text-xs">
                  Priority
                </label>
                <select
                  {...register("priority", { required: true })}
                  className="border border-stone-400 py-2 px-3 rounded-md placeholder:text-stone-400 outline-none w-full bg-stone-950 text-xs"
                >
                  <option value="">Select priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                {errors.priority && (
                  <span className="text-red-500 text-xs">
                    Priority is required
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label className="uppercase font-semibold tracking-wide text-xs">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  {...register("date", { required: true })}
                  className="border border-stone-400 py-2 px-3 rounded-md placeholder:text-stone-400 outline-none w-full bg-stone-950 text-xs"
                />
                {errors.date && (
                  <span className="text-red-500 text-xs">Date is required</span>
                )}
              </div>

              <button
                className="bg-blue-500 cursor-pointer rounded-md py-2 px-4 font-semibold -tracking-wider w-full mt-5 hover:bg-blue-800 transition-color text-xs"
                type="submit"
              >
                {insertSession ? "Edit " : "Add "}
                Session
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SessionForm;
