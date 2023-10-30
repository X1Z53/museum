import {
  Box,
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
    <Flex gap={5} flexDirection={{base: "column", sm: "row"}}>
      {Array.from(Array(3).keys()).map((value) => (
        <Box
          backgroundColor={"white"}
          _hover={{
            zIndex: 1,
          }}
          transition={"all .5s"}
          key={value}
          borderRadius={10}
        >
          <Card
            zIndex={Number(selected === value)}
            onMouseEnter={() => setSelected(value)}
            onMouseLeave={() => setSelected(-1)}
            transition={"all .5s"}
            background={"transparent"}
            boxShadow={0}
            borderRadius={10}
            filter={
              selected === value || selected === -1 ? "blur(0)" : "blur(5px)"
            }
            _hover={{
              transform: "scale(1.2)",
              backgroundColor: "white",
              boxShadow: "base",
            }}
          >
            <CardHeader>
              <Flex gap={5}>
                <Heading size={"md"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet quidem voluptas.
                </Heading>
                <Image width={"25%"} alt={String(value)} src="/logo.svg" />
              </Flex>
            </CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              aliquid voluptates suscipit harum nam, accusantium exercitationem,
              at deleniti earum atque, dicta soluta saepe!
            </CardBody>
          </Card>
        </Box>
      ))}
    </Flex>
  )
}
