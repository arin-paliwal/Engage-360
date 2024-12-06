import { useDrag } from 'react-dnd'
import { CalendarDays, MessageSquare, Paperclip } from 'lucide-react'
import { Todo } from '../main/to-do'

interface TodoItemProps {
  todo: Todo
  onComplete: (id: string) => void
}

export function TodoItem({ todo, onComplete }: TodoItemProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TODO',
    item: todo,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      className={`group relative rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition-all hover:shadow-md ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onComplete(todo.id)}
          className="h-5 w-5 rounded-md border-zinc-300 text-primary"
        />
        <div className="flex-1">
          <h3 className="font-medium text-zinc-900">{todo.title}</h3>
          <div className="mt-1 flex items-center gap-3 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {todo.date}
            </span>
            {todo.comments && (
              <span className="flex items-center gap-1.5">
                <MessageSquare className="h-4 w-4" />
                {todo.comments}
              </span>
            )}
            {todo.attachments && (
              <span className="flex items-center gap-1.5">
                <Paperclip className="h-4 w-4" />
                {todo.attachments}
              </span>
            )}
          </div>
        </div>
      </div>
      {todo.tags && (
        <div className="mt-3 flex flex-wrap gap-2">
          {todo.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

