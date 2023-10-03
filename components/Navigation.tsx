import { Box, IconButton } from "@chakra-ui/react"
import { FaQuestion, FaSistrix } from "react-icons/fa6"

export default function Navigation() {
  return (
    <Box justifyContent={"space-around"}>
      <IconButton
        fontSize={"2xl"}
        isRound
        aria-label={"Search"}
        variant={"ghost"}
        icon={<FaSistrix />}
      />
      <IconButton
        fontSize={"2xl"}
        isRound
        aria-label={"FAQ"}
        variant={"ghost"}
        icon={<FaQuestion />}
      />
    </Box>
  )
}
