'use client';

import React, { useRef } from 'react';
import { formProps } from '@/types';

const Form = ({ children, action, onSubmit }: formProps) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
      onSubmit={onSubmit}
      ref={ref}
    >
      {/* 전달되는 값이 HTML 요소인 경우 children으로 전달 */}
      {children}
    </form>
  );
};

export default Form;
