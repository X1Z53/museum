import Sidebar from "@/components/Sidebar"
import { Box, Flex, Heading } from "@chakra-ui/react"

export default function Page() {
  return (
    <Flex width={"100%"} height={"100%"}>
      <Box height={"100%"}>
        <Sidebar />
      </Box>
      <Box width={"100%"}>
        <Heading textAlign="center" fontSize={"6dvh"}>
          Добро пожаловать...
        </Heading>
      </Box>
    </Flex>
  )
}
