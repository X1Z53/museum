import { Footer, Header } from "@/components/hud"
import { Box, Container, Flex, useBreakpointValue } from "@chakra-ui/react"
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

export default function HUD() {
  const belowMd = useBreakpointValue({ base: false, md: true })
  
  return (
    <Flex
      position={"sticky"}
      top={0}
      justifyContent={"center"}
      marginX={"4dvw"}
    >
      <Container
        height={"100dvh"}
        position={"absolute"}
        justifyContent={"space-between"}
        maxWidth={"100%"}
      >
        <Header />
        {belowMd ? (
          <>
            <Flex justifyContent={"space-between"}>
              <LeftSide />
              <RightSide />
            </Flex>
            <Footer />
          </>
        ) : (
          <Box height={"65dvh"} />
        )}
      </Container>
    </Flex>
  )
}
