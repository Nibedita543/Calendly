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
import "./Login.css"

function Login() {
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
        <form>
          <TextField
            fullWidth
            label="Enter Your Email"
            name="email"
            margin="normal"
            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
          />
          <Box mt={2}>
            <Button fullWidth id="login-btn">
              Log In
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
          id="login-text1"
          sx={{ padding: 0.5, fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          Log in with your Google, Microsoft Office 365, or Outlook account.
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
              src="https://calendly.com/media/googleLogo.svg"
              alt="Google logo"
              width="26"
              height="26"
            />
            Log in with Google
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
            Log in with Microsoft
          </Button>
        </Box>
        <Box textAlign="center" mt={2}>
          <Link href="/signup" target="_blank" id="login-signup-link">
            Don't have an account? Sign up
          </Link>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
