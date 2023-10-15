import {
  Box,
  Button,
  Center,
  Heading,
  Hide,
  IconButton,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import { AiOutlineInfoCircle, AiOutlineSearch } from "react-icons/ai"

export default function Header() {
  const { toggleColorMode } = useColorMode()

  return (
    <Center width={"100%"} height={"20dvh"}>
      <Center width={"100%"} justifyContent={"space-between"} gap={5}>
        <Center gap={5}>
          <Box height={100} width={100}>
            <Image height={100} alt={"Logo"} src={"/logo.svg"} />
          </Box>
          <Hide below={"md"}>
            <Heading size={"md"}>
              Музей
              <br />
              киноаппаратуры
              <br />
              на базе
              <br />
              СПбГИКиТ
            </Heading>
          </Hide>
        </Center>
        <Center width={"100%"} gap={10}>
          <Box
            width={"100%"}
            height={1.5}
            backgroundColor={"black"}
            borderRadius={10}
          />
          <Button
            pointerEvents={"none"}
            height={5}
            width={20}
            backgroundColor={"black"}
            color={"white"}
          >
            16:9
          </Button>
          <Box width={"200%"} />
        </Center>
        <Center justifyContent={"space-around"} gap={5}>
          <IconButton
            fontSize={"3xl"}
            isRound
            onClick={toggleColorMode}
            aria-label={"Search"}
            variant={"ghost"}
            icon={useColorModeValue(
              <AiOutlineInfoCircle />,
              <AiOutlineSearch />
            )}
          />
          <IconButton
            fontSize={"3xl"}
            isRound
            aria-label={"Search"}
            variant={"ghost"}
            icon={<AiOutlineInfoCircle />}
          />
          <IconButton
            fontSize={"3xl"}
            isRound
            aria-label={"FAQ"}
            variant={"ghost"}
            icon={<AiOutlineSearch />}
          />
          <Button
            backgroundColor={"black"}
            color={"white"}
            height={"4dvh"}
            paddingX={"3dvw"}
          >
            <Heading size={"sm"}>Войти</Heading>
          </Button>
        </Center>
      </Center>
    </Center>
  )
}
