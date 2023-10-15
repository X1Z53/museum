import { Footer, Header, Sides } from "@/components/hud"
import { Box, Container } from "@chakra-ui/react"

export default function HUD() {
  return (
    <Box position={"sticky"} top={0}>
      <Container
        height={"100dvh"}
        maxWidth={"100dvw"}
        position={"absolute"}
        paddingX={"5dvw"}
      >
        <Header />
        <Sides />
        <Footer />
      </Container>
    </Box>
  )
}
