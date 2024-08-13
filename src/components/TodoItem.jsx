import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm">
      <div className="flex items-center space-x-2">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          id={`todo-${todo.id}`}
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={`text-sm ${todo.completed ? 'line-through text-gray-500' : ''}`}
        >
          {todo.text}
        </label>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </li>
  );
};

export default TodoItem;