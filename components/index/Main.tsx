"use client"
import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  IconButton,
} from "@chakra-ui/react"
import { useRef } from "react"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import Slider from "react-slick"

export default function Main() {
  const ref = useRef(null)
  const settings = {
    ref,
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  }

  return (
    <Center position={"relative"}>
      <Box width={"55dvw"} borderRadius={10}>
        <Slider {...settings}>
          <Card
            backgroundColor={"blackAlpha.500"}
            textAlign={"center"}
            height={"50dvh"}
          >
            <CardBody height={"100%"}>
              <Heading
                top={"50%"}
                transform={"translate(0, -50%)"}
                position={"absolute"}
              >
                Добро пожаловать в музей киноаппаратуры на базе СПбГИКиТ
              </Heading>
            </CardBody>
          </Card>
          <Card
            backgroundColor={"blackAlpha.500"}
            textAlign={"center"}
            height={"50dvh"}
          >
            <CardBody height={"100%"}>
              <Heading
                top={"50%"}
                transform={"translate(0, -50%)"}
                position={"absolute"}
              >
                Добро пожаловать в музей киноаппаратуры на базе СПбГИКиТ
              </Heading>
            </CardBody>
          </Card>
          <Card
            backgroundColor={"blackAlpha.500"}
            textAlign={"center"}
            height={"50dvh"}
          >
            <CardBody height={"100%"}>
              <Heading
                top={"50%"}
                transform={"translate(0, -50%)"}
                position={"absolute"}
              >
                Добро пожаловать в музей киноаппаратуры на базе СПбГИКиТ
              </Heading>
            </CardBody>
          </Card>
        </Slider>
      </Box>

      <IconButton
        position={"absolute"}
        aria-label={"Left"}
        onClick={() => ref?.current?.slickPrev()}
        isRound
        left={0}
        colorScheme="blackAlpha"
        variant={"ghost"}
        icon={<BsChevronLeft />}
      />
      <IconButton
        position={"absolute"}
        aria-label={"Right"}
        onClick={() => ref?.current?.slickNext()}
        isRound
        right={0}
        colorScheme="blackAlpha"
        variant={"ghost"}
        icon={<BsChevronRight />}
      />
    </Center>
  )
}
