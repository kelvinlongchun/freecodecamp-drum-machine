import ClipContextWrapper from "../../contexts/DrumContext";
import Display from "./Display";
import DrumPads from "./DrumPads";
import "./styles.scss";

const DrumMachine = () => {
  return (
    <ClipContextWrapper>
      <div id="drum-machine">
        <Display />
        <DrumPads />
      </div>
    </ClipContextWrapper>
  );
};

export default DrumMachine;
