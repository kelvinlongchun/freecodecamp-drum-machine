import { useEffect } from "react";
import DrumPad from "./DrumPad";
import "./styles.scss";

interface PadInfo {
  text: string;
  audioClip: string;
  audioUrl: string;
}

const padInfoArray: PadInfo[] = [
  {
    text: "Q",
    audioClip: "Heater 1",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    text: "W",
    audioClip: "Heater 2",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    text: "E",
    audioClip: "Heater 3",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    text: "A",
    audioClip: "Heater 4",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    text: "S",
    audioClip: "Clap",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    text: "D",
    audioClip: "Open-HH",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    text: "Z",
    audioClip: "Kick-n'-Hat",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    text: "X",
    audioClip: "Kick",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    text: "C",
    audioClip: "Closed-HH",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const DrumPads = () => {
  const handleKeyDown = (e: KeyboardEvent) => {
    const targetId = e.key.toUpperCase();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.click();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="drum-pads">
      {padInfoArray.map((info, index) => (
        <DrumPad
          text={info.text}
          audioClip={info.audioClip}
          audioUrl={info.audioUrl}
          key={`drum-pads-${index}`}
        />
      ))}
    </div>
  );
};

export default DrumPads;
export type { PadInfo };
