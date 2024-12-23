'use client';
import React from 'react';
import styled from 'styled-components';
import BlogItem from './BlogItem';
import Link from 'next/link';

const BlogGridWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 75%;
`;

const BlogGridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding-top: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const NoBlogsMessage = styled.div`
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin-top: 1rem;
`;

const BlogGrid = ({ blogs }) => {
  return (
    <BlogGridWrapper>
      <BlogList>
        <BlogGridLayout>
          {blogs?.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.id}`}
            >
              <BlogItem
                key={blog.id}
                blog={blog}
              />
            </Link>
          ))}
        </BlogGridLayout>
        {blogs.length === 0 && <NoBlogsMessage>No Blogs</NoBlogsMessage>}
      </BlogList>
    </BlogGridWrapper>
  );
};

export default BlogGrid;
