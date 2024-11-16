import { Stack, Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { fetchData, fetchOptions } from "../utilities/fetchData";

export default function SearchExercises() {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchExercises = async () => {
    const exercises = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
      fetchOptions
    );
    console.log(exercises);
  };

  return (
    <Stack>
      <Typography fontWeight="600" fontSize="30px">
        Let's search for <br /> Exercises
      </Typography>
      <Box>
        <TextField
          id="search-for-exercises"
          onChange={e => {
            setSearchValue(e.target.value);
          }}
          value={searchValue}
        />
        <Button onClick={handleSearchExercises}>Make my day</Button>
      </Box>
    </Stack>
  );
}
