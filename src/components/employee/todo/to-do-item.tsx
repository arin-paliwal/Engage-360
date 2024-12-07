import { useDrag } from "react-dnd";
import { Todo } from "../main/to-do";

interface TodoItemProps {
  todo: Todo;
  onComplete: (id: string) => void;
}

export function TodoItem({ todo, onComplete }: TodoItemProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TODO",
    item: todo,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`group relative rounded-lg border-2 bg-white dark:bg-black border-borders-primary dark:border-borders-secondary p-4 shadow-sm transition-all hover:shadow-md ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onComplete(todo.id)}
            className="h-5 w-5 rounded-md border-2 border-borders-primary dark:border-borders-secondary"
          />
        </div>
        <div className="flex items-center gap-3 justify-between w-full">
          <div className="flex">
            <h3 className="font-medium">{todo.title}</h3>
          </div>
          <div className="flex items-center gap-2">
            {todo.date <= new Date().toISOString() && (
              <span className="bg-lightMode-accentBlue px-2 py-1 text-white rounded-md text-xs">
                Due
              </span>
            )}
            <span className="flex justify-end w-[6rem]">{todo.date}</span>
          </div>
        </div>
      </div>
      {todo.tags && (
        <div className="mt-3 flex flex-wrap gap-2">
          {todo.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border-2 border-borders-primary dark:border-borders-secondary text-lightMode-secondaryText dark:text-darkMode-secondaryText px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
