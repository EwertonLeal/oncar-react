import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import "./HeroSection.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={6} className="headingContent">
        <Typography variant="h2" component="h1" className="oncarHeading">
        SEU CARRO NOVO <br/> ESTA AQUI!
        </Typography>

        <Typography variant="body1">
          Explore nosso showroom e encontre o carro dos seus sonhos. 
          Experimente a emoção de dirigir com segurança e conforto. 
          Seu novo veículo espera por você aqui!
        </Typography>

        <Link to="/catalogo">
          <Button
              color="inherit"
              variant="contained"
              sx={{ 
                  marginTop: "40px",
                  backgroundColor: "#C92227",
                  color: "#ffffff",
                  "&:hover": {
                      backgroundColor: "#A31115",
                  }
              }}
            >
              Veja nosso catalogo
            </Button>
        </Link>

      </Grid>
      <Grid item xs={12} md={6}>
        <img src="/hero-img.png" width="100%" alt="" />
      </Grid>
    </Grid>
  );
}
