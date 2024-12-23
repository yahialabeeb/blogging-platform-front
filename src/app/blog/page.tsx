import BlogGrid from '../../components/blog/BlogGrid';
import React from 'react';
const BlogPage = async () => {
  const data = await fetch(`${process.env.BACKEND_URL}/blogs?status=published`);
  const blogs = await data.json();

  return (
    <div>
      <h2>Blogs</h2>
      <BlogGrid blogs={blogs || []} />
    </div>
  );
};

export default BlogPage;
