import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Car } from "../../models/car-model";
import { Link } from "react-router-dom";
import { Filter } from "../../models/filter-model";

export const CarCatalogAdmin = () => {
  const [vehicleList, setVehicleList] = useState<Car[] | null>(null);
  const [carBrands, setCarBrands] = useState<string[]>([]);
  const [carModels, setCarModels] = useState<string[]>([]);
  const [carYear, setCarYear] = useState<string[]>([]);
  const [carColors, setCarColors] = useState<string[]>([]);
  const [filters, setFilters] = useState<Filter>({});

  const [initialCarBrands, setInitialCarBrands] = useState<string[]>([]);
  const [initialCarModels, setInitialCarModels] = useState<string[]>([]);
  const [initialCarYears, setInitialCarYears] = useState<string[]>([]);
  const [initialCarColors, setInitialCarColors] = useState<string[]>([]);

  const fetchData = async () => {
    try {
      let url = "https://oncar-backend.vercel.app/car";

      if (filters) {
        const params = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
          params.append(key, value);
        });
        url += `?${params.toString()}`;
      }

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

  useEffect(() => {
    const brands = vehicleList?.map((car) => car.brand);
    const uniqueBrands = Array.from(new Set(brands));
    setCarBrands(uniqueBrands);

    const models = vehicleList?.map((car) => car.model);
    const uniqueModels = Array.from(new Set(models));
    setCarModels(uniqueModels);

    const year = vehicleList?.map((car) => car.year.toString());
    const uniqueYear = Array.from(new Set(year));
    setCarYear(uniqueYear);

    const colors = vehicleList?.map((car) => car.color);
    const uniqueColors = Array.from(new Set(colors));
    setCarColors(uniqueColors);
  }, [vehicleList]);

  useEffect(() => {
    if (vehicleList) {
      const brands = vehicleList.map((car) => car.brand);
      const models = vehicleList.map((car) => car.model);
      const years = vehicleList.map((car) => car.year.toString());
      const colors = vehicleList.map((car) => car.color);

      setCarBrands(Array.from(new Set(brands)));
      setCarModels(Array.from(new Set(models)));
      setCarYear(Array.from(new Set(years)));
      setCarColors(Array.from(new Set(colors)));

      if (!filters.brand) {
        setInitialCarBrands(Array.from(new Set(brands)));
      }
      if (!filters.model) {
        setInitialCarModels(Array.from(new Set(models)));
      }
      if (!filters.year) {
        setInitialCarYears(Array.from(new Set(years)));
      }
      if (!filters.color) {
        setInitialCarColors(Array.from(new Set(colors)));
      }
    }
  }, [vehicleList, filters]);

  useEffect(() => {
    fetchData();
  }, [filters]);

  const handleBrandSelect = (brand: string | null) => {
    if (brand) {
      setFilters({ ...filters, brand });
    } else {
      const { brand, ...newFilters } = filters;
      setFilters(newFilters);
    }
  };

  const handleModelSelect = (model: string | null) => {
    if (model) {
      setFilters({ ...filters, model });
    } else {
      const { model, ...newFilters } = filters;
      setFilters(newFilters);
    }
  };

  const handleYearSelect = (year: string | null) => {
    if (year) {
      setFilters({ ...filters, year });
    } else {
      const { year, ...newFilters } = filters;
      setFilters(newFilters);
    }
  };

  const handleColorSelect = (color: string | null) => {
    if (color) {
      setFilters({ ...filters, color });
    } else {
      const { color, ...newFilters } = filters;
      setFilters(newFilters);
    }
  };

  return (
    <Box pt={4}>
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
            options={initialCarBrands}
            sx={{ width: "100%" }}
            onChange={(event, value) => handleBrandSelect(value)}
            renderInput={(params) => (
              <TextField
                sx={{ backgroundColor: "#ffffff" }}
                variant="filled"
                {...params}
                label="Marca"
              />
            )}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={initialCarModels}
            sx={{ width: "100%" }}
            onChange={(event, value) => handleModelSelect(value)}
            renderInput={(params) => (
              <TextField
                sx={{ backgroundColor: "#ffffff" }}
                variant="filled"
                {...params}
                label="Modelo"
              />
            )}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={initialCarYears}
            sx={{ width: "100%" }}
            onChange={(event, value) => handleYearSelect(value)}
            renderInput={(params) => (
              <TextField
                sx={{ backgroundColor: "#ffffff" }}
                variant="filled"
                {...params}
                label="Ano"
              />
            )}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={initialCarColors}
            sx={{ width: "100%" }}
            onChange={(event, value) => handleColorSelect(value)}
            renderInput={(params) => (
              <TextField
                sx={{ backgroundColor: "#ffffff" }}
                variant="filled"
                {...params}
                label="Cor"
              />
            )}
          />
        </Box>
      </Grid>

      <Grid item xs={12} mb={4} textAlign="center">
        <Box display="flex" px={5} gap={2} flexWrap="wrap">
          {vehicleList?.map((car: Car) => (
            <Link
              to={`/detalhes/${car._id}`}
              key={car._id}
              style={{ textDecoration: "none" }}
            >
              <Card
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
            </Link>
          ))}
        </Box>
      </Grid>
    </Box>
  );
};
