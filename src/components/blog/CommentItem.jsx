import React from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1.5rem;
  gap: 0.75rem;
  border-radius: 0.5rem;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const AuthorName = styled.h5`
  font-size: 1rem;
  font-weight: 500;
`;

const CommentDate = styled.h6`
  font-size: 0.875rem; /* text-sm */
  color: #9ca3af; /* neutral-400 */
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #f4f4f5; /* zinc-100 */
`;

const CommentContent = styled.h6`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

const CommentItem = ({ comment }) => {
  return (
    <CommentContainer>
      <AuthorInfo>
        <AuthorName>{comment.author.name}</AuthorName>
        <CommentDate>
          {new Date(comment.createdAt).toLocaleDateString()}
        </CommentDate>
      </AuthorInfo>
      <Divider />
      <CommentContent>{comment.content}</CommentContent>
    </CommentContainer>
  );
};

export default CommentItem;
