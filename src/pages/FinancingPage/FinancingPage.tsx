import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

export const FinancingPage = () => {
  return (
    <Grid container spacing={2} alignItems="center">
    <Grid item xs={12} md={6} className="headingContent">
      <Typography variant="h2" component="h1" sx={{ fontSize: "36px", fontWeight: "600", marginBottom: "10px" }}>
        FOI LIBERADO PARA VOCÊ <br/> UM FINANCIAMENTO DE:
      </Typography>

      <Typography component="h3" sx={{ fontSize: "30px", fontWeight: "600", color: "#C92227", marginBottom: "35px" }}>
       R$ 9.000,00
      </Typography>

      <Typography variant="h2" component="h1" sx={{ fontSize: "36px", fontWeight: "600", marginBottom: "10px" }}>
        COM ENTRADA DE:
      </Typography>

      <Typography component="h3" sx={{ fontSize: "30px", fontWeight: "600", color: "#C92227" }}>
       R$ 21.000,00
      </Typography>

    </Grid>
    <Grid item xs={12} md={6}>
      <img src="/hero-img.png" width="100%" alt="" />
    </Grid>
  </Grid>
  )
}
