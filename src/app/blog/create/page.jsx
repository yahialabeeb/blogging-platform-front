import React from 'react';
import CreateEditBlog from '@/components/blog/create-edit/index';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/components/auth/auth-option';

const CreateBlog = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect('/blog');
  return (
    <React.Fragment>
      <CreateEditBlog blog={undefined} />
    </React.Fragment>
  );
};

export default CreateBlog;
