import { useEffect, useState } from "react";
import { Box, Stack, Typography, Pagination } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { ExercisesProps } from "../types/exercisesTypes";
import { fetchData, fetchOptions } from "../utilities/fetchData";

export default function Exercises({
  exercises,
  setExercises,
  bodyPart,
}: ExercisesProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const exercisesPerPage = 9;
  const lastElementIndex = currentPage * exercisesPerPage;
  const firstElementIndex = lastElementIndex - exercisesPerPage;

  const currentExercises = exercises.slice(firstElementIndex, lastElementIndex);

  const paginate = (_e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exercisesList = [];
      if (bodyPart === "all") {
        exercisesList = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=5000&offset=0",
          fetchOptions
        );
      } else {
        exercisesList = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000&offset=0`,
          fetchOptions
        );
      }
      // setExercises(exercisesList);
    };

    fetchExerciseData();
  }, [bodyPart, setExercises]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Your Search Results:
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map(exercise => (
          <ExerciseCard key={exercise?.id} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            count={Math.ceil(exercises.length / exercisesPerPage)}
            shape="rounded"
            defaultPage={1}
            siblingCount={2}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
}
