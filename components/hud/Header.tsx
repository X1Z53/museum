import { Link } from "@chakra-ui/next-js"
import {
  Box,
  Button,
  Center,
  Heading,
  IconButton,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react"
import { AiOutlineInfoCircle, AiOutlineSearch } from "react-icons/ai"
import TicketButton from "./TicketButton"

export default function Header() {
  const belowMd = useBreakpointValue({ base: false, md: true })

  return (
    <Center width={"100%"} height={"20dvh"}>
      <Center width={"100%"} justifyContent={"space-between"} gap={5}>
        <Link href="/" width={{ md: "25%", sm: "100%" }}>
          <Image height={{ base: "15vh" }} alt={"Logo"} src={"/logo.png"} />
        </Link>
        {belowMd ? (
          <>
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
          </>
        ) : (
          <TicketButton />
        )}
      </Center>
    </Center>
  )
}
