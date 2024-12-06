'use client'

import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Plus, SlidersHorizontal } from 'lucide-react'
import { TodoList } from '../todo/to-do-list'
export interface Todo {
  id: string
  title: string
  date: string
  comments?: number
  attachments?: number
  tags?: string[]
  completed: boolean
}


const initialTodos: Todo[] = [
  {
    id: '1',
    title: 'Finish user onboarding',
    date: 'Tomorrow',
    comments: 1,
    completed: false,
  },
  {
    id: '2',
    title: 'Solve the Dabble prioritisation issue',
    date: 'Jan 8, 2022',
    comments: 2,
    attachments: 1,
    tags: ['LaunchPad'],
    completed: false,
  },
  {
    id: '3',
    title: 'Hold to reorder on mobile',
    date: 'Jan 10, 2022',
    tags: ['Dabble'],
    completed: false,
  },
]

export default function TodoComponent() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)

  const incompleteTodos = todos.filter((todo) => !todo.completed)
  const completedTodos = todos.filter((todo) => todo.completed)

  const handleComplete = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleDrop = (droppedTodo: Todo) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === droppedTodo.id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-white p-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-zinc-900">To-Do</h1>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90">
                <Plus className="h-4 w-4" />
                New Task
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <TodoList
              title="Tasks"
              todos={incompleteTodos}
              onComplete={handleComplete}
              onDrop={handleDrop}
            />
            <TodoList
              title="Completed"
              todos={completedTodos}
              onComplete={handleComplete}
              onDrop={handleDrop}
            />
          </div>
        </div>
      </div>
    </DndProvider>
  )
}

