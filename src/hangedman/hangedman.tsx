import { useCallback, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useGetList } from "react-admin";
import { HangedmanDrawing } from "./HangedmanDrawing";
import { HangedmanWord } from "./HangedmanWord";
import { Keyboard } from "./Keyboard";
import { useTranslation } from "react-i18next";

type Title = {
  id: number;
  title: string;
};

export const HangedMan = () => {
  const { t } = useTranslation()
  const [wordToGuess, setWordToGuess] = useState<Title | null>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const random = Math.floor(Math.random() * 500) + 1;
    setPage(random);
  }, []);

  const { data } = useGetList<Title>(`movie/popular`, {
    pagination: {
      page: page,
      perPage: 20,
    },
  });

  useEffect(() => {
    if (data) {
      const random = data[Math.floor(Math.random() * data.length)];
      setWordToGuess(random);
    }
  }, [data]);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess?.title.toUpperCase().includes(letter)
  );
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess?.title.split("").every((letter) => {
    const isLetter = /[A-Z]/.test(letter.toUpperCase());
    if (!isLetter) return true;

    return guessedLetters.includes(letter.toUpperCase());
  });

  const addGuessedLetter = useCallback(
    (letter: string) => {
      const upperLetter = letter.toUpperCase();
      if (guessedLetters.includes(upperLetter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, upperLetter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  const handleClick = () => {
    window.location.reload()
  }

  return (
    <Box
      sx={{
        maxWidth: "1000px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          mt: 2,
          fontSize: "1.5rem",
          fontWeight: "bold",
          display: "flex",
          gap: "4rem",
          alignItems: "center",
          mb:3,
        }}
      >
        {isWinner && t("hangedmanYouWin")}
        {isLoser && t("hangedman.YouLose")}
        <Button
          sx={{
            bgcolor: "primary.main",
            color: "secondary.main",
            height: "80%",
          }}
          onClick={handleClick}
        >
          {t("hangedman.TryAgain")}
        </Button>
      </Box>
      <HangedmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangedmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess?.title.toUpperCase()}
      />
      <Keyboard
        disabled={isWinner || isLoser}
        activeLetters={guessedLetters.filter((letter) =>
          wordToGuess?.title.toUpperCase().includes(letter.toUpperCase())
        )}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </Box>
  );
};

export default HangedMan;
