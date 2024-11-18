import { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import { ExerciseType } from "../types/exercisesTypes";

export default function Home() {
  const [exercises, setExercises] = useState<ExerciseType[]>([]);
  const [bodyPart, setBodyPart] = useState<string>("all");
  console.log(bodyPart);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        bodyPart={bodyPart}
        setExercises={setExercises}
      />
    </Box>
  );
}
