import { useState } from "react";
import { Box, Stack, Typography, Pagination } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

export default function Exercises({ exercises }) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const exercisesPerPage = 9;
  const lastElementIndex = currentPage * exercisesPerPage;
  const firstElementIndex = lastElementIndex - exercisesPerPage;

  const currentExercises = exercises.slice(firstElementIndex, lastElementIndex);

  const paginate = (_e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

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
