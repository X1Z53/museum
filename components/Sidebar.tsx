"use client"
import {
  Center,
  Flex,
  Step,
  StepIndicator,
  StepStatus,
  Stepper,
  useSteps,
} from "@chakra-ui/react"
import {
  FaBookOpen,
  FaCamera,
  FaEllipsis,
  FaHouseChimney,
  FaVolumeHigh,
} from "react-icons/fa6"

export default function Sidebar() {
  const steps = [
    { title: "Home", icon: <FaHouseChimney /> },
    { title: "About Us", icon: <FaBookOpen /> },
    { title: "Cameras", icon: <FaCamera /> },
    { title: "Audio", icon: <FaVolumeHigh /> },
    { title: "More", icon: <FaEllipsis /> },
  ]

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  })

  return (
    <Center marginX={10} height={"100%"}>
      <Stepper
        index={activeStep}
        orientation={"vertical"}
        gap={5}
        colorScheme={"teal"}
      >
        {steps.map(({ icon }, index) => (
          <Step key={index}>
            <StepIndicator boxSize={"12"} fontSize={"3xl"} color={"white"}>
              <StepStatus complete={icon} incomplete={icon} active={icon} />
            </StepIndicator>
          </Step>
        ))}
      </Stepper>
    </Center>
  )
}
