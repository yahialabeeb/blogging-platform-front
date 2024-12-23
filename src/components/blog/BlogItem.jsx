import React from 'react';
import styled from 'styled-components';
import EditIcon from '@/components/ui/EditIcon';
import { useSession } from 'next-auth/react';
import re from 'next/router';
import { redirect } from 'next/navigation';

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: thin solid gray;
  border-radius: 15px;
  min-height: 15rem;
`;

const ThumbnailWrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
`;

const BlogImage = styled.img`
  transition: transform 0.3s ease;
  width: 400px;
  height: 400px;
  @media (min-width: 640px) {
    height: 18rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const BlogEdit = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #3b82f6;
  padding: 5px;
`;

const BlogTitle = styled.h3`
  color: #2d2d2d;
  font-weight: bold;
  font-size: 24px;
  margin: 1rem;
  flex: 1;
`;

export default function BlogCard({ blog }) {
  const { data: session } = useSession();

  return (
    <BlogContainer>
      <ThumbnailWrapper>
        <BlogImage
          src={blog.thumbnail}
          alt={blog.title}
        />
        {session.id === blog.authorId && (
          <BlogEdit
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              redirect(`/blog/${blog.id}/edit`);
            }}
          >
            <EditIcon />
          </BlogEdit>
        )}
      </ThumbnailWrapper>
      <BlogTitle>{blog.title}</BlogTitle>
    </BlogContainer>
  );
}
