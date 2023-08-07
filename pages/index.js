import BlogList from '../component/BlogList';
import styles from '../styles/Home.module.css'

const HomePage = ({ blogPosts }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>I am Knonjoyeww </h1>
      <p className={styles.description}>welcome to my bloggy</p>
      <BlogList blogPosts={blogPosts} />
    </div>
  );
};

export async function getStaticProps() {
  const blogPosts = [
    { slug: 'my-first-post', title: 'My First Post', date: '8/7/2023' },
    { slug: 'second-post', title: 'Second Post', date: '8/8/2023' },
  ];

  return {
    props: { blogPosts },
  };
}

export default HomePage;
