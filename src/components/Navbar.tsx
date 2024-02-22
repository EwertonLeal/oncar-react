import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} component="header" mb={8}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#ffffff" }}
        component="nav"
      >
        <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link to="/">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#1a1a1a" }}
            >
              Oncar
            </Typography>
          </Link>

          <Link to="/admin">
            <Button
              color="inherit"
              variant="contained"
              sx={{
                backgroundColor: "#C92227",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#A31115",
                },
              }}
            >
              Cadastrar veículos
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
