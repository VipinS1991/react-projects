import {Container, Flex, Icon, Heading, MenuButton, MenuItem, MenuList, Menu, Button, HStack, Box} from "@chakra-ui/react";
import {FaBars, FaUserTie} from 'react-icons/fa';

const TopNav = ({title, onOpen}) => {
  return (
    <Box px="4" bg="white">
        <HStack h="16" 
        maxW="70rem" mx="auto"
    justify="space-between">
        <Icon as={FaBars} onClick={onOpen} display={{
          base: "block",
          lg: "none"
        }} />
            <Heading fontWeight="medium" fontSize="28px">{title}</Heading>

            <Menu>
  <MenuButton as={Button}>
    <Icon as={FaUserTie} fontSize="24px"/>
  </MenuButton>
  <MenuList>
    <MenuItem>Logout</MenuItem>
    <MenuItem>Support</MenuItem>
  </MenuList>
</Menu>
        
    </HStack>
    </Box>
  )
}

export default TopNav