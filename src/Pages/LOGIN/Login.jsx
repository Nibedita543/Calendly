import { Container, Paper, Divider } from "@mui/material";
import ChromeExtension from "../../Components/Login-Components/CromeExtention.jsx";
import Header from "../../Components/Login-Components/Header.jsx";
import CustomtextField from "../../Components/Login-Components/TextFeild.jsx";
import ContinueButton from "../../Components/Login-Components/ContinueButton.jsx";
import GoogleButton from "../../Components/Login-Components/GoogleButton.jsx";
import MicroButton from "../../Components/Login-Components/MicroButtoon.jsx";
import SignupHere from "../../Components/Login-Components/Signuphere.jsx";
import "./Login.css";
function Login() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        "-webkit-box-align": "center",
        gap: "25px",
        width: "450px",
        backgroundColor: "transparent",
      }}
    >
      <ChromeExtension />
      <Header />
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "rgb(255, 255, 255)",
          border: "1px solid rgb(212, 224, 237)",
          borderRadius: "16px",
          padding: "30px",
          boxShadow:
            "rgba(71, 103, 136, 0.04) 0px 4px 5px 0px, rgba(71, 103, 136, 0.03) 0px 8px 15px 0px, rgba(71, 103, 136, 0.0)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: "20px",
        }}
      >
        <CustomtextField />
        <ContinueButton />
        <Divider
          sx={{
            width: "90%",
            color: "rgb(71, 103, 136)",
          }}
        >
          OR
        </Divider>
        <GoogleButton />
        <MicroButton />
      </Paper>
      <SignupHere />
    </Container>
  );
}

export default Login;
