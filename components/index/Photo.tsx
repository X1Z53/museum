import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  Image,
} from "@chakra-ui/react"

export default function Photo() {
  return (
    <Flex width={"100%"} justifyContent={"space-between"} gap={100}>
      {Array.from(Array(3).keys()).map((value) => (
        <Flex key={value} flexDirection={"column"} gap={5}>
          {value % 2
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos ducimus provident. Cum nulla natus architecto!"
            : ""}
          <Flex>
            <Card zIndex={-1}>
              <CardHeader>
                <Center>
                  <Image width={"25%"} alt={String(value)} src="/logo.svg" />
                </Center>
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                aliquid voluptates suscipit harum nam, accusantium
                exercitationem.
              </CardBody>
            </Card>
          </Flex>
          {!(value % 2)
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos ducimus provident. Cum nulla natus architecto!"
            : ""}
        </Flex>
      ))}
    </Flex>
  )
}
