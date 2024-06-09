import { Tag, Text } from '@chakra-ui/react'
import { CustomCard } from '../chakra/CustomCard'

const InfoCard = ({imgUrl, text, tagText, inverted}) => {
  return (
    <CustomCard
    bgImage={imgUrl} bgSize="cover" bgColor={inverted ? "white" : "p.purple"} bgRepeat="no-repeat"
    >
        <Tag color={
          inverted ? "white" : "p.purple"
        } bg={inverted ? "p.purple" : "white"} borderRadius="full">{tagText}</Tag>
        <Text textStyle="h5" mt="4" fontWeight="md" color={inverted ? "p.purple" : "white"}>
           {text}
        </Text>
    </CustomCard>
  )
}

export default InfoCard