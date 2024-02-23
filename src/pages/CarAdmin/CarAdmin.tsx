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
import { useEffect, useState } from "react";
import { Car } from "../../models/car-model";
import axios from "axios";

export const CarAdmin = () => {
  const [vehicleList, setVehicleList] = useState<Car[] | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    description: "",
    price: "",
    year: "",
    fuel: "",
    color: "",
    kilometers: "",
    numOfDoors: "",
    carPhoto: null
  });

  const fetchData = async () => {
    try {

      let url = 'https://oncar-backend.vercel.app/car/home';
      const response = await fetch(url);
      const jsonData = await response.json();
      setVehicleList(jsonData);
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (event: any) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
    checkFormValidity();
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      carPhoto: file,
    }));
    checkFormValidity();
  };

  const checkFormValidity = () => {
    const inputs: any = document.querySelectorAll('input[required]');
    const fileInput: any = document.querySelector('input[type="file"]');
    let isValid = true;
    inputs.forEach((input: any) => {
      if (!input.value.trim()) {
        isValid = false;
      }
    });
    if (!fileInput || !fileInput.files.length) {
      isValid = false;
    }
    setIsFormValid(isValid);
  };

  const postCar = () => {
    const formDataToSend = new FormData();
    console.log(formData);
    formDataToSend.append('brand', formData.brand ?? '');
    formDataToSend.append('model', formData.model ?? '');
    formDataToSend.append('description', formData.description ?? '');
    formDataToSend.append('price', formData.price ?? 0);
    formDataToSend.append('year', formData.year ?? 0);
    formDataToSend.append('fuel', formData.fuel ?? '');
    formDataToSend.append('color', formData.color ?? '');
    formDataToSend.append('kilometers', formData.kilometers ?? 0);
    formDataToSend.append('numOfDoors', formData.numOfDoors ?? 0);
    formDataToSend.append('carPhoto', formData.carPhoto ?? '');
  
    axios.post("https://oncar-backend.vercel.app/car", formDataToSend)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          alert("Veículo cadastrado com sucesso!");
          fetchData();
        } else {
          console.error("Erro ao cadastrar veículo:", response);
        }
      })
      .catch((error) => {
        console.error("Erro de rede ao cadastrar veículo:", error);
      });
  };

  const deleteCar = (id: string) => {
    fetch(`https://oncar-backend.vercel.app/car/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao excluir recurso");
        }
        alert("Veículo excluído com sucesso!");
        fetchData();
      })
      .catch((error) => {
        console.error("Erro ao excluir veículo:", error);
      });
  }

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
              id="brand"
              label="Marca"
              variant="filled"
              required
              onChange={handleInputChange}
            />
            <TextField
              sx={{ width: "100%" }}
              id="model"
              label="Modelo"
              variant="filled"
              required
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} mt={2} display="flex" gap={2}>
            <TextField
              sx={{ width: "100%" }}
              id="description"
              label="Descrição"
              placeholder="1.0 MPI MILLE FIRE ECONOMY 8V FLEX 2P MANUAL"
              multiline
              rows={2}
              variant="filled"
              required
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} mt={2} display="flex" gap={2}>
            <TextField
              sx={{ width: "100%" }}
              label="Preço do carro"
              id="price"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                ),
              }}
              variant="filled"
              required
              onChange={handleInputChange}
            />
            <TextField
              sx={{ width: "100%" }}
              id="year"
              label="Ano de fabricação"
              variant="filled"
              inputProps={{ maxLength: 4 }}
              required
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} className="adminContent">
          <Grid item xs={12} display="flex" mt={2} gap={2}>
            <TextField
              sx={{ width: "100%" }}
              id="fuel"
              label="Tipo de combustível"
              variant="filled"
              required
              onChange={handleInputChange}
            />
            <TextField
              sx={{ width: "100%" }}
              id="color"
              label="Cor do carro"
              variant="filled"
              required
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} display="flex" mt={2} gap={2}>
            <TextField
              sx={{ width: "100%" }}
              id="kilometers"
              label="Quilômetros rodados"
              variant="filled"
              required
              onChange={handleInputChange}
            />
            <TextField
              sx={{ width: "100%" }}
              id="numOfDoors"
              label="Número de portas"
              variant="filled"
              inputProps={{ maxLength: 1 }}
              required
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} display="flex" mt={2} gap={2}>
            <input type="file" onChange={handleFileChange} required />
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
              disabled={!isFormValid}
              onClick={postCar}
            >
              Cadastrar veículos
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* Tabela de visualização */}
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
                <TableCell>Combustível</TableCell>
                <TableCell>Cor</TableCell>
                <TableCell>Km rodado</TableCell>
                <TableCell>N. de portas</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {vehicleList?.map((car: Car, index) => (
                  <TableRow key={car._id}>
                    <TableCell>{index}</TableCell>
                    <TableCell>{car.brand}</TableCell>
                    <TableCell>{car.model}</TableCell>
                    <TableCell>{car.price}</TableCell>
                    <TableCell>{car.year}</TableCell>
                    <TableCell>{car.fuel}</TableCell>
                    <TableCell>{car.color}</TableCell>
                    <TableCell>{car.kilometers}</TableCell>
                    <TableCell>{car.numOfDoors}</TableCell>
                    <TableCell>
                      <IconButton sx={{ color: "#c92227" }} onClick={() => { deleteCar(car._id) }}>
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};
