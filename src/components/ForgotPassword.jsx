import { Button, FormControl, FormLabel, Input, Box } from "@chakra-ui/react";

const ForgotPassword = () => {
  return (
    <Box>
      <Box ml={5} mb={4}>
        No worries! Enter the email associated with your account. We’ll send you
        a secure link to reset your password.
      </Box>

      <>
        <FormControl mb={6}>
          <FormLabel fontWeight="bold">Email address</FormLabel>
          <Input type="email" placeholder="example@email.com" />
        </FormControl>
      </>

      <>
        <Button
          _hover={{ opacity: "0.8" }}
          w="100%"
          color="#ffffff"
          bg="red.200"
          fontSize="lg"
        >
          Send reset link
        </Button>
      </>
    </Box>
  );
};

export default ForgotPassword;
