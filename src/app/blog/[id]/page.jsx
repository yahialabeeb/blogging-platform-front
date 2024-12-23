import BlogDetailsBody from '@/components/blog/BlogDetailsBody';
import BlogDetailsHeader from '@/components/blog/BlogDetailsHeader';
import { notFound } from 'next/navigation';

const BlogDetailsPage = async ({ params }) => {
  const { id } = await params;

  try {
    const res = await fetch(`${process.env.BACKEND_URL}/blogs/${id}`);
    if (!res.ok) return <span>Error</span>;
    const blog = await res.json();
    return (
      <div>
        <BlogDetailsHeader blog={blog} />
        <BlogDetailsBody blog={blog} />
      </div>
    );
  } catch (e) {
    return notFound();
  }
};

export default BlogDetailsPage;
