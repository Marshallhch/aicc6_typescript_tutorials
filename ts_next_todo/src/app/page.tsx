import AddItems from '@/components/todos/AddItems';
import Todo from '@/components/todos/Todo';
import { prisma } from '@/utils/prisma';

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return data;
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-4xl font-extrabold uppercase">Todo App</span>
      <div className="add-items flex justify-center flex-col items-center w-1/2">
        <AddItems />
        <div className="flex flex-col gap-5 items-center justify-center mt-10">
          {data.map((todo, idx) => (
            <div key={idx} className="w-full">
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
