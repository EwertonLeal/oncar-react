import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const FinancingPage = () => {
  const location = useLocation();
  const [valorVeiculo, setValorVeiculo] = useState<number>(0);
  const [financingValue, setFinancingValue] = useState<number>(0);
  const [entryValue, setEntryValue] = useState<number>(0);
  const [financingReject, setfinancingReject] = useState<any>("");

  useEffect(() => {
    setValorVeiculo(location.state.valorVeiculo);
    const score = Math.floor(Math.random() * 999) + 1;

    // reprovado
    if (score > 1 && score < 299) {
      setfinancingReject("Financiamento reprovado!");
      setFinancingValue(0);
      setEntryValue(0);
    }

    // 70% de entrada, 30% do comprometimento da renda
    if (score > 300 && score < 599) {
      const entryValue = 0.7 * valorVeiculo;
      const financingValue = 0.3 * valorVeiculo;

      setFinancingValue(financingValue);
      setEntryValue(entryValue);
      setfinancingReject("");
    }

    // 50% de entrada, 25% do comprometimento da renda
    if (score > 600 && score < 799) {
      const entryValue = 0.5 * valorVeiculo;
      const financingValue = 0.5 * valorVeiculo;

      setFinancingValue(financingValue);
      setEntryValue(entryValue);
      setfinancingReject("");
    }

    // 30% de entrada, 20% do comprometimento da renda
    if (score > 800 && score < 950) {
      const entryValue = 0.3 * valorVeiculo;
      const financingValue = 0.7 * valorVeiculo;

      setFinancingValue(financingValue);
      setEntryValue(entryValue);
      setfinancingReject("");
    }

    // 100% de financiamento, taxa zero.
    if (score > 951 && score < 999) {
      setFinancingValue(valorVeiculo);
      setEntryValue(0);
      setfinancingReject("");
    }
  }, [location.state, financingReject, valorVeiculo]);

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={6} className="headingContent">
        {financingReject ? (
          <Typography
            variant="h2"
            component="h1"
            sx={{ fontSize: "36px", fontWeight: "600", marginBottom: "10px" }}
          >
            Financiamento reprovado!
          </Typography>
        ) : (
          <>
            <Typography
              variant="h2"
              component="h1"
              sx={{ fontSize: "36px", fontWeight: "600", marginBottom: "10px" }}
            >
              FOI LIBERADO PARA VOCÊ <br /> UM FINANCIAMENTO DE:
            </Typography>

            <Typography
              component="h3"
              sx={{
                fontSize: "30px",
                fontWeight: "600",
                color: "#C92227",
                marginBottom: "35px",
              }}
            >
              R$ {financingValue}
            </Typography>

            <Typography
              variant="h2"
              component="h1"
              sx={{ fontSize: "36px", fontWeight: "600", marginBottom: "10px" }}
            >
              COM ENTRADA DE:
            </Typography>

            <Typography
              component="h3"
              sx={{ fontSize: "30px", fontWeight: "600", color: "#C92227" }}
            >
              R$ {entryValue}
            </Typography>
          </>
        )}
      </Grid>
      <Grid item xs={12} md={6}>
        <img src="/hero-img.png" width="100%" alt="" />
      </Grid>
    </Grid>
  );
};
