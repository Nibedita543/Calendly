import { Container, Paper, Divider } from "@mui/material";
import ChromeExtension from "./All-Logincompo/CromeExtention.jsx";
import Header from "./All-Logincompo/Header.jsx";
import CustomtextField from "./All-Logincompo/TextFeild.jsx";
import ContinueButton from "./All-Logincompo/ContinueButton.jsx";
import GoogleButton from "./All-Logincompo/GoogleButton.jsx";
import MicroButton from "./All-Logincompo/MicroButtoon.jsx";
import SignupHere from "./All-Logincompo/Signuphere.jsx";
import "./Login.css";
function Login() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        backgroundColor: "pink",
        "-webkit-box-align": "center",
        gap: "25px",
        width: "470px",
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
          borderRadius: "24px",
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
            width: "100%",
            mb: 2,
            color: "rgb(71, 103, 136)",
            fontSize: "1.130rem",
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
