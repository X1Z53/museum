"use client"
import { sectionContext } from "@/app/layout"
import { About, Main, Photo, Video } from "@/components/index"
import { Box, Center } from "@chakra-ui/react"
import { ReactElement, useContext } from "react"
import { Waypoint } from "react-waypoint"

export default function Page() {
  const { setSection } = useContext(sectionContext)

  const sections: { [key: string]: ReactElement } = {
    main: <Main />,
    about: <About />,
    photo: <Photo />,
    video: <Video />,
  }

  return (
    <Box>
      <Center flexDirection={"column"}>
        {Object.keys(sections).map((section, index) => (
          <Center key={index} id={section} height={"100dvh"}>
            <Waypoint onEnter={() => setSection(index + 1)} />
            {sections[section]}
          </Center>
        ))}
      </Center>
    </Box>
  )
}
