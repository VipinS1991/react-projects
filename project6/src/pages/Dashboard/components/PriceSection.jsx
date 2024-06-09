import { Stack, HStack, Text, Icon, Button, Flex, Image, Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react"
import { AiFillMinusCircle, AiFillPlusCircle, AiOutlineInfoCircle } from "react-icons/ai"
import {BsArrowUpRight} from "react-icons/bs"
import { CustomCard } from "../../../chakra/CustomCard"

const PriceSection = () => {
const timestamps = ["7.15PM", "7.55PM", "8.55PM", "9.55PM", "10.55PM"]

  return (
    <CustomCard>
         <Flex justify="space-between" align="start">
         <Stack >
         <HStack color="black.80" >
           <Text fontSize="sm"> Wallet Balance </Text>
           <Icon as={AiOutlineInfoCircle}/>
         </HStack>
         <HStack spacing={4} align={{
      base: "flex-start",
      sm: "center"
    }}  flexDir={{
      base: "column",
      xl: "row",
    }}>
         <HStack >
         <Text textStyle="h2" fontWeight="md">22.39401000</Text> {" "}
         <HStack fontWeight="md" color="green.500">
         <Icon as={BsArrowUpRight}/>
         <Text fontSize="sm" fontWeight="md">22%</Text>
          </HStack>{" "}
         </HStack>
         
         </HStack>
        </Stack>
         
        <HStack>
        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle}/>}>Buy</Button>
          <Button leftIcon={<Icon as={AiFillMinusCircle}/>}>Sell</Button>
        </HStack>
        </HStack>
        </Flex>
        <Tabs variant='soft-rounded' colorScheme='green'>
  <Flex justify="end">
  <TabList color="black.5" p="3px">{
    ["1H", "1D", "1W", "1M"].map((tab)=> (
        <Tab _selected={{
            color: "white",
            bg: "blue.500"
        }}
        key={tab} fontSize="sm" p="6px" borderRadius="4">{tab}</Tab>
    ))
    }
  </TabList>
  </Flex>
  <TabPanels>
    <TabPanel>
        <Image w="100%" src="/graph.svg" mt="48px" />
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
        <HStack justify="space-between">
            {timestamps.map((timestamp)=> (
                <Text key={timestamp} fontSize="sm" color="black.80">{timestamp}</Text>
            ))}
        </HStack>
    </CustomCard>
  )
}

export default PriceSection