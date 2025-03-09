/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import React, { FC, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { useTaskStore } from "../state/state";

const TaskCreator: FC = ({}) => {
  const [newTask, setNewTask] = useState("");
  const {addTask} = useTaskStore()
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    addTask(newTask)
  }

  return (
    <motion.div className="border-[0.5px] w-max px-5 py-3 rounded-md ">
      <form action="submit" onSubmit={handleSubmit} className="flex gap-x-5">
        <input
          type="text"
          name="addTask"
          value={newTask}
          style={{ outline: 'none'}}
          onChange={(event) => setNewTask(event.currentTarget.value)}
          placeholder="addTask"
        />
        <button type="submit">Add</button>
      </form>
    </motion.div>
  );
};

export default TaskCreator;
