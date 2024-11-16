import { Dispatch, SetStateAction } from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

type BodyPartCard = {
  item: string;
  bodyPart: string;
  setBodyPart: Dispatch<SetStateAction<string>>;
};

export default function BodyPartCard({
  item,
  bodyPart,
  setBodyPart,
}: BodyPartCard) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF2625" : "",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "282px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => setBodyPart(item)}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {" "}
        {item}
      </Typography>
    </Stack>
  );
}
