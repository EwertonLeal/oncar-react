import Box from "@mui/material/Box"

import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection/HeroSection"
import { CarCatalog } from "./components/CarCatalog/CarCatalog"

export const App = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <CarCatalog />
    </Box>
  )
}

