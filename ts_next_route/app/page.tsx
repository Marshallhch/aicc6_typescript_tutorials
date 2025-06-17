import Link from 'next/link';

type Repository = {
  id: number;
  name: string;
  full_name: string;
};

export default async function Home() {
  const response = await fetch('https://api.github.com/repos/vercel/next.js', {
    cache: 'no-store', // 데이터 변경 시 저장된 캐시를 사용하지 않고, 새로 받은 데이터를 불러온다.
    // force-cache: 데이터 변경 시 저장된 캐시를 사용한다.
  });
  const data: Repository = await response.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hello World</h1>
      <Link href="/about">About</Link>
      <Link href="/blog/marshall">Blog</Link>
      <div>
        <h2>{data.id}</h2>
        <h2>{data.name}</h2>
        <h2>{data.full_name}</h2>
      </div>
    </div>
  );
}
