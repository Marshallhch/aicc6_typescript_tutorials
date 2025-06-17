'use server';

import { prisma } from '@/utils/prisma';
// 참조: https://velog.io/@skawn1228/Next.js-revalidatePath
import { revalidatePath } from 'next/cache'; // 리다이렉트

export async function createTodo(formData: FormData) {
  const input = formData.get('input') as string;

  if (!input.trim()) return;

  await prisma.todo.create({
    data: {
      title: input,
    },
  });

  revalidatePath('/');
}
