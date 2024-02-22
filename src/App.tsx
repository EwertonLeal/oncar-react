import Box from "@mui/material/Box"

import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection/HeroSection"

export const App = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection />
    </Box>
  )
}

