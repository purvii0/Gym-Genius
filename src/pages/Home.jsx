import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercise from "../components/SearchExercise";
import Exercises from "../components/Exercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
      <Exercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
    </Box>
  );
};

export default Home;
