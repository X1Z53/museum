import { Button, Heading, useBreakpointValue } from "@chakra-ui/react"

export default function TicketButton() {
  return (
    <Button
      backgroundColor={"black"}
      color={"white"}
      height={"4dvh"}
      paddingX={"3dvw"}
    >
      <Heading size={"sm"}>Купить билет</Heading>
    </Button>
  )
}
