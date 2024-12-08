import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AssignedTodoItem, AssignedTodoList } from "../components/employee/todo/assigned-todo";
import { Todo } from "../components/employee/main/to-do";
import { vi } from "vitest";

describe("AssignedTodoList", () => {
  const mockOnComplete = vi.fn()

  const todos: Todo[] = [
    { id: "1", title: "Buy groceries", date: "2024-12-09", completed: false },
    { id: "2", title: "Complete homework", date: "2024-12-09", completed: false },
  ];

  it("should render todos correctly", () => {
    render(<AssignedTodoList todos={todos} onComplete={mockOnComplete} />);
    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
    expect(screen.getByText("Complete homework")).toBeInTheDocument();
  });

  it("should display 'empty' state if no todos are provided", () => {
    render(<AssignedTodoList todos={[]} onComplete={mockOnComplete} />);
    expect(screen.getByAltText("empty")).toBeInTheDocument();
  });

  it("should call onComplete when a todo checkbox is clicked", () => {
    render(<AssignedTodoList todos={todos} onComplete={mockOnComplete} />);
    const checkbox = screen.getByLabelText("Buy groceries");
    fireEvent.click(checkbox);
    expect(mockOnComplete).toHaveBeenCalledWith("1");
  });

  it("should display the 'Due' tag if the todo date is in the past", () => {
    const pastTodo: Todo = { id: "3", title: "Past task", date: "2023-12-09", completed: false };
    render(<AssignedTodoList todos={[pastTodo]} onComplete={mockOnComplete} />);
    expect(screen.getByText("Due")).toBeInTheDocument();
  });

  it("should display tags if available", () => {
    const todoWithTags: Todo = { id: "4", title: "Task with tags", date: "2024-12-09", completed: false, tags: ["important", "urgent"] };
    render(<AssignedTodoList todos={[todoWithTags]} onComplete={mockOnComplete} />);
    expect(screen.getByText("important")).toBeInTheDocument();
    expect(screen.getByText("urgent")).toBeInTheDocument();
  });
});

describe("AssignedTodoItem", () => {
  const mockOnComplete = vi.fn();
  const todo: Todo = { id: "1", title: "Test Todo", date: "2024-12-09", completed: false };

  it("should render todo details correctly", () => {
    render(<AssignedTodoItem todo={todo} onComplete={mockOnComplete} />);
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
    expect(screen.getByText(todo.date)).toBeInTheDocument();
  });

  it("should strike through the todo title if completed", () => {
    const completedTodo = { ...todo, completed: true };
    render(<AssignedTodoItem todo={completedTodo} onComplete={mockOnComplete} />);
    expect(screen.getByText("Test Todo")).toHaveClass("line-through");
  });

  it("should call onComplete when checkbox is clicked", () => {
    render(<AssignedTodoItem todo={todo} onComplete={mockOnComplete} />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockOnComplete).toHaveBeenCalledWith("1");
  });

  it("should render tags if available", () => {
    const todoWithTags: Todo = { id: "2", title: "Task with tags", date: "2024-12-09", completed: false, tags: ["important", "urgent"] };
    render(<AssignedTodoItem todo={todoWithTags} onComplete={mockOnComplete} />);
    expect(screen.getByText("important")).toBeInTheDocument();
    expect(screen.getByText("urgent")).toBeInTheDocument();
  });
});
