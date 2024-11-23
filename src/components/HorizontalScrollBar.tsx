import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/styles.css";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import BodyPartCard from "./BodyPartCard";
import ExerciseCard from "./ExerciseCard";
import { isExerciseType } from "../types/exercisesTypes";
import { HorizontalScrollBarProps } from "../types/exercisesTypes";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

export default function HorizontalScrollBar({
  data,
  bodyPart,
  setBodyPart,
  isBodyPart,
}: HorizontalScrollBarProps) {
  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map(item => (
          <Box
            key={isExerciseType(item) ? item.id : item}
            title={isExerciseType(item) ? item.id : item}
            m="0 40px"
          >
            {isBodyPart && !isExerciseType(item) ? (
              <BodyPartCard
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              isExerciseType(item) && <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </ScrollMenu>
    </div>
  );
}
