import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import "./CarAdmin.css";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const CarAdmin = () => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          margin: "1rem",
          paddingTop: "2rem",
          fontWeight: 500,
          fontSize: "30px",
          textAlign: "start",
          marginBottom: 1,
        }}
      >
        Adicionar novo veículo
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className="adminContent">
          <Grid item xs={12} display="flex" gap={2}>
            <TextField
              sx={{ width: "100%" }}
              id="standard-basic"
              label="Marca"
              variant="filled"
            />
            <TextField
              sx={{ width: "100%" }}
              id="standard-basic"
              label="Modelo"
              variant="filled"
            />
          </Grid>

          <Grid item xs={12} mt={2} display="flex" gap={2}>
            <TextField
              sx={{ width: "100%" }}
              id="filled-textarea"
              label="Descrição"
              placeholder="1.0 MPI MILLE FIRE ECONOMY 8V FLEX 2P MANUAL"
              multiline
              rows={2}
              variant="filled"
            />
          </Grid>

          <Grid item xs={12} mt={2} display="flex" gap={2}>
            <TextField
              sx={{ width: "100%" }}
              label="Preço do carro"
              id="filled-start-adornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                ),
              }}
              variant="filled"
            />
            <TextField
              sx={{ width: "100%" }}
              id="standard-basic"
              label="Ano de fabricação"
              variant="filled"
            />
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} className="adminContent">
          <Grid item xs={12} display="flex" gap={2}>
            <TextField
              sx={{ width: "100%" }}
              id="standard-basic"
              label="Tipo de combustivel"
              variant="filled"
            />
            <TextField
              sx={{ width: "100%" }}
              id="standard-basic"
              label="Cor do carro"
              variant="filled"
            />
          </Grid>

          <Grid item xs={12} display="flex" mt={2} gap={2}>
            <TextField
              sx={{ width: "100%" }}
              id="standard-basic"
              label="Quilometros rodados"
              variant="filled"
            />
            <TextField
              sx={{ width: "100%" }}
              id="standard-basic"
              label="Número de portas"
              variant="filled"
            />
          </Grid>

          <Grid item xs={12} display="flex" mt={2} gap={2}>
            <input type="file" />
          </Grid>

          <Grid item xs={12} display="flex" mt={2} gap={2}>
            <Button
              color="inherit"
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "#C92227",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#A31115",
                },
              }}
            >
              Veja nosso catalogo
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container pt={4} px={2}>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Marca</TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Ano de fabricação</TableCell>
              <TableCell>Combustivel</TableCell>
              <TableCell>Cor</TableCell>
              <TableCell>Km rodado</TableCell>
              <TableCell>N. de portas</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Fiat</TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Ano de fabricação</TableCell>
              <TableCell>Combustivel</TableCell>
              <TableCell>Cor</TableCell>
              <TableCell>Km rodado</TableCell>
              <TableCell>N. de portas</TableCell>
              <TableCell> <IconButton sx={{ color: "#c92227" }}><Delete /></IconButton> </TableCell>
              </TableRow>
          </TableBody>
        </Table>
        </TableContainer>
      </Grid>
    </>
  );
};
