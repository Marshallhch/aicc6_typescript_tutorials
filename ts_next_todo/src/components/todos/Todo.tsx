import { todoProps } from '@/types';
import React from 'react';

const Todo = ({ todo }: { todo: todoProps }) => {
  return (
    <div
      className="mx-auto flex items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl text-white"
      style={{
        textDecoration: todo.isCompleted === true ? 'line-through' : 'none',
        opacity: todo.isCompleted === true ? 0.5 : 1,
      }}
    >
      {todo.title}
    </div>
  );
};

export default Todo;
