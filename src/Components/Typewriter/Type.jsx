import React, { useState, useEffect } from "react";

const TypewriterEffect = () => {
  const words = ["Welcome to my portfolio", "I am a website developer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const type = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        setTypedText(currentWord.substring(0, currentCharacterIndex - 1));
        setCurrentCharacterIndex((prev) => prev - 1);

        if (currentCharacterIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setTypedText(currentWord.substring(0, currentCharacterIndex + 1));
        setCurrentCharacterIndex((prev) => prev + 1);

        if (currentCharacterIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(type, 100);
    return () => clearTimeout(timer);
  }, [currentWordIndex, currentCharacterIndex, isDeleting]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 id="typewriter" className="text-4xl font-bold">{typedText}</h1>
    </div>
  );
};

export default TypewriterEffect;
