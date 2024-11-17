import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function ExerciseCard({ exercise }) {
  return (
    <Link to={`/exercise/${exercise.id}`}>
      <Box>
        <Typography>{exercise.name}</Typography>
        <img src={exercise.gifUrl} width="100px" height="100px" />
      </Box>
    </Link>
  );
}
