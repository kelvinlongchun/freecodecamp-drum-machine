import { FC, useState } from "react";
import { useDrumContext } from "../../../../contexts/DrumContext";
import type { PadInfo } from "..";
import "./styles.scss";

const CLICK_EFFECT_TIME = 300;

const DrumPad: FC<PadInfo> = (props) => {
  const { drumDispatch } = useDrumContext();

  const [timeOutId, setTimeOutId] = useState<NodeJS.Timeout | null>(null);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const audioElement = e.currentTarget.childNodes[0] as HTMLAudioElement;
    if (!audioElement.paused) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
    audioElement.play();

    drumDispatch({ type: "CHANGE_CLIP", clip: props.audioClip });

    if (timeOutId !== null) {
      clearTimeout(timeOutId);
      setTimeOutId(null);
    }

    setTimeOutId(
      setTimeout(() => {
        setTimeOutId(null);
      }, CLICK_EFFECT_TIME)
    );
  };

  return (
    <div
      className="drum-pad"
      is-clicked={(!!timeOutId).toString()}
      id={props.audioClip}
      onClick={handleClick}
    >
      <audio className="clip" id={props.text} src={props.audioUrl}></audio>
      <span>{props.text}</span>
    </div>
  );
};

export default DrumPad;
