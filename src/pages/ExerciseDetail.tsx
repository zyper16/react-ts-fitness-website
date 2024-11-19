import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ExerciseInfo from "../components/ExerciseInfo";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { Box } from "@mui/material";
import { fetchData, fetchOptions } from "../utilities/fetchData";
import { ExerciseType } from "../types/exercisesTypes";

export default function ExerciseDetail() {
  const [exerciseData, setExerciseData] = useState<ExerciseType>({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseDetails = async () => {
      const exerciseDBUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDetailsData = await fetchData(
        `${exerciseDBUrl}/exercises/exercise/${id}`,
        fetchOptions
      );
      console.log(exerciseDetailsData);

      setExerciseData(exerciseDetailsData);
    };
    fetchExerciseDetails();
  }, [id]);

  return (
    <Box>
      <ExerciseInfo exercise={exerciseData} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
}
