import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { IoMdMail } from "react-icons/io";
const SupportCard = ({leftComponent, icon, title, text}) => {
  return (
    <Flex gap={6} flexDirection={{
      base: "column",
      xl: "row"
    }}>
      <Stack maxW="24rem" >
        {<Icon as={icon} boxSize={6} color="purple" />}
        <Text as="h1" fontWeight="medium" textStyle="h1">
          {title}
        </Text>
        <Text textStyle="h6" fontSize="sm" color="black.60">
          {text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full">{leftComponent}</Box>
    </Flex>
  );
};

export default SupportCard;
