import { Box, Typography } from "@mui/material";
import { ErrorMessageType } from "../types/exercisesTypes";

export default function ErrorMessage({ error }: ErrorMessageType) {
  return (
    <Box>
      <Typography>{error}</Typography>
    </Box>
  );
}
