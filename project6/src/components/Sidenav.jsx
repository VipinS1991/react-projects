import {Box, HStack, Heading, Icon, Stack, Text} from "@chakra-ui/react"
import { RxDashboard } from "react-icons/rx";
import { LuArrowDownUp } from "react-icons/lu";
import {BiSupport} from "react-icons/bi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidenav = () => {
    const location = useLocation();

    const isActiveLink = (link) => {
      return location.pathname === link;
    }
const navLinks = [
    {
        icon: RxDashboard,
        text: "Dashboard",
        link: "/"
    },
    {
        icon: LuArrowDownUp,
        text: "Transaction",
        link: "/transaction"
    }
]

  return (
    <Stack justify="space-between" boxShadow={{
        base: "none",
        lg: "lg"
    }} W={{
        base: "full",
        lg:"16rem"
    }} 
    h="100vh" bg="white" >
        <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="56px">
            @VIPINJDPS</Heading>
        <Box mt="6" mx="3">
        {
            navLinks.map((nav)=> ( 
                <Link to = {nav.link} key={nav.text}>
                <HStack  bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
                borderRadius="10px"
                py="3" px="4" _hover={{
                    color:"#171717",
                    bg: "#F3F3F7"
                }}>
                    <Icon as={nav.icon} />
                    <Text fontSize="14px" fontWeight="medium"
                    color="#797E82"
                    >{nav.text}</Text>
                </HStack>
                </Link>
            ))
        }
        </Box>
        </Box>
        <Box mt="6" mx="3" mb="6">
        <Link to="/support">
        <HStack
                borderRadius="10px"
                bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
                color={isActiveLink("/support") ? "#171717" : "#797E82"}
                py="3" px="4" _hover={{
                    color:"#171717",
                    bg: "#F3F3F7"
                }}>
                    <Icon as={BiSupport} />
                    <Text fontSize="14px" fontWeight="medium"
                    color="#797E82"
                    >Support</Text>
                </HStack>
        </Link>
                </Box>
        </Stack>
  )
}

export default Sidenav