import { Container, Flex } from "@chakra-ui/react"
import Logo from "./Logo"
import Navigation from "./Navigation"

export default function Header() {
  return (
    <Flex backgroundColor={"teal.900"} alignItems={"center"} height={"30dvh"}>
      <Container as={"header"} maxWidth={"container.xl"} paddingX={"6dvw"}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Logo />
          <Navigation />
        </Flex>
      </Container>
    </Flex>
  )
}
