import {
  Box,
  FormControl,
  Heading,
  Grid,
  Radio,
  RadioGroup,
  Flex,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const Languages = ({ onClose, setLanguage, defaultLanguage }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const languages = [
    "English",
    "English (Australia)",
    "DeutschEspañolEspañol (España)",
    "Français",
    "Italiano",
    "Nederlands",
    "Polski",
    "Português",
    "Türkçe",
    "ไทย",
    "日本語",
    "한국어",
    "Русский",
  ];

  const languageHandler = () => {
    setLanguage(selectedLanguage);
    onClose();
  };

  return (
    <Box p={10}>
      <Heading align="center" mb={20}>
        Change your language
      </Heading>

      <FormControl as="fieldset">
        <RadioGroup
          defaultValue={defaultLanguage}
          display="flex"
          justifyContent="center"
        >
          <Grid templateColumns="repeat(3, 1fr)" gap={3}>
            {languages.map((langauage) => (
              <Radio
                name="language"
                value={langauage}
                onClick={() => setSelectedLanguage(langauage)}
              >
                {langauage}
              </Radio>
            ))}
          </Grid>
        </RadioGroup>
      </FormControl>
      <Flex justifyContent="center" mt={10}>
        <Stack spacing={4} direction="row" align="center">
          <Button colorScheme="red" size="lg" onClick={languageHandler}>
            Save
          </Button>
          <Button
            colorScheme="gray"
            size="lg"
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Languages;
