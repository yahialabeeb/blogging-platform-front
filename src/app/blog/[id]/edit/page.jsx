import React from 'react';
import CreateEditBlog from '@/components/blog/create-edit';
import { notFound, redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/components/auth/auth-option';

const EditBlog = async ({ params }) => {
  const { id } = params;
  const session = await getServerSession(authOptions);
  if (!session) redirect('/blog/' + id);
  const res = await fetch(`${process.env.BACKEND_URL}/blogs/${id}`, {});

  if (!res.ok) return notFound();
  const blog = await res.json();
  return <CreateEditBlog blog={blog} />;
};

export default EditBlog;
