import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import {
  Card,
  Center,
  Flex,
  Heading,
  IconButton,
  Radio,
  RadioGroup,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"

export default function Main() {
  const cards = [
    { text: "Добро пожаловать" },
    { text: "2" },
    { text: "3" },
    { text: "4" },
  ]

  const [cardIndex, setCardIndex] = useState(0)

  useEffect(() => console.log(cardIndex), [cardIndex])

  return (
    <Center flexDirection={"column"} position={"relative"} gap={2}>
      <Flex width={"50dvw"} height={"50dvh"} zIndex={-1} overflow={"hidden"}>
        {cards.map((card, index) => (
          <Card
            key={index}
            borderRadius={10}
            transform={`translate(${-50 * cardIndex}dvw)`}
            transition={"all 0.5s"}
            minWidth={"100%"}
          >
            <Center height={"100%"}>
              <Heading>{card.text}</Heading>
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
          setCardIndex((value) => (value != 0 ? value - 1 : cards.length - 1))
        }
      />
      <IconButton
        isRound
        position={"absolute"}
        variant={"ghost"}
        right={0}
        aria-label="next"
        icon={<ChevronRightIcon />}
        onClick={() => setCardIndex((value) => (value + 1) % cards.length)}
      />
      <RadioGroup
        bottom={-5}
        position={"absolute"}
        onChange={(value) => setCardIndex(Number(value))}
        value={String(cardIndex)}
        colorScheme="white"
      >
        <Flex gap={1}>
          {cards.map((_, index) => (
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
