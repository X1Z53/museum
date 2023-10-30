import { Box, Button, Center, Heading } from "@chakra-ui/react"
import TicketButton from "./TicketButton"

export default function Footer() {
  return (
    <Center
      height={"15dvh"}
      justifyContent={"space-between"}
      position={"relative"}
    >
      <TicketButton />
      <Box
        position={"absolute"}
        height={"35dvh"}
        backgroundColor={"black"}
        width={1.5}
        right={"3dvw"}
        bottom={"5dvh"}
        borderRadius={10}
      />
      <Heading
        position={"absolute"}
        size={"md"}
        right={"5dvw"}
        bottom={"7.5dvh"}
      >
        ISO 100
      </Heading>
      <Box
        right={"3dvw"}
        bottom={"5dvh"}
        position={"absolute"}
        width={"20dvw"}
        height={1.5}
        backgroundColor={"black"}
        borderRadius={10}
      />
    </Center>
  )
}
