"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

const colors = ["#ff79c6", "#50fa7b", "#f1fa8c"];

const IntroTypewriter = () => {
  const [text] = useTypewriter({
    words: ["Build.Release.Scale"],
    loop: false,
    delaySpeed: 2000,
  });

  return (
    <>
      {text.split(".").map((word, index) => (
        <span key={word} className="text-2xl" style={{ color: colors[index] }}>
          {word}.{" "}
        </span>
      ))}
      <span className="text-2xl">
        <Cursor />
      </span>
    </>
  );
};
export default IntroTypewriter;
