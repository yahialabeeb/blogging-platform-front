'use client';

import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import BlogInfo from './blog-info';
import { useRouter } from 'next/navigation';
import BlogMedia from './blog-media';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { blogFormSchema } from '../../../utils/validators/create-blog.schema';
import FormFooter from './form-footer';
import { Container, StyledForm, Section } from './styles';
import { useSession } from 'next-auth/react';

const updateBlog = async (id, data) => {
  console.log(data);
  const res = await fetch(`/api/blog/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(res.statusText);
};
const createBlog = async (data) => {
  const res = await fetch('/api/blog', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(res.statusText);
};
const CreateEditBlog = ({ blog }) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const methods = useForm({
    resolver: zodResolver(blogFormSchema),
  });

  useEffect(() => {
    if (blog) {
      methods.reset({
        ...blog,
      });
    }
  }, [blog]);

  const onSubmit = async (data) => {
    setSubmitting(true);

    try {
      if (blog) {
        await updateBlog(blog.id, { ...data });
        toast.success('Blog updated');
      } else {
        id = await createBlog({ ...data, authorId: session.id });
        toast.success('Blog created');
      }
      router.replace('/blog');
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <Section>
            <BlogInfo />
          </Section>
          <Section>
            <BlogMedia />
          </Section>
        </FormProvider>
        <FormFooter
          isLoading={isSubmitting}
          handleAltBtn={() => router.back()}
          altBtnText='back'
          hideAltBtn
          submitBtnText={blog ? 'Update Blog' : 'Create Blog'}
        />
      </StyledForm>
    </Container>
  );
};

export default CreateEditBlog;
