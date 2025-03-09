'use client'

import { FC } from "react";
import CustomButton from "../../components/CustomButton";
import TaskCreator from "../../components/TaskCreator";
import { useTaskStore } from "../../state/state";
import TaskCard from "../../components/TaskCard";
import { AnimatePresence } from "framer-motion";

const Home: FC = () => {
  const {Task} = useTaskStore()

  return (
    <>
    <div className="w-full mt-10 flex flex-col">
      <div className="w-full flex justify-center mb-10">
      <CustomButton title="Add task" buttonConatinerStyle="mx-auto" />
      </div>
      <div className="w-full flex justify-center">
      <TaskCreator/>
      </div>
      <div className="flex items-center flex-col mt-5  overflow-hidden">
      <AnimatePresence mode="wait">
      {Task.length === 0
       ? 
      <span>Empty</span> 
      : 
             Task.map((el, index) => (
        <TaskCard title={el} key={index}/>
      ))
    }
    </AnimatePresence>
    </div>
    </div>
    </>
  );
};

export default Home;
