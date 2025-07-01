import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { KEYS } from "./Keys";
import clsx from "clsx";

type KeyboardProps = {
  disabled: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <Grid>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key.toUpperCase());
        const isInactive = inactiveLetters.includes(key.toUpperCase());

        return (
          <Button
            className={clsx({
              active: isActive,
              inactive: isInactive,
            })}
            onClick={() => addGuessedLetter(key)}
            sx={{
              border: 1,
              aspectRatio: 1 / 1,
              fontSize: "2rem",
              color: "secondary.contrast",
              bgcolor: "secondary.main",
              p: ".5rem",
              fontWeight: "bold",
              cursor: "pointer",
              ":hover:not(:disabled), :focus:not(:disabled)": {
                bgcolor: "primary.main",
              },
              "&.active": {
                bgcolor: "primary.main",
              },
              "&.inactive": {
                opacity: 0.3,
              },
            }}
            key={key}
            disabled={isInactive || isActive || disabled}
          >
            {key}
          </Button>
        );
      })}
    </Grid>
  );
}
export default Keyboard;
