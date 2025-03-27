import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Link,
  Divider,
  Chip,
} from "@mui/material";
import "./SIgnUp.css";

function Signup() {
  return (
    <Container maxWidth="sm">
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
            marginTop: 2,
            boxShadow: "none",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgb(0, 107, 255)",
              color: "white",
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              width: { xs: "100%", sm: "auto" },
              "&:hover": { backgroundColor: "rgb(21, 85, 174)" },
            }}
          >
            <img
              src="https://calendly.com/media/googleLogo.svg
"
              alt="Google logo"
              width="26"
              height="26"
            />
            Sign up with Google
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2F4A80",
              color: "white",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              width: { xs: "100%", sm: "auto" },
              "&:hover": { backgroundColor: "#233B67" },
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft logo"
              width="24"
              height="24"
            />
            Sign up with Microsoft
          </Button>
        </Box>
        <Link href="/login" target="_blank" id="signup-login-link">
          Login
        </Link>
      </Paper>
    </Container>
  );
}

export default Signup;
