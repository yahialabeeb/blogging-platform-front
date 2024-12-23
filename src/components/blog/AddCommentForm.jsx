'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import TextArea from '@/components/ui/text-area';
import { AddCommentButton } from './styles';

const addBlogCommentSchema = z.object({
  content: z.string().min(5, 'Comment must be at least 5 characters long'),
});

const AddCommentForm = ({ onAddComment, blogId }) => {
  const [submitting, setSubmitting] = useState(false);
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(addBlogCommentSchema),
    defaultValues: { content: '' },
  });

  const submit = async (data) => {
    if (submitting) return;
    setSubmitting(true);
    const comment = data.content;
    reset();
    onAddComment(comment);
    setSubmitting(false);
  };

  return (
    <form>
      <Controller
        name='content'
        control={control}
        render={({ field: { value, onChange } }) => (
          <TextArea
            value={value}
            onChange={onChange}
            placeholder='Add Your Comment'
            autoFocus
          />
        )}
      />
      <p className='text-red-500'>{errors.content?.message}</p>
      <AddCommentButton
        onClick={handleSubmit(submit)}
        disabled={submitting}
      >
        {submitting ? 'Loading...' : 'Add Your Comment'}
      </AddCommentButton>
    </form>
  );
};

export default AddCommentForm;
