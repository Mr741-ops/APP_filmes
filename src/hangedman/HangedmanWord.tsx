import { Box } from "@mui/material";

type hangedmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string | undefined;
  reveal?: boolean
};

export function HangedmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: hangedmanWordProps) {
  return (
    <Box
      sx={{
        maxWidth: "1000px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: " .25em",
        color: "secondary.contrast",
        fontSize: "3rem",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      {wordToGuess?.split("").map((letter, index) => {
        const isLetter = /[a-zA-Z]/.test(letter);
        const upperLetter = letter.toUpperCase();
        const shouldShow = !isLetter || guessedLetters.includes(upperLetter);

        return (
          <Box
            key={index}
            sx={{ borderBottom: isLetter ? ".1em solid" : "none", minWidth:"34px", textAlign:"center"}}
          >
            <Box sx={{ visibility: shouldShow || reveal ? "visible" : "hidden", color: !guessedLetters .includes(letter) && reveal ? "red" : "secondary.contrast"}}>
              {letter}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default HangedmanWord;
