import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ExerciseInfo from "../components/ExerciseInfo";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { Box, CircularProgress } from "@mui/material";
import {
  fetchData,
  fetchOptions,
  fetchYoutubeOptions,
} from "../utilities/fetchData";
import { ExerciseType, YouTubeVideo } from "../types/exercisesTypes";

export default function ExerciseDetail() {
  const [exerciseData, setExerciseData] = useState<ExerciseType>({
    bodyPart: "",
    equipment: "",
    gifUrl: "",
    id: "",
    name: "",
    target: "",
    secondaryMuscles: [],
    instructions: [],
  });
  const [youtubeVideos, setYoutubeVideos] = useState<YouTubeVideo[]>([]);
  const [targetExercises, setTargetExercises] = useState<ExerciseType[]>([]);
  const [equipmentExercises, setEquipmentExercises] = useState<ExerciseType[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseDetails = async () => {
      setIsLoading(true);
      const exerciseDBUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailsData = await fetchData(
        `${exerciseDBUrl}/exercises/exercise/${id}`,
        fetchOptions
      );
      const youtubeSearchData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailsData.name}`,
        fetchYoutubeOptions
      );

      const targetMuscleData = await fetchData(
        `${exerciseDBUrl}/exercises/target/${exerciseDetailsData.target}?limit=10&offset=0`,
        fetchOptions
      );

      const equipmentExercisesData = await fetchData(
        `${exerciseDBUrl}/exercises/equipment/${exerciseDetailsData.equipment}?limit=10&offset=0`,
        fetchOptions
      );

      setExerciseData(exerciseDetailsData);
      setYoutubeVideos(youtubeSearchData.contents);
      setTargetExercises(targetMuscleData);
      setEquipmentExercises(equipmentExercisesData);
      setIsLoading(false);
    };
    fetchExerciseDetails();
  }, [exerciseData.equipment, exerciseData.name, exerciseData.target, id]);

  return isLoading ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <ExerciseInfo exercise={exerciseData} />
      <ExerciseVideos youtubeVideos={youtubeVideos} />
      <SimilarExercises
        targetExercises={targetExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
}
