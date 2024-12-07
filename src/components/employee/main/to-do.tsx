"use client";

import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  FolderKanban,
  GitBranchPlus,
  Plus,
  SlidersHorizontal,
  Workflow,
} from "lucide-react";
import { TodoList } from "../todo/to-do-list";
import { AssignedTodoList } from "../todo/assigned-todo";
export interface Todo {
  id: string;
  title: string;
  date: string;
  comments?: number;
  attachments?: number;
  tags?: string[];
  completed: boolean;
}

const initialTodos: Todo[] = [
  {
    id: "1",
    title: "Complete project documentation",
    date: "2024-12-07",
    completed: false,
    tags: ["Development", "Documentation"],
  },
  {
    id: "2",
    title: "Plan sprint tasks",
    date: "2024-12-10",
    completed: false,
    tags: ["Planning", "Sprint"],
  },
  {
    id: "3",
    title: "Review pull requests",
    date: "2024-12-12",
    completed: true,
    tags: ["Code Review", "Development"],
  },
  {
    id: "4",
    title: "Prepare for client meeting",
    date: "2024-12-15",
    completed: true,
    tags: ["Meeting", "Client"],
  },
  {
    id: "5",
    title: "Optimize application performance",
    date: "2024-12-20",
    completed: false,
    tags: ["Optimization", "Performance"],
  },
];

const assignedTodos: Todo[] = [
  {
    id: "6",
    title: "Complete project documentation",
    date: "2024-12-07",
    completed: false,
    tags: ["Development", "Documentation"],
  },
  {
    id: "7",
    title: "Plan sprint tasks",
    date: "2024-12-10",
    completed: false,
    tags: ["Planning", "Sprint"],
  },
  {
    id: "8",
    title: "Review pull requests",
    date: "2024-12-12",
    completed: true,
    tags: ["Code Review", "Development"],
  },
  {
    id: "9",
    title: "Prepare for client meeting",
    date: "2024-12-15",
    completed: true,
    tags: ["Meeting", "Client"],
  },
  {
    id: "10",
    title: "Optimize application performance",
    date: "2024-12-20",
    completed: false,
    tags: ["Optimization", "Performance"],
  },
];

export default function TodoComponent() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [assignedTodosState, setAssignedTodos] = useState<Todo[]>(assignedTodos);

  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  const handleComplete = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleCompleteAssigned = (id: string) => {
    setAssignedTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const handleDrop = (droppedTodo: Todo) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === droppedTodo.id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="min-h-screen text-lightMode-primaryText dark:text-darkMode-primaryText">
      <div className="flex flex-col p-6">
        <DndProvider backend={HTML5Backend}>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-lightMode-accentBlue rounded-lg flex items-center justify-center">
                <Workflow className="w-6 h-6 text-white" />
              </div>
              <div className="ml-2">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  To-Do
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  View and manager your self-created tasks here.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-lightMode-accentBlue text-white rounded-lg">
                <GitBranchPlus className="w-4 h-4" />
                Create Task
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <TodoList
              title="Private Tasks"
              todos={incompleteTodos}
              onComplete={handleComplete}
              onDrop={handleDrop}
            />
            <TodoList
              title="Completed Tasks"
              todos={completedTodos}
              onComplete={handleComplete}
              onDrop={handleDrop}
            />
          </div>
        </DndProvider>
        <h2 className="text-xl font-semibold flex items-center gap-2 my-6">
          <div className="w-1 h-6 bg-lightMode-accentBlue dark:bg-darkMode-accentBlue rounded"></div>
          Assigned Tasks
        </h2>
        <AssignedTodoList
          todos={assignedTodosState}
          onComplete={handleCompleteAssigned}
        />
      </div>
    </div>
  );
}
