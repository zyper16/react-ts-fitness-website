import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/logo-placeholder.png";
import getCurrentYear from "../utilities/getCurrentYear";

export default function Footer() {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack
        gap="40px"
        sx={{ alignItems: "center" }}
        flexWrap="wrap"
        px="40px"
        pt="24px"
      >
        <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
      </Stack>
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "24px", xs: "20px" } }}
        mt="41px"
        textAlign="center"
        pb="40px"
      >
        © {getCurrentYear()} Lungu Andrei
      </Typography>
    </Box>
  );
}
