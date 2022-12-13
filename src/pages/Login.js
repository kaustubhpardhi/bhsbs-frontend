import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bob from "../images/BOB_CMYK_complogo-01.webp";
import watermark from "../images/watermark.png";
import "./Login.css";
import logo from "../images/bhsbs.png";
import bom from "../images/bom.png";

const Login = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [change, setChange] = useState(false);

  const [userData] = useState({
    id: "bhsbs",
    password: "bhsbs@123",
  });

  // localStorage
  let user = localStorage.getItem("user");

  useEffect(() => {
    if (user) {
      navigate("/billing");
    }
  }, [user, change, navigate]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (userData.id !== id) {
      return alert("User not found");
    }
    if (userData.password !== password) {
      return alert("User and password doesn't match");
    }
    localStorage.setItem("user", true);
    setChange(!change);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "9999",
        backgroundColor: "#fafbfb",
      }}
    >
      <Box sx={{ my: 3 }}>
        <Typography
          variant="h5"
          sx={{
            color: "eighth.main",
            textAlign: "center",
            mb: 2,
          }}
        >
          <img className="logo" src={logo} alt="" />
          <br />
          BAHUJAN HITAY SAMAJIK BANDHILKI SANSTHA,PUNE
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1.5fr", xs: "1fr" },
            gap: 2,
            maxWidth: "700px",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            overflow: "hidden",
          }}
        >
          {/* side image login left side */}
          <img src={watermark} className="loginImg" alt="loginImage" />

          {/* login form right site  */}
          <div>
            <Box component="form" onSubmit={submitHandler}>
              <Box sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "eighth.main",
                  }}
                >
                  Donation Billing Software{" "}
                </Typography>

                <FormControl sx={{ display: "block", my: 2 }}>
                  <TextField
                    required
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    fullWidth
                    id="id"
                    color="eighth"
                    size="small"
                    placeholder="Username"
                  />
                </FormControl>
                <FormControl sx={{ display: "block", my: 2 }}>
                  <TextField
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    id="password"
                    color="eighth"
                    size="small"
                    type="password"
                    placeholder="Password"
                  />
                </FormControl>

                <Box sx={{ mt: 3, textAlign: "center" }}>
                  <Button
                    variant="contained"
                    sx={{ px: 6, textTransform: "capitalize" }}
                    type="submit"
                    color="eighth"
                    disableElevation
                  >
                    {" "}
                    Login
                  </Button>
                </Box>
              </Box>
            </Box>
          </div>
        </Box>

        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Typography paragraph sx={{ color: "eighth.main", mb: 0 }}>
            Powered by
          </Typography>
          <img src={bom} style={{ maxWidth: "200px" }} alt="logo" />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
