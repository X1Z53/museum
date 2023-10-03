import { Flex, Image } from "@chakra-ui/react"

export default function Logo() {
  return (
    <Flex height={"10dvh"}>
      <Image filter={"invert(1)"} alt="Logo" src="/logo.svg" />
    </Flex>
  )
}
