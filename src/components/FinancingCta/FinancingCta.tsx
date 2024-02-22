import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate  } from "react-router-dom";

export const FinancingCta = () => {

  const [valorVeiculo, setValorVeiculo] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event: any) => {
    const inputValue = event.target.value;
    if (/^\d*$/.test(inputValue) || inputValue === '') {
      setValorVeiculo(inputValue);
    }
  };

  const handleSubmit = () => {
    navigate("/financiamento", { state: { valorVeiculo } });
  };

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
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              error={false}
              id="margin-none"
              margin="none"
              sx={{ backgroundColor: "#ffffff"}}
              label="Valor do veículo"
              variant="filled"
              value={valorVeiculo}
              onChange={handleInputChange}
            />
          </Box>

          <Button
              disabled={!valorVeiculo}
              color="inherit"
              variant="contained"
              sx={{
                height: "100%",
                backgroundColor: "#C92227",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#A31115",
                },
                "&:disabled": {
                  backgroundColor: "#E98083",
                  color: "#ffffff",
                  cursor: "no-drop"
                }
              }}
              onClick={handleSubmit}
            >
              Faça uma simulação
            </Button>
        </Box>
      </Box>
    </Grid>
  );
};
