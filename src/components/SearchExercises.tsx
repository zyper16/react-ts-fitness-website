import { useState, useEffect } from "react";
import { Stack, Typography, Box, TextField, Button } from "@mui/material";

import { fetchData, fetchOptions } from "../utilities/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";
import { ExerciseType, SearchExercisesProps } from "../types/exercisesTypes";

export default function SearchExercises({
  setExercises,
  bodyPart,
  setBodyPart,
}: SearchExercisesProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartsList = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        fetchOptions
      );
      setBodyParts(["all", ...bodyPartsList]);
    };

    fetchBodyParts();
  }, []);

  const handleSearchExercises = async () => {
    const exercisesData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises?limit=5000&offset=0",
      fetchOptions
    );
    console.log(exercisesData);

    const searchedExercises = exercisesData.filter(
      (exercise: ExerciseType) =>
        exercise.name.toLowerCase().includes(searchValue) ||
        exercise.target.toLowerCase().includes(searchValue) ||
        exercise.equipment.toLowerCase().includes(searchValue) ||
        exercise.bodyPart.toLowerCase().includes(searchValue)
    );
    window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

    setSearchValue("");
    setExercises(searchedExercises);
    console.log(searchedExercises);
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={searchValue}
          onChange={e => setSearchValue(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearchExercises}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar
          bodyPartsList={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
}
