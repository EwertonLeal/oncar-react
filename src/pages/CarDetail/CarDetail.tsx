import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import Button from "@mui/material/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CalendarToday, DoorFront, LocalGasStation, Palette, TimeToLeave } from "@mui/icons-material";

import "./CarDetail.css"
import { useEffect, useState } from "react";
import { Car } from "../../models/car-model";

export const CarDetail = () => {

  const location = useLocation();
  const [car, setCar] = useState<Car>();

  useEffect(() => {
    setCar(location.state.car);
    console.log(location.state);
    
  }, [car])

  const navigate = useNavigate();

  const handleSubmit = () => {
    const valorVeiculo = car?.price;
    console.log(valorVeiculo);
    
    navigate("/financiamento", { state: { valorVeiculo } });
  };  

  return (
    <Grid container spacing={6} px={2} alignItems="center">
      <Grid item xs={12} md={6}>
        <img src="/hero-img.png" width="100%" alt="" />
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant="h4" sx={{ fontWeight: 500 }}>
          {car?.model}
        </Typography>

        <Typography variant="body1" pt={1}>
        {car?.description}
        </Typography>

        <Typography variant="h4" py={3} sx={{ fontWeight: 600 }}>
          R$ {car?.price}
        </Typography>

        <ul className="lista-caracteristicas" >
          <li className="lista-caracteristicas-item">
            <CalendarToday sx={{ marginBottom: 2 }} />
            <small>{car?.year}</small>
          </li>
          
          <li className="lista-caracteristicas-item">
            <LocalGasStation sx={{ marginBottom: 2 }} />
            <small>{car?.fuel}</small>
          </li>

          <li className="lista-caracteristicas-item">
            <Palette sx={{ marginBottom: 2 }} />
            <small>{car?.color}</small>
          </li>

          <li className="lista-caracteristicas-item">
            <TimeToLeave sx={{ marginBottom: 2 }} />
            <small>{car?.kilometers} km</small>
          </li>

          <li className="lista-caracteristicas-item">
            <DoorFront sx={{ marginBottom: 2 }} />
            <small>{car?.numOfDoors}</small>
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
              onClick={handleSubmit}
            >
              Financie este veículo
            </Button>
        </Link>

      </Grid>
    </Grid>
  );
}
