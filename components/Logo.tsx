import { Center, Flex, Image } from "@chakra-ui/react"

export default function Logo() {
  return (
    <Flex height={"20dvh"}>
      <Image alt="Logo" src="/logo.svg" />
      <Center marginLeft={4} fontSize={"3dvh"}>
        Музей
        <br />
        Отечественной
        <br />
        Кинотехники
      </Center>
    </Flex>
  )
}
