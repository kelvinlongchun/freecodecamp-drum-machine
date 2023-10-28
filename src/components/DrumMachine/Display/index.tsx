import { useDrumContext } from "../../../contexts/DrumContext";
import "./styles.scss";

const Display = () => {
  const { drum } = useDrumContext();

  return <p id="display">{drum.clip}</p>;
};

export default Display;
