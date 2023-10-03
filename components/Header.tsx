import { Center, Container, Flex } from "@chakra-ui/react"
import Logo from "./Logo"
import Menu from "./Menu"
import Navigation from "./Navigation"

export default function Header() {
  return (
    <Flex backgroundColor={"teal.900"} alignItems={"center"} height={"15dvh"}>
      <Flex position={"absolute"} width={"100%"} justifyContent={"center"}>
        <Logo />
      </Flex>
      <Container as={"header"} maxWidth={"container.xl"} paddingX={"6dvw"}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Menu />
          <Navigation />
        </Flex>
      </Container>
    </Flex>
  )
}
