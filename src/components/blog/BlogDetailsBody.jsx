'use client';

import BlogDetailsComments from './BlogDetailsComments';
import React, { useMemo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem 0;
`;

const BlogDetailsBody = ({ blog }) => {
  return (
    <Container>
      <div>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        <BlogDetailsComments blog={blog} />
      </div>
    </Container>
  );
};

export default BlogDetailsBody;
