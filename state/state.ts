import { create } from "zustand";

type TaskStoreType = {
  Task: Array<string>;
  addTask: (newTask: string) => void
  deleteTask: (removeableTask: string) => void
};

export const useTaskStore = create<TaskStoreType>()((set) => ({
  Task: [],
  addTask(newTask) {
    set((state) => ({
        Task: [...state.Task , newTask]
    }));
  },
  deleteTask(removeableTask){
    set((state) => ({
        Task: [...state.Task.filter(newTask => newTask !== removeableTask)]
    }))
  }
}));
