import { useContext } from "react";
import { context } from "../context/SessionContext";

const SessionCard = ({ data, setToggle }) => {
  const { id, subject, topic, date, duration, priority } = data;
  let { deleteSession, setInsertSession } = useContext(context);

  const handleEdit = () => {
    setInsertSession(data);
    setToggle(true);
  };

  return (
    <>
      <div className="max-w-sm w-full backdrop-blur-lg bg-white/20 shadow-xl rounded-2xl p-5 border border-white/30 hover:shadow-2xl transition duration-300">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-white">
            📚 {subject?.toUpperCase()}
          </h2>

          <span
            className={`text-xs font-medium px-2 py-1 rounded-full backdrop-blur-md ${
              priority === "high"
                ? "bg-red-400/20 text-red-200 border border-red-300/30"
                : priority === "medium"
                  ? "bg-yellow-400/20 text-yellow-200 border border-yellow-300/30"
                  : "bg-green-400/20 text-green-200 border border-green-300/30"
            }`}
          >
            {priority}
          </span>
        </div>

        <p className="text-sm text-gray-200 mb-4">
          Topic: <span className="font-medium text-white">{topic}</span>
        </p>

        <div className="flex justify-between text-sm text-gray-300 mb-4">
          <div>
            <p className="font-medium text-gray-200">Date</p>
            <p>{new Date(date).toLocaleDateString()}</p>
          </div>

          <div>
            <p className="font-medium text-gray-200">Duration</p>
            <p>{duration} mins</p>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={handleEdit}
            className="px-3 py-1 text-sm rounded-lg bg-blue-400/20 text-blue-200 border border-blue-300/30 hover:bg-blue-400/30 transition cursor-pointer"
          >
            ✏️ Edit
          </button>

          <button
            onClick={() => deleteSession(id)}
            className="px-3 py-1 text-sm rounded-lg bg-red-400/20 text-red-200 border border-red-300/30 hover:bg-red-400/30 transition cursor-pointer"
          >
            🗑 Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default SessionCard;
