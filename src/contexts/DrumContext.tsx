import { FC, ReactNode, createContext, useContext, useReducer } from "react";

type DrumActionType = "CHANGE_CLIP";

interface Drum {
  clip: string;
}

interface DrumAction {
  type: DrumActionType;
  clip: string;
}

interface DrumContextType {
  drum: Drum;
  drumDispatch: React.Dispatch<DrumAction>;
}

interface Props {
  children: ReactNode;
}

const drumReducer = (drum: Drum, action: DrumAction) => {
  switch (action.type) {
    case "CHANGE_CLIP":
      return { ...drum, clip: action.clip };
    default:
      return drum;
  }
};

const initialDrum: Drum = { clip: "" };
const useDrumReducer = () => useReducer(drumReducer, initialDrum);

const DrumContext = createContext<DrumContextType | {}>({});

const useDrumContext = () => useContext(DrumContext) as DrumContextType;

const DrumContextWrapper: FC<Props> = (props) => {
  const [drum, drumDispatch] = useDrumReducer();

  return (
    <DrumContext.Provider value={{ drum, drumDispatch }}>
      {props.children}
    </DrumContext.Provider>
  );
};

export default DrumContextWrapper;
export { useDrumContext };
