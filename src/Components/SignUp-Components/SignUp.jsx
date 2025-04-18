import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Divider,
  Chip,
} from "@mui/material";
import "./SIgnUp.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <Paper
        elevation={3}
        sx={{
          padding: { xs: 2, sm: 4 },
          marginTop: { xs: 2, sm: 5 },
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "700", fontSize: { xs: "1.5rem", sm: "2rem" } }}
          id="signup-head-text"
        >
          Sign up for your Calendly account
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "400", fontSize: { xs: "0.9rem", sm: "1rem" } }}
          id="signup-text"
        >
          Always free! No credit card required.
        </Typography>
        <form>
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            margin="normal"
            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
          />
          <Box mt={2}>
            <Button fullWidth id="signup-btn">
              Sign Up
            </Button>
          </Box>
          <Divider sx={{ mt: { xs: 2, sm: 3 } }}>
            <Chip
              label="OR"
              size="small"
              sx={{ backgroundColor: "transparent" }}
            />
          </Divider>
        </form>
        <Typography
          gutterBottom
          id="signup-text1"
          sx={{ padding: 0.5, fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          Easily connect your calendar by signing up with your Google, Microsoft
          Office 365, or Outlook account.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            mt: 2,
            flexDirection: { xs: "column", sm: "row" },
            width: "100%", // ✅ This is good
          }}
        >
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Button
              fullWidth
              sx={{
                height: "60px",
                backgroundColor: "rgb(0, 107, 255)",
                color: "white",
                textTransform: "none",
                padding: "5px 10px",
                fontSize: { xs: "14px", sm: "16px" },
                whiteSpace: "nowrap",
                fontWeight: "bold",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, sm: 1.5 },
                justifyContent: "center",
                "&:hover": { backgroundColor: "rgb(21, 85, 174)" },
              }}
            >
              <img
                src="https://calendly.com/media/googleLogo.svg"
                alt="Google logo"
                width="26"
                height="26"
                style={{
                  backgroundColor: "white", // white box
                  padding: "6px", // space around the image
                  borderRadius: "4px", // slightly rounded corners
                  height: "30px",
                  width: "30px",
                }}
              />
              <span style={{ whiteSpace: "nowrap" }}>Sign up with Google</span>
            </Button>
          </Box>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                whiteSpace: "nowrap",
                backgroundColor: "#2F4A80",
                color: "white",
                textTransform: "none",
                fontWeight: "bold",
                padding: "5px 10px",
                fontSize: { xs: "14px", sm: "16px" },
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                justifyContent: "center",
                boxShadow: "none",
                "&:hover": { backgroundColor: "#233B67" },
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                alt="Microsoft logo"
                width="24"
                height="24"
                style={{
                  backgroundColor: "white", // white box
                  padding: "6px", // space around the image
                  borderRadius: "4px", // slightly rounded corners
                  height: "30px",
                  width: "30px",
                }}
              />
              <span> Sign up with Microsoft</span>
            </Button>
          </Box>
        </Box>
        <Link to="/login" id="signup-login-link">
          Login
        </Link>
      </Paper>
    </Container>
  );
}

export default Signup;
