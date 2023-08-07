// api.js

// Function to fetch all blog posts
export async function fetchBlogPosts() {
    const response = await fetch('https://api.example.com/posts');
    const data = await response.json();
    return data;
  }
  
  // Function to fetch a specific blog post by ID
  export async function fetchBlogPost(id) {
    const response = await fetch(`https://api.example.com/posts/${id}`);
    const data = await response.json();
    return data;
  }
  
  // Function to create a new blog post
  export async function createBlogPost(newPost) {
    const response = await fetch('https://api.example.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });
    const data = await response.json();
    return data;
  }
  
  // Function to update an existing blog post
  export async function updateBlogPost(id, updatedPost) {
    const response = await fetch(`https://api.example.com/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    });
    const data = await response.json();
    return data;
  }
  