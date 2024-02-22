import Autocomplete from "@mui/material/Autocomplete"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"

export const CarCatalog = () => {
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

      {/* FILTROS */}
      <Grid item xs={12} mb={6} textAlign="center">
        <Box
          display="flex"
          sx={{ flexWrap: { xs: "wrap", sm: "nowrap" } }}
          px={5}
          gap={4}
        >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top5Films}
            sx={{ width: "100%" }}
            renderInput={(params) => <TextField sx={{ backgroundColor: "#ffffff"}} variant="filled" {...params} label="Marca" />}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top5Films}
            sx={{ width: "100%" }}
            renderInput={(params) => <TextField sx={{ backgroundColor: "#ffffff"}} variant="filled" {...params} label="Modelo" />}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top5Films}
            sx={{ width: "100%" }}
            renderInput={(params) => <TextField sx={{ backgroundColor: "#ffffff"}} variant="filled" {...params} label="Ano" />}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top5Films}
            sx={{ width: "100%" }}
            renderInput={(params) => <TextField sx={{ backgroundColor: "#ffffff"}} variant="filled" {...params} label="Cor" />}
          />
        </Box>
      </Grid>

      {/* CARDS */}
      <Grid item xs={12} mb={4} textAlign="center">
        <Box
          display="flex"
          px={5}
          gap={2}
          flexWrap="wrap"
        >
          <Link to="/detalhes/1" style={{ textDecoration: "none" }}>
            <Card sx={{ width: { xs: "100%", sm: 270 }, backgroundColor: "#EEEFF1", cursor: "pointer", transition: ".1s ease-in ease-out", "&:hover": { transform: "scale(1.05)" } }}>
              <CardMedia
                sx={{ height: 140, backgroundSize: "contain" }}
                image="/exemple-car.png"
                title="green iguana"
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 600, fontSize: "18px", textAlign: "start", marginBottom: 1 }}>
                  Fiat Uno
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ fontSize: "12px", textAlign: "start", marginBottom: 2 }}>
                  1.0 MPI MILLE FIRE ECONOMY 8V FLEX 2P MANUAL
                </Typography>

                <Typography variant="h5" sx={{ fontWeight: 600, fontSize: "18px", textAlign: "start", marginBottom: 2 }}>
                  R$ 15.700
                </Typography>

                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: "12px", textAlign: "start" }}>
                      2008
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: "12px", textAlign: "start" }}>
                    293.000 Km
                    </Typography>
                </Box>
              </CardContent>
            </Card>
          </Link>

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
                  }
              }}
            >
              Veja nosso catalogo completo
            </Button>
        </Link>

      </Grid>
    </Grid>
  );
}

const top5Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
]
