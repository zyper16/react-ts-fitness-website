import { Dispatch, SetStateAction } from "react";
import { Box } from "@mui/material";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/styles.css";

import BodyPartCard from "./BodyPartCard";

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
    <div style={{ width: "100%", overflowX: "auto" }}>
      <ScrollMenu>
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
