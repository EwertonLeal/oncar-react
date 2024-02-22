import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { CalendarToday, DoorFront, LocalGasStation, Palette, TimeToLeave } from "@mui/icons-material";

import "./CarDetail.css"

export const CarDetail = () => {
  return (
    <Grid container spacing={6} px={2} alignItems="center">
      <Grid item xs={12} md={6}>
        <img src="/hero-img.png" width="100%" alt="" />
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant="h4" sx={{ fontWeight: 500 }}>
          Nome do carro
        </Typography>

        <Typography variant="body1" pt={1}>
          teste cadastro de veículo pela api da vercel
        </Typography>

        <Typography variant="h4" py={3} sx={{ fontWeight: 600 }}>
          R$ 15.700,00
        </Typography>

        <ul className="lista-caracteristicas" >
          <li className="lista-caracteristicas-item">
            <CalendarToday sx={{ marginBottom: 2 }} />
            2007
          </li>
          
          <li className="lista-caracteristicas-item">
            <LocalGasStation sx={{ marginBottom: 2 }} />
            Gasolina
          </li>

          <li className="lista-caracteristicas-item">
            <Palette sx={{ marginBottom: 2 }} />
            Prata
          </li>

          <li className="lista-caracteristicas-item">
            <TimeToLeave sx={{ marginBottom: 2 }} />
            150000
          </li>

          <li className="lista-caracteristicas-item">
            <DoorFront sx={{ marginBottom: 2 }} />
            4
          </li>
        </ul>

        <Link to="/financiamento">
          <Button
              color="inherit"
              variant="contained"
              sx={{ 
                  width: "100%",
                  marginTop: "40px",
                  backgroundColor: "#C92227",
                  color: "#ffffff",
                  "&:hover": {
                      backgroundColor: "#A31115",
                  }
              }}
            >
              Financie este veículo
            </Button>
        </Link>

      </Grid>
    </Grid>
  );
}
