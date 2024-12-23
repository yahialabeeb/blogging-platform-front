'use client';

import TextArea from '@/components/ui/text-area';
import React, { useState } from 'react';
import CommentItem from './CommentItem';
import { z } from 'zod';
import { Controller } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import AddCommentForm from './AddCommentForm';
import {
  ArrowIcon,
  LoginWrapper,
  CommentsWrapper,
  NoCommentsMessage,
} from './styles';

const BlogDetailsComments = ({ blog }) => {
  const { data: session, status } = useSession();
  const isGuest = status === 'unauthenticated';
  const [comments, setComments] = useState(blog.comments || []);

  const onAddNewComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <CommentsWrapper>
      <h5>Comments</h5>
      {comments.length > 0 ? (
        <div>
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
            />
          ))}
        </div>
      ) : (
        <NoCommentsMessage>No Comments</NoCommentsMessage>
      )}
      {isGuest ? (
        <LoginWrapper>
          <p>Login to Comment</p>
          <Link href='/'>
            <ArrowIcon />
          </Link>
        </LoginWrapper>
      ) : (
        <AddCommentForm
          blogId={blog.id}
          onAddComment={onAddNewComment}
        />
      )}
    </CommentsWrapper>
  );
};

export default BlogDetailsComments;
