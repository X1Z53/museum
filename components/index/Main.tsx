import Slider from "../Slider"

export default function Main() {
  const cards = [
    { text: "Добро пожаловать" },
    { text: "2" },
    { text: "3" },
    { text: "4" },
  ]

  return <Slider items={cards} />
}
