"use client"
import { Center, Heading } from "@chakra-ui/react"
import { parse } from "papaparse"
import { useEffect, useState } from "react"

type CSV = { id: string; name: string; description: string }

export default function Exhibit({ params }: { params: { exhibit: string } }) {
  const { exhibit: exhibitId } = params
  const [exhibitData, setExhibitData] = useState({} as CSV)

  useEffect(() => {
    parse("/database.csv", {
      download: true,
      header: true,
      complete: ({ data }: { data: CSV[] }) =>
        setExhibitData(
          data.find((exhibit: CSV) => exhibit.id === exhibitId) || {
            id: "0",
            name: "Not Found",
            description: "Not Found",
          }
        ),
    })
  }, [exhibitId])

  console.log(exhibitData)

  return (
    <Center minHeight={"100vh"} flexDirection={"column"}>

      <Heading>{exhibitData.name}</Heading>
      <Heading size={"sm"}>{exhibitData.description}</Heading>
    </Center>
  )
}
