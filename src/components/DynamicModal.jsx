import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  useDisclosure,
  Heading,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
} from "@chakra-ui/react";

import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";

const DynamicModal = ({ title, content, setContent }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <Button
        pr={3}
        colorScheme="gray.600"
        fontSize="sm"
        variant="link"
        onClick={handleOpen}
      >
        {title}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader as="h3" size="lg" ml={5} pb={2} mb={4} fontWeight="bold">
          {title}
          <ModalCloseButton />
        </ModalHeader>
        <ModalOverlay />
        <ModalBody>
          <ModalContent p={10}>
            {content === "login" && <Login setContent={setContent} />}
            {content === "signup" && <Signup setContent={setContent} />}
            {content === "forgotPassword" && (
              <ForgotPassword setContent={setContent} />
            )}
          </ModalContent>
        </ModalBody>
      </Modal>
    </>
  );
};

export default DynamicModal;
