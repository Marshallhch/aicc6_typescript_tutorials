import React from 'react';
import Form from '../ui/Form';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { createTodo } from '@/actions';

const AddItems = () => {
  return (
    <div className="w-10/12 mx-auth flex items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl align-middle">
      <Form action={createTodo}>
        <div className="flex gap-2 items-center justify-between">
          <Input
            name="input"
            type="text"
            placeholder="할 일을 입력해 주세요."
          />
          <Button type="submit" text="Add" bgColor="bg-blue-600" />
        </div>
      </Form>
    </div>
  );
};

export default AddItems;
