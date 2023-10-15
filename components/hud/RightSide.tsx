import { Flex, Image } from "@chakra-ui/react"

export default function RightSide() {
  const contacts = [
    { title: "vk", image: <Image alt="VK" src="/icons/vk.svg" /> },
    { title: "mail", image: <Image alt="Mail" src="/icons/mail.svg" /> },
    {
      title: "telegram",
      image: <Image alt="Telegram" src="/icons/telegram.svg" />,
    },
  ]

  return (
    <Flex flexDirection={"column"} paddingRight={"2.5dvw"} gap={15}>
      {contacts.map(({ title, image }) => (
        <Flex key={title}>{image}</Flex>
      ))}
    </Flex>
  )
}
