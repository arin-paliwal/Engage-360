import { useEffect, useState } from "react";
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
import axiosInstance from "../../../api/axios";
import toast from "react-hot-toast";

export interface Todo {
  id: string;
  title: string;
  date: string;
  comments?: number;
  attachments?: number;
  tags?: string[];
  completed: boolean;
}

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
  const [todos, setTodos] = useState<Todo[]>([]);
  const [assignedTodosState, setAssignedTodos] =
    useState<Todo[]>(assignedTodos);
  const userEmail = JSON.parse(
    localStorage.getItem("currentUser") || "{}"
  ).email;
  const [openAddTodo, setOpenAddTodo] = useState(false);

  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [tags, setTags] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/employees_todo?id=${userEmail}`);
        const allTodos = response.data
          .filter((user: any) => user.id === userEmail) 
          .flatMap((user: any) => user.todos); 
        const uniqueTodos = allTodos.reduce((acc: Todo[], currentTodo: Todo) => {
          const exists = acc.some(todo => todo.id === currentTodo.id);
          if (!exists) acc.push(currentTodo);
          return acc;
        }, []);
        setTodos(uniqueTodos); 
        console.log(uniqueTodos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [userEmail]);
  

  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  const handleComplete = async (id: string) => {
    try {
      const response = await axiosInstance.patch(
        `/employees_todo/${userEmail}`,
        {
          todos: todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }
      );
      toast.remove();
      toast.success("Todo updated successfully.");
    } catch (error) {
      toast.remove();
      toast.error("Failed to update todo.");
      console.error("Error updating todo:", error);
    }

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
  };

  const handleDrop = (droppedTodo: Todo) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === droppedTodo.id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: String(Date.now()),
      title,
      date,
      completed: false,
      tags: tags.split(",").map((tag) => tag.trim()),
    };
    const isTodoDuplicate = todos.some((todo) => todo.title === newTodo.title && todo.date === newTodo.date);

    if (isTodoDuplicate) {
      toast.error("This todo already exists.");
      return;
    }
    try {
      const todo_obj = {
        id: userEmail,
        todos: [...todos, newTodo],
      };
      const response = await axiosInstance.post(`/employees_todo`, todo_obj);
      setTodos((prev) => [...prev, newTodo]);
      setTitle("");
      setDate("");
      setTags("");
      setOpenAddTodo(false);
      toast.success("Todo added successfully.");
    } catch (error) {
      console.error("Error adding todo:", error);
      toast.error("Failed to add todo.");
    }
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
                  View and manage your self-created tasks here.
                </p>
              </div>
            </div>
            <div
              className="flex items-center gap-4"
              onClick={() => setOpenAddTodo(true)}
            >
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
      {openAddTodo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          
          <form onSubmit={addTodo} className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h1 className="text-2xl font-semibold text-lightMode-primaryText dark:text-darkMode-primaryText mb-6">
            Add Todo
          </h1>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Todo Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Enter todo title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Due Date
              </label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="tags"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tags
              </label>
              <input
                id="tags"
                type="text"
                placeholder="Enter tags (comma-separated)"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-3 w-full p-2 text-white rounded-md bg-lightMode-accentBlue"
            >
              <GitBranchPlus className="w-4 h-4" />
              Add Todo
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
