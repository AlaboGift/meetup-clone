import { Container, Flex, Box, Heading, Image } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import Posts from "./Posts";

const SingleBlog = ({ categoryColor }) => {
  const executedRef = useRef(false);
  let { slug } = useParams();
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);

  const fetchPost = async () => {
    const res = await fetch(`http://localhost:5000/posts?slug=${slug}`);
    const data = await res.json();
    return data[0];
  };

  const fetchAuthor = async (userId) => {
    const res = await fetch(`http://localhost:5000/users/${userId}`);
    const results = await res.json();
    return results;
  };

  const fetchRelatedPosts = async (query) => {
    const res = await fetch(`http://localhost:5000/posts`);
    const posts = await res.json();
    return posts.filter((post) =>
      post.title.toLowerCase().includes(query[0].toLowerCase())
    );
  };

  useEffect(() => {
    if (executedRef.current) {
      return;
    }

    const getDetails = async () => {
      const postData = await fetchPost();
      const authorData = await fetchAuthor(postData.userId);
      const relatedPostsData = await fetchRelatedPosts(
        postData.title.split(" ")
      );
      setPost(postData);
      setAuthor(authorData);
      setRelatedPosts(relatedPostsData);
    };

    getDetails();

    executedRef.current = true;
  }, [post, author, relatedPosts]);

  return (
    <Box>
      <Container maxWidth={["100%", "100%", "70%"]} my={10}>
        <Flex justifyContent="space-between" gap={5} mb={10}>
          <Box width={["100%", "100%", "40%"]}>
            <Heading size="sm" color={categoryColor[post.category]} mb={2}>
              {post.category}
            </Heading>
            <Heading my={2}>{post.title}</Heading>
            <Box my={2}>{post.content}</Box>
          </Box>
          <Box width={["100%", "100%", "60%"]}>
            <Image src={post.image} width="100%" />
          </Box>
        </Flex>

        <Flex alignItems="center" mb={10}>
          <Image src={author?.picture} borderRadius="full" boxSize="70px" />
          <Box color="teal" ml={3}>
            By {author?.name}
          </Box>
        </Flex>

        <Flex justifyContent="space-between">
          <Box alignItems="center" maxWidth={["100%", "100%", "20%"]}>
            <Box mb={4}>Share</Box>
            <Box my={4}>
              <FaFacebookSquare color="#227BEF" fontSize="40px" />
            </Box>
            <Box my={4}>
              <FaTwitterSquare color="#227BEF" fontSize="40px" />
            </Box>
            <Box my={4}>
              <FaLinkedin color="#227BEF" fontSize="40px" />
            </Box>
          </Box>
          <Box maxWidth={["100%", "100%", "80%"]}>{post.fullContent}</Box>
        </Flex>
      </Container>
      <Container maxWidth={["100%", "100%", "70%"]} my={10}>
        <Heading size="lg">Related</Heading>
      </Container>
      <Box px={20}>
        <Posts posts={relatedPosts} categoryColor={categoryColor} />
      </Box>
    </Box>
  );
};

export default SingleBlog;
