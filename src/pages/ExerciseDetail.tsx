import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ExerciseInfo from "../components/ExerciseInfo";
import ExerciseVideos from "../components/ExerciseInfo";
import SimilarExercises from "../components/SimilarExercises";
import { Box } from "@mui/material";
import { fetchData, fetchOptions } from "../utilities/fetchData";

export default function ExerciseDetail() {
  return (
    <Box>
      <ExerciseInfo />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
}
