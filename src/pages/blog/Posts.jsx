import { Grid, Container } from "@chakra-ui/react";
import Post from "./Post";

const Posts = ({ posts, categoryColor }) => {
  return (
    <Container maxWidth={["100%", "100%", "80%"]} my={10}>
      <Grid
        mt={10}
        mb={40}
        templateColumns={{
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(4, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        gap={3}
      >
        {posts.map((post) => (
          <Post key={post.id} post={post} categoryColor={categoryColor} />
        ))}
      </Grid>
    </Container>
  );
};

export default Posts;
