import React from 'react';
import Form from '../ui/Form';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { createTodo } from '@/actions';

const AddItems = () => {
  return (
    <div>
      <Form action={createTodo}>
        <div>
          <Input />
          <Button />
        </div>
      </Form>
    </div>
  );
};

export default AddItems;
