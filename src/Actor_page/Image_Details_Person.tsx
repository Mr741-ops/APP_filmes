import { Box, Typography } from "@mui/material";
import * as Poster from "../Actors_Gallery/actor_image";
import { Gender } from "../Utils/gender";
import { useTranslation } from "react-i18next";

type Person = {
  name: string;
  gender: number;
  profile_path: string;
  also_known_as: string[];
  birthday?: string | null;
  known_for_department?: string | null;
  place_of_birth?: string | null;
};

export const Image = ({ person }: { person: Person }) => {
  const { t } = useTranslation();

  const gender = Gender(person.gender, t);

  return (
    <Box
      className="Image-Box"
      sx={{
        height: "100%",
        width: "100%",
        bgcolor: "background.dark",
        color: "secondary.main",
        p: 2,
      }}
    >
      <Typography variant="h3" sx={{ mb: 2, textAlign: "center" }}>
        {person.name}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        {Poster.personImage(person.profile_path)}
      </Box>
      <Box
        className="Info"
        sx={{
          color: "secondary.main",
        }}
      >
        <Typography sx={{ mt: 6 }}>
          <strong>{t("peopleDetails.AlsoKnownAs")}</strong>:{" "}
          {person.also_known_as?.length
            ? person.also_known_as.join(", \n")
            : "N/A"}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>{t("peopleDetails.Birthday")}</strong>:{" "}
          {person.birthday ?? "N/A"}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>{t("peopleDetails.Gender")}</strong>: {gender}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>{t("peopleDetails.KnownForDepartment")}</strong>:{" "}
          {person.known_for_department ?? "N/A"}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <strong>{t("peopleDetails.PlaceOfBirth")}</strong>:{" "}
          {person.place_of_birth ?? "N/A"}
        </Typography>
      </Box>
    </Box>
  );
};

export default Image;
