import { Box } from "@mui/material";

type HorizontalScrollBarProps = {
  bodyPartsList: string[];
};

export default function HorizontalScrollBar({
  bodyPartsList,
}: HorizontalScrollBarProps) {
  return (
    <div>
      {bodyPartsList.map(bodyPart => (
        <Box key={bodyPart}>{bodyPart}</Box>
      ))}
    </div>
  );
}
