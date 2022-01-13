import { useState, createContext, useMemo } from "react";
export const AllTasksContext = createContext({
  tasks: [],
  setTasks: () => {},
});
export const FinishedTasksContext = createContext({
  finishedTasks: [],
  setFinishedTasks: () => {},
});

export const EditModeContext = createContext({
  editMode: [],
  setEditMode: () => {},
});
