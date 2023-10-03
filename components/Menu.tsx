"use client"
import {
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  IconButton,
  useDisclosure
} from "@chakra-ui/react"
import { FaBars } from "react-icons/fa6"

export default function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        aria-label="menu"
        fontSize={"2xl"}
        onClick={onOpen}
        icon={<FaBars />}
        isRound
        variant={"ghost"}
      />
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <Center flexDirection={"column"}>
            <DrawerHeader>
              <Center>
                <Heading>Разделы</Heading>
              </Center>
            </DrawerHeader>
            <DrawerBody>
              <Center gap={5} flexDirection={"column"}>
                <Heading size={"sm"}>Главная страница</Heading>
                <Heading size={"sm"}>История</Heading>
              </Center>
            </DrawerBody>
          </Center>
        </DrawerContent>
      </Drawer>
    </>
  )
}
