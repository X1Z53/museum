import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react"
import { useState } from "react"

export default function About() {
  const [selected, setSelected] = useState(-1)
  return (
    <Flex gap={5}>
      {Array.from(Array(3).keys()).map((value) => (
        <Card
          zIndex={Number(selected === value)}
          key={value}
          onMouseEnter={() => setSelected(value)}
          onMouseLeave={() => setSelected(-1)}
          transition={"all .5s"}
          filter={
            selected === value || selected === -1 ? "blur(0)" : "blur(5px)"
          }
          _hover={{ transform: "scale(1.2)" }}
        >
          <CardHeader>
            <Flex gap={5}>
              <Heading size={"md"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                quidem voluptas.
              </Heading>
              <Image width={"25%"} alt={String(value)} src="/logo.svg" />
            </Flex>
          </CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aliquid
            voluptates suscipit harum nam, accusantium exercitationem, at
            deleniti earum atque, dicta soluta saepe!
          </CardBody>
        </Card>
      ))}
    </Flex>
  )
}
