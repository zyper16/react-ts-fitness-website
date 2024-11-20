import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ExerciseInfo from "../components/ExerciseInfo";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { Box } from "@mui/material";
import {
  fetchData,
  fetchOptions,
  fetchYoutubeOptions,
} from "../utilities/fetchData";
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
      const youtubeSearchData = await fetchData(
        `${youtubeSearchUrl}/search?query=3%2F4%20sit-up`,
        fetchYoutubeOptions
      );
      console.log(exerciseDetailsData);
      console.log(youtubeSearchData);

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
