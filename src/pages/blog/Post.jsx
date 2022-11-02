import { Box, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Post = ({ post, categoryColor }) => {
  return (
    <Box width="100%" align="left">
      <Link _hover={{ textDecoration: "none" }} to={`/blog/${post.slug}`}>
        <Image position="relative" src={post.image} alt="story one" />
        <Box d="flex" flexDirection="column">
          <Heading size="sm" my={2} color={categoryColor[post.category]}>
            {post.category}
          </Heading>
          <Heading
            alignItems="center"
            as="h6"
            fontweights="black"
            size="md"
            my={2}
          >
            {post.title}
          </Heading>
        </Box>
      </Link>
      <Box>{post.content}</Box>
    </Box>
  );
};

export default Post;
