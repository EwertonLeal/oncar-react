import Box from "@mui/material/Box"
import { Navbar } from "./components/Navbar"
import { Route, Routes } from "react-router-dom"

import { Home } from "./pages/Home"
import { CarAdmin } from "./pages/CarAdmin/CarAdmin"

export const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<CarAdmin />}></Route>
      </Routes>

    </Box>
  )
}

