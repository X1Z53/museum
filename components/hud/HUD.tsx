import { Footer, Header } from "@/components/hud"
import { Container, Flex } from "@chakra-ui/react"
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

export default function HUD() {
  return (
    <Flex
      position={"sticky"}
      top={0}
      justifyContent={"center"}
      marginX={"4dvw"}
    >
      <Container height={"100dvh"} position={"absolute"} maxWidth={"100%"}>
        <Header />
        <Flex justifyContent={"space-between"}>
          <LeftSide />
          <RightSide />
        </Flex>
        <Footer />
      </Container>
    </Flex>
  )
}
