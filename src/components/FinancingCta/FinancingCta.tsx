import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export const FinancingCta = () => {
  return (
    <Grid item xs={12} mb={6} p={5}>
      <Box
        sx={{
          height: "250px",
          backgroundImage: "url(/bg-cta.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "8px",
        }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "26px", sm: "36px" },
            color: "#ffffff",
            textAlign: "center"
          }}
        >
          SIMULE SEU FINANCIAMENTO
        </Typography>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }} gap={3} mt={4}>
          <TextField
            id="margin-none"
            margin="none"
            sx={{ backgroundColor: "#ffffff"}}
            label="Valor do veículo"
            variant="filled"
          />

          <Link to="/financiamento">
            <Button
              color="inherit"
              variant="contained"
              sx={{
                height: "100%",
                backgroundColor: "#C92227",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#A31115",
                },
              }}
            >
              Faça uma simulação
            </Button>
          </Link>
        </Box>
      </Box>
    </Grid>
  );
};
