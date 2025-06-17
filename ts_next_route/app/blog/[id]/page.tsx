import React from 'react';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return {
    title: `Blog Post from ${id}`,
    description: `This is the blog post from ${id}`,
  };
};

const Blog = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div>Blog Page ID is {id}</div>;
};

export default Blog;
