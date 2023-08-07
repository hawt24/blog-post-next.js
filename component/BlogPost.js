const BlogPost = ({ post }) => {
  return (
    <div>
      <p>{post.content}</p>
      <p>Published on: {post.date}</p>
    </div>
  );
};

export default BlogPost;
