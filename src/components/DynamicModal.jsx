import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  useDisclosure,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import Languages from "./Languages";
import EmailSignup from "./EmailSignup";

const DynamicModal = ({ title, content, setContent, size, setLanguage }) => {
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

      <Modal isOpen={isOpen} onClose={onClose} size={size}>
        <ModalOverlay />
        <ModalContent p={10}>
          <ModalCloseButton />
          <ModalBody>
            {content === "login" && <Login setContent={setContent} />}
            {content === "signup" && <Signup setContent={setContent} />}
            {content === "forgotPassword" && (
              <ForgotPassword setContent={setContent} />
            )}
            {content === "languages" && (
              <Languages
                onClose={onClose}
                setLanguage={setLanguage}
                defaultLanguage={title}
              />
            )}
            {content === "emailsignup" && (
              <EmailSignup setContent={setContent} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DynamicModal;
