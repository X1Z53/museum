import { Center, Flex, Heading, IconButton } from "@chakra-ui/react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"

export default function Slider() {
  return (
    <Flex alignItems={"center"}>
      <IconButton
        aria-label="left"
        icon={<FaChevronLeft />}
        variant={"ghost"}
        isRound
      />
      <Center
        width={"70dvw"}
        aspectRatio={16 / 9}
        textAlign={"center"}
        backgroundImage={"/cloud.png"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
      >
        <Heading width={"40dvw"} color={"black"}>
          Добро пожаловать в интерактивный музей киноаппаратуры на базе
          института Кино и Телевидения
        </Heading>
      </Center>
      <IconButton
        aria-label="right"
        icon={<FaChevronRight />}
        variant={"ghost"}
        isRound
      />
    </Flex>
  )
}
