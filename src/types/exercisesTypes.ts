export type ExerciseType = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
};

export type ExercisesProps = {
  exercises: ExerciseType[];
  setExercises: React.Dispatch<React.SetStateAction<ExerciseType[]>>;
  bodyPart: string;
};

export type SearchExercisesProps = {
  setExercises: React.Dispatch<React.SetStateAction<ExerciseType[]>>;
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
};

export type BodyPartCardProps = {
  item: string;
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
};

export type ExerciseCardProps = {
  exercise: ExerciseType;
};

export type HorizontalScrollBarProps = {
  bodyPartsList: string[];
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
};
