'use client';
import styled from 'styled-components';
import React from 'react';

const BlogHeaderContainer = styled.div`
  width: 100%;
`;

const BlogTitle = styled.h2`
  padding: 1.5rem 0;
`;

const BlogWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 1.5rem;
`;

const BlogThumbnail = styled.img`
  position: absolute;
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  z-index: 10;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 20;
  background-color: rgba(12, 74, 110, 0.8); /* sky-950 with opacity */
  border-radius: 1rem;
  height: 100%;
  width: 100%;
`;

const BlogContent = styled.div`
  position: relative;
  padding: 2rem 3.5rem;
  z-index: 30;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

const CategoryBadge = styled.div`
  padding: 0.75rem 2.5rem;
  background-color: #0d9488; /* teal-600 */
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryText = styled.span`
  color: #fff;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  line-height: 1.25rem; /* leading-tight */
`;

const BlogTitleText = styled.h4`
  color: #fff;
  font-weight: 800; /* font-extrabold */
  letter-spacing: 0.1em; /* tracking-widest */
`;

const BlogBrief = styled.p`
  color: #fff;
  opacity: 0.75;
  font-size: 1rem; /* text-base */
  font-weight: 400; /* font-normal */
  line-height: 1.75rem; /* leading-loose */
`;

const BlogDetailsHeader = ({ blog }) => {
  return (
    <BlogHeaderContainer>
      <BlogTitle>Blogs</BlogTitle>
      <BlogWrapper>
        <BlogThumbnail
          src={blog.thumbnail}
          alt='Blog Thumbnail'
        />
        <Overlay />
        <BlogContent>
          <BlogTitleText>{blog.title}</BlogTitleText>
          <BlogBrief>{blog.brief}</BlogBrief>
        </BlogContent>
      </BlogWrapper>
    </BlogHeaderContainer>
  );
};

export default BlogDetailsHeader;
