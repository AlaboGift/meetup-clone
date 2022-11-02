import { useEffect, useState } from "react";
import Story from "./Story";
import Posts from "./Posts";

const Blog = ({ categoryColor }) => {
  console.log(categoryColor);
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/posts");
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts();
      setPosts(postsFromServer);
    };
    getPosts();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Story />
      <Posts posts={posts} categoryColor={categoryColor} />
    </>
  );
};

export default Blog;
