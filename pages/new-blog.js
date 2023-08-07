import React, { useState } from 'react';
import { useRouter } from 'next/router';

const NewBlogPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlogPost = {
      slug: title.toLowerCase().replace(/\s+/g, '-'),
      title,
      content,
      date: new Date().toISOString().substring(0, 10), // Get current date in YYYY-MM-DD format
    };

    router.push(`/blog/${newBlogPost.slug}`);
  };

  return (
    <div>
      <h1>Create New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <button type="submit">Save Blog Post</button>
      </form>
    </div>
  );
};

export default NewBlogPage;
