import { Dispatch, SetStateAction, useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/styles.css";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";

import BodyPartCard from "./BodyPartCard";

type HorizontalScrollBarProps = {
  bodyPartsList: string[];
  bodyPart: string;
  setBodyPart: Dispatch<SetStateAction<string>>;
};

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
  bodyPartsList,
  bodyPart,
  setBodyPart,
}: HorizontalScrollBarProps) {
  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {bodyPartsList.map(item => (
          <Box key={item} title={item || item} m="0 40px">
            <BodyPartCard
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        ))}
      </ScrollMenu>
    </div>
  );
}
