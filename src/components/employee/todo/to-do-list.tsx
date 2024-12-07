import { useDrop } from "react-dnd";
import { Todo } from "../main/to-do";
import { TodoItem } from "./to-do-item";

interface TodoListProps {
  title: string;
  todos: Todo[];
  onComplete: (id: string) => void;
  onDrop?: (todo: Todo) => void;
}

export function TodoList({ title, todos, onComplete, onDrop }: TodoListProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TODO",
    drop: (item: Todo) => {
      onDrop?.(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`flex-1 h-[55vh] bg-lightMode-background dark:bg-darkMode-background componentScroll overflow-auto rounded-lg borde border-borders-primary dark:border-borders-secondary p-6 transition-colors ${
        isOver ? "border-dotted" : "border-transparent"
      }`}
    >
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      <div className="space-y-3 h-full">
        {todos.length === 0 && (
          <div className="flex justify-center items-center h-full">
            <img src="/images/empty.svg" alt="empty" className="" width={350} />
          </div>
        )}
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onComplete={onComplete} />
        ))}
      </div>
    </div>
  );
}
