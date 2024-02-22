import Box from "@mui/material/Box"
import { Navbar } from "./components/Navbar"
import { Route, Routes } from "react-router-dom"

import { Home } from "./pages/Home"
import { CarAdmin } from "./pages/CarAdmin/CarAdmin"
import { CarCatalogAdmin } from "./pages/CarCatalogs/CarCatalogAdmin"
import { FinancingPage } from "./pages/FinancingPage/FinancingPage"

export const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<CarAdmin />}></Route>
        <Route path="/catalogo" element={<CarCatalogAdmin />}></Route>
        <Route path="/financiamento" element={<FinancingPage />}></Route>
      </Routes>

    </Box>
  )
}

