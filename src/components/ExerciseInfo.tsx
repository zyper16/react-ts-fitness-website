import { ExerciseCardProps } from "../types/exercisesTypes";
import { Box } from "@mui/material";

export default function ExerciseInfo({ exercise }: ExerciseCardProps) {
  return (
    <Box>
      <p>{exercise.bodyPart}</p>
      <p>{exercise.gifUrl}</p>
      <img src={exercise.gifUrl} />
      <p>{exercise.name}</p>
      <p>{exercise.instructions}</p>
    </Box>
  );
}
