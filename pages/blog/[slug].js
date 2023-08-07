import React from 'react';
import { useRouter } from 'next/router';
import BlogPost from '../../component/BlogPost';
import styles from '../../styles/Page.module.css';

const IndividualBlogPage = ({ blogPost }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.continer}> 
      <h1 className={styles.title}>{blogPost.title}</h1>
      <BlogPost post={blogPost} />
    </div>
  );
};



export async function getStaticPaths() {

  const paths = [
    { params: { slug: 'first-post' } },
    { params: { slug: 'second-post' } },
  ];

  return {
    paths,
    fallback:true,

  };
}

export async function getStaticProps({ params }) {

  const blogPost = {
    slug: params.slug, 
    title: 'Hey guys this is the first post',
    content: 'I am Knonjoyeww',
    date: '2023-08-07',
  };

  return {
    props: { blogPost },
  };
}


export default IndividualBlogPage;
