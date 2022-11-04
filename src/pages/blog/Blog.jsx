import { useEffect, useState, useRef } from "react";
import Story from "./Story";
import Posts from "./Posts";

const Blog = ({ categoryColor }) => {
  const executedRef = useRef(false);
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/posts");
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    if (executedRef.current) {
      return;
    }

    const getPosts = async () => {
      const postsFromServer = await fetchPosts();
      setPosts(postsFromServer);
    };

    getPosts();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    executedRef.current = true;
  }, [posts]);

  return (
    <>
      <Story />
      <Posts posts={posts} categoryColor={categoryColor} />
    </>
  );
};

export default Blog;
