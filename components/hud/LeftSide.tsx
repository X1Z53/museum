import { sectionContext } from "@/app/layout"
import { Box, Flex, IconButton, Image, Link } from "@chakra-ui/react"
import { useContext } from "react"

export default function LeftSide() {
  const { section } = useContext(sectionContext)

  const sections = [
    { title: "main", image: <Image alt="Main" src="/icons/home.svg" /> },
    { title: "about", image: <Image alt="About" src="/icons/book.svg" /> },
    { title: "photo", image: <Image alt="Photo" src="/icons/photo.svg" /> },
    { title: "video", image: <Image alt="Video" src="/icons/video.svg" /> },
  ]
  return (
    <Flex
      height={"65dvh"}
      width={"7.5dvw"}
      alignItems={"center"}
      gap={16}
      flexDirection={"column"}
    >
      <Box
        height={"25%"}
        width={1.5}
        backgroundColor={"black"}
        borderRadius={10}
      />
      <Flex flexDirection={"column"} gap={10}>
        {sections.map(({ title, image }, index) => (
          <Link href={"#" + title} key={index}>
            <IconButton
              background={""}
              isRound
              opacity={section === index + 1 ? 1 : 0.5}
              padding={"1dvw"}
              aria-label={title}
              icon={image}
            />
          </Link>
        ))}
      </Flex>
    </Flex>
  )
}
