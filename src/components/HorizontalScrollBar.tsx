import { Dispatch, SetStateAction } from "react";
import { Box } from "@mui/material";

type HorizontalScrollBarProps = {
  bodyPartsList: string[];
  bodyPart: string;
  setBodyPart: Dispatch<SetStateAction<string>>;
};

export default function HorizontalScrollBar({
  bodyPartsList,
  bodyPart,
  setBodyPart,
}: HorizontalScrollBarProps) {
  return (
    <div>
      {bodyPartsList.map(bodyPart => (
        <Box key={bodyPart}>{bodyPart}</Box>
      ))}
    </div>
  );
}
