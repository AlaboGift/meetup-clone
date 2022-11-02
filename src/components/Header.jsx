import { Link } from "react-router-dom";
import { Flex, Box, Image } from "@chakra-ui/react";
import brandLogo from "../assets/brand-logo.svg";
import DynamicModal from "./DynamicModal";
import { useState } from "react";

const Header = () => {
  const [content, setContent] = useState("login");

  return (
    <header>
      <Flex alignItems="center" justifyContent="space-between" mx={6}>
        <Link to="/">
          <Image boxSize="90px" src={brandLogo} alt="brand" />
        </Link>
        <Flex>
          <Box onClick={() => setContent("login")}>
            <DynamicModal
              title="login"
              content={content}
              setContent={setContent}
            />
          </Box>
          <Box onClick={() => setContent("signup")}>
            <DynamicModal
              title="Sign up"
              content={content}
              setContent={setContent}
            />
          </Box>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
