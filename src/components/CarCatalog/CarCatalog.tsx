import Autocomplete from "@mui/material/Autocomplete"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Car } from "../../models/car-model"

export const CarCatalog = () => {

  const [vehicleList, setVehicleList] = useState<Car[] | null>(null);
  const [filters, setFilters] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {

        let url = 'https://oncar-backend.vercel.app/car/home';

        if (filters) {
          const params = new URLSearchParams(filters);
          url += `?${params.toString()}`;
        }

        const response = await fetch(url);
        const jsonData = await response.json();
        setVehicleList(jsonData);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

  }, []);

  const [car, setCar] = useState<Car>();
  const navigate = useNavigate();

  const handleCarDatail = (c: Car) => {
    setCar(c);
    const car = c;
    navigate(`/detalhes/${c._id}`, { state: { car } });
  };


  return (
    <Grid container spacing={2} alignItems="center">
      {/* TITULO */}
      <Grid item xs={12} mt={12} mb={2} textAlign="center">
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "30px", sm: "36px" },
          }}
        >
          Catalogo de carros
        </Typography>

        <Typography variant="body1">Veja nossas novidades</Typography>
      </Grid>

      {/* CARDS */}
      <Grid item xs={12} mb={4} textAlign="center">
        <Box display="flex" px={5} gap={2} flexWrap="wrap">
          {vehicleList?.map((car: Car) => (
            <Card
              key={car._id}
              onClick={() => handleCarDatail(car)}
              sx={{
                width: { xs: "100%", sm: 270 },
                backgroundColor: "#EEEFF1",
                cursor: "pointer",
                transition: ".1s ease-in ease-out",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardMedia
                sx={{ height: 140, backgroundSize: "contain" }}
                image={`data:image/jpeg;base64,${car.carPhoto}`}
                title={car.model}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    fontSize: "18px",
                    textAlign: "start",
                    marginBottom: 1,
                  }}
                >
                  {car.model}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: "12px",
                    textAlign: "start",
                    marginBottom: 2,
                    height: "40px",
                  }}
                >
                  {car.description}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    fontSize: "18px",
                    textAlign: "start",
                    marginBottom: 2,
                  }}
                >
                  R$ {car.price}
                </Typography>

                <Box display="flex" justifyContent="space-between">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "12px", textAlign: "start" }}
                  >
                    {car.year}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "12px", textAlign: "start" }}
                  >
                    {car.kilometers} Km
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

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
              },
            }}
          >
            Veja nosso catalogo completo
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}