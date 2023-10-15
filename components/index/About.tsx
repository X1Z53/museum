import { Card, CardBody, CardHeader } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function About() {
  const [selected, setSelected] = useState(Number)
  return Array.from(Array(3).keys()).map((value) => (
    <motion.div key={value} whileHover={{ scale: 2 }}>
      <Card>
        <CardHeader>{value}</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aliquid
          voluptates suscipit harum nam, accusantium exercitationem, at deleniti
          earum atque, dicta soluta saepe! Fuga iure repudiandae laudantium a.
          Odit, quibusdam.
        </CardBody>
      </Card>
    </motion.div>
  ))
}
