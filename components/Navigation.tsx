import { Box, Button, Center, Flex, Icon, IconButton } from "@chakra-ui/react"
import { FaQuestion, FaSistrix } from "react-icons/fa6"

export default function Navigation() {
  return (
    <Flex flexDirection={"column"}>
      <Flex justifyContent={"space-between"} gap={10}>
        <IconButton
          fontSize={"3xl"}
          isRound
          aria-label={"FAQ"}
          variant={"ghost"}
          icon={<FaQuestion />}
        />
        <IconButton
          fontSize={"3xl"}
          isRound
          aria-label={"Search"}
          variant={"ghost"}
          icon={<FaSistrix />}
        />
        <Button variant={"outline"}>Sign Up</Button>
      </Flex>
      <Box height={20} />
      <Button>Купить билет</Button>
    </Flex>
  )
}
