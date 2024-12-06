import { useDrop } from 'react-dnd'
import { Todo } from '../main/to-do'
import { TodoItem } from './to-do-item'

interface TodoListProps {
  title: string
  todos: Todo[]
  onComplete: (id: string) => void
  onDrop?: (todo: Todo) => void
}

export function TodoList({ title, todos, onComplete, onDrop }: TodoListProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TODO',
    drop: (item: Todo) => {
      onDrop?.(item)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }))

  return (
    <div
      ref={drop}
      className={`flex-1 h-[60vh] componentScroll overflow-auto rounded-lg border border-dashed border-zinc-200 p-4 transition-colors ${
        isOver ? 'border-primary bg-primary/5' : 'bg-zinc-50/50'
      }`}
    >
      <h2 className="mb-4 text-lg font-semibold text-zinc-900">{title}</h2>
      <div className="space-y-3">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onComplete={onComplete} />
        ))}
      </div>
    </div>
  )
}

