import Link from 'next/link';

const BlogList = ({ blogPosts }) => {
  return (
    <ul>
      {blogPosts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>{' '}
          - {post.date}
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
