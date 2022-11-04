import { Link } from "react-router-dom";
import { Flex, Box, Image } from "@chakra-ui/react";
import brandLogo from "../assets/brand-logo.svg";
import DynamicModal from "./DynamicModal";
import { useState } from "react";
import { FaGlobe } from "react-icons/fa";

const Header = () => {
  const [content, setContent] = useState("login");
  const [size, setSize] = useState("md");
  const [language, setLanguage] = useState("English");

  const modalHandler = (content, size) => {
    setContent(content);
    setSize(size);
  };

  return (
    <header>
      <Flex alignItems="center" justifyContent="space-between" mx={6}>
        <Link to="/">
          <Image boxSize="90px" src={brandLogo} alt="brand" />
        </Link>
        <Flex>
          <Flex
            onClick={() => modalHandler("languages", "5xl")}
            gap={2}
            alignItems="center"
          >
            <FaGlobe />
            <DynamicModal
              title={language}
              content={content}
              size={size}
              setLanguage={setLanguage}
            />
          </Flex>
          <Box onClick={() => modalHandler("login", "md")}>
            <DynamicModal
              title="login"
              content={content}
              setContent={setContent}
              size={size}
            />
          </Box>
          <Box onClick={() => modalHandler("signup", "md")}>
            <DynamicModal
              title="Sign up"
              content={content}
              setContent={setContent}
              size={size}
            />
          </Box>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
