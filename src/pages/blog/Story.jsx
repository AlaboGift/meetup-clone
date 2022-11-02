import { Box, Container, Flex, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import twentyYears from "../../assets/20yearsbannerblog-1.png";
import { useEffect, useState } from "react";

const Story = () => {
  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    const res = await fetch("http://localhost:5000/posts/9");
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getDetails = async () => {
      const postData = await fetchPost();
      setPost(postData);
    };
    getDetails();
  }, []);

  console.log(post);
  return (
    <Box>
      <Container maxWidth={["100%", "100%", "80%"]} my={10}>
        <Flex justifyContent="space-between" gap={5} mb={10}>
          <Box maxWidth={["100%", "100%", "60%"]}>
            <Image src={post.image} width="100%" />
          </Box>
          <Box maxWidth={["100%", "100%", "40%"]}>
            <Heading size="sm" color="red" mb={2}>
              {post.category}
            </Heading>
            <Heading my={2}>{post.title}</Heading>
            <Box my={2}>{post.content}</Box>
            <Link
              style={{ color: "teal" }}
              fontWeight="bolder"
              to={`/blog/${post.slug}`}
            >
              Read more
              <ArrowForwardIcon />
            </Link>
          </Box>
        </Flex>

        <Flex justifyContent="space-between" border="1px solid #e2e2e2" p={6}>
          <Box maxWidth={["100%", "100%", "50%"]}>
            <Heading my={2} fontWeight="bolder" size="lg">
              Celebrating 20 years of real connections on Meetup
            </Heading>
            <Link color="teal" fontWeight="bolder">
              Join the fun
            </Link>
          </Box>
          <Box maxWidth={["100%", "100%", "30%"]}>
            <Image src={twentyYears} height={120} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Story;
