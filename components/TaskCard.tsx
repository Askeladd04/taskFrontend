import React, { FC } from "react";
import { motion,  } from "framer-motion";
import { useTaskStore } from "../state/state";

type TaskCardType = {
  title: string;
};

const TaskCard: FC<TaskCardType> = ({ title }) => {
  const { deleteTask } = useTaskStore();

  const handleRemoveClick = () => {
    deleteTask(title);
  };

  return (
      <motion.div
        className="w-1/2 border-[0.5px] mb-4 rounded-lg px-4 py-2 flex justify-between"
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
        }}
        exit={{  x: -1000 , opacity: 0}}
      >
        {title}
        <button
          onClick={handleRemoveClick}
          className="border-[1px] px-2 rounded-xl text-rose-500 border-white cursor-pointer hover:text-rose-200 transition duration-300"
        >
          X
        </button>
      </motion.div>
  );
};

export default TaskCard;
