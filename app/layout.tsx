"use client"
import HUD from "@/components/hud/HUD"
import { CacheProvider } from "@chakra-ui/next-js"
import {
  CSSReset,
  ChakraProvider,
  Container,
  extendTheme,
} from "@chakra-ui/react"
import { Global } from "@emotion/react"
import localFont from "next/font/local"
import { ReactNode, createContext, useState } from "react"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

const font = localFont({ src: "../public/KyivType.ttf" })
const KyivType = font.style.fontFamily

const theme = extendTheme({ 
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: KyivType,
    body: KyivType,
  },
})

export const sectionContext = createContext({
  section: 0,
  setSection: (section: number) => {},
})

export default function RootLayout({ children }: { children: ReactNode }) {
  const [section, setSection] = useState(1)

  return (
    <html lang="ru" style={{ scrollBehavior: "smooth" }}>
      <body style={{ backgroundColor: "#E1E1E1" }}>
        <CacheProvider>
          <ChakraProvider {...{ theme }}>
            <sectionContext.Provider
              value={{
                section,
                setSection,
              }}
            >
              <CSSReset />
              <Global
                styles={`
                  @font-face {
                    font-family: 'KyivType';
                    font-style: normal;
                    font-weight: 400;
                    font-display: swap;
                    src: url('../public/KyivType.ttf') format('ttf');
                  }
                `}
              />
              <HUD />
              <Container maxWidth={"60dvw"}>{children}</Container>
            </sectionContext.Provider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
