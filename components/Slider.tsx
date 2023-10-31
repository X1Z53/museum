import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import {
  Card,
  Center,
  Flex,
  Heading,
  IconButton,
  Radio,
  RadioGroup,
  useBreakpointValue,
} from "@chakra-ui/react"
import { useState } from "react"

export default function Slider({ items }: { items: { text: string }[] }) {
  const [itemIndex, setItemIndex] = useState(0)
  const belowMd = useBreakpointValue({ base: false, md: true })

  return (
    <Center flexDirection={"column"} position={"relative"} gap={2}>
      <Flex
        width={{ md: "50vw", sm: "100%" }}
        height={"50vh"}
        zIndex={-1}
        overflow={"hidden"}
      >
        {items.map((item, index) => (
          <Card
            key={index}
            borderRadius={10}
            transform={`translate(${(belowMd ? -50 : -100) * itemIndex}${
              belowMd ? "vw" : "%"
            })`}
            transition={"all .5s"}
            minWidth={"100%"}
            textAlign={"center"}
          >
            <Center height={"100%"}>
              <Heading>{item.text}</Heading>
            </Center>
          </Card>
        ))}
      </Flex>
      <IconButton
        isRound
        position={"absolute"}
        variant={"ghost"}
        left={0}
        aria-label="prev"
        icon={<ChevronLeftIcon />}
        onClick={() =>
          setItemIndex((value) => (value != 0 ? value - 1 : items.length - 1))
        }
      />
      <IconButton
        isRound
        position={"absolute"}
        variant={"ghost"}
        right={0}
        aria-label="next"
        icon={<ChevronRightIcon />}
        onClick={() => setItemIndex((value) => (value + 1) % items.length)}
      />
      <RadioGroup
        bottom={-5}
        position={"absolute"}
        onChange={(value) => setItemIndex(Number(value))}
        value={String(itemIndex)}
        colorScheme="white"
      >
        <Flex gap={1}>
          {items.map((_, index) => (
            <Radio
              size={"md"}
              border={"#"}
              backgroundColor={"gray"}
              value={String(index)}
              key={index}
            />
          ))}
        </Flex>
      </RadioGroup>
    </Center>
  )
}
