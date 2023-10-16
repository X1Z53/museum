import { Card, Flex, Image } from "@chakra-ui/react"

export default function Video() {
  const images = [
    ["/logo.svg", "/logo.svg", "/logo.svg", "/logo.svg", "/logo.svg"],
    ["/logo.svg", "/logo.svg", "/logo.svg", "/logo.svg", "/logo.svg"],
  ]

  return (
    <Flex flexDirection={"column"} gap={10}>
      {images.map((card, index) => (
        <Card
          key={index}
          flexDirection={"column"}
          width={"100%"}
          padding={"1dvw"}
        >
          <Flex justifyContent={"space-between"}>
            {card.map((image, index) => (
              <Image
                width={"10%"}
                alt={String(index)}
                src={image}
                key={index}
              />
            ))}
          </Flex>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          eligendi exercitationem vero iste provident fugit porro maiores
          excepturi sunt, consequuntur rerum adipisci itaque soluta facilis
          corrupti quaerat inventore impedit laboriosam.
        </Card>
      ))}
    </Flex>
  )
}
