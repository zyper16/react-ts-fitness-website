import { Box, Typography, Stack } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

export default function SimilarExercises({
  targetExercises,
  equipmentExercises,
}) {
  {
    if (targetExercises.length === 0 || targetExercises.length === 0)
      return <Loader />;
  }
  return (
    <Box sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Exercises with same target group:
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {targetExercises.map(exercise => (
          <ExerciseCard key={exercise?.id} exercise={exercise} />
        ))}
      </Stack>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Exercises using same equipment:
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {equipmentExercises.map(exercise => (
          <ExerciseCard key={exercise?.id} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
}
