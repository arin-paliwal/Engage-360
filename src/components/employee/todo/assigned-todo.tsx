import { Todo } from "../main/to-do";

interface TodoListProps {
  todos: Todo[];
  onComplete: (id: string) => void;
}
interface TodoItemProps {
  todo: Todo;
  onComplete: (id: string) => void;
}

export function AssignedTodoList({ todos, onComplete }: TodoListProps) {
  return (
    <div
      className={`flex items-center componentScroll overflow-auto rounded-lg borde border-borders-primary dark:border-borders-secondary transition-colors`}
    >
      <div className="h-full flex flex-wrap gap-4 items-center">
        {todos.length === 0 && (
          <div className="flex justify-center items-center h-full">
            <img src="/images/empty.svg" alt="empty" className="" width={350} />
          </div>
        )}
        {todos.map((todo) => (
          <AssignedTodoItem key={todo.id} todo={todo} onComplete={onComplete} />
        ))}
      </div>
    </div>
  );
}

export function AssignedTodoItem({ todo, onComplete }: TodoItemProps) {
  return (
    <div
      className={`group relative rounded-lg border-2 bg-white dark:bg-black border-borders-primary dark:border-borders-secondary p-4 shadow-sm transition-all hover:shadow-md ${
        todo.completed ? "line-through" : ""
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
            {todo.date > new Date().toISOString() && (
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
