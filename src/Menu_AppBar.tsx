import React from "react";
import { Menu, MenuItem, IconButton, Typography, Tab } from "@mui/material";
import { useNavigate } from "react-router";

const langOptions = ["en-US", "pt-Pt"];

export function LanguageMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(() => {
    const stored = localStorage.getItem("language");
    return stored ? langOptions.indexOf(stored) : 0;
  });

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    localStorage.setItem("language", langOptions[index]);
    setAnchorEl(null);

    window.location.reload();
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2, color: "white" }}
      >
        <Typography variant="body2">{langOptions[selectedIndex]}</Typography>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "lock-button",
            role: "listbox",
          },
        }}
      >
        {langOptions.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={() => handleMenuItemClick(index)}
            aria-label="Language"
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

type TabWithMenuProps = {
  resourceOptions: any[];
  name: string;
  value: string;
};

export const TabWithMenu = ({ name, value, resourceOptions }: TabWithMenuProps) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(() => {
    const stored = localStorage.getItem("resource");
    return stored ? resourceOptions.indexOf(stored) : 0;
  });

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (value: string, index: number) => {
    setSelectedIndex(index);
    localStorage.setItem("resource", resourceOptions[index]);
    setAnchorEl(null);
    navigate(value);
    window.location.reload();
  };

  return (
    <>
      <Tab
        label={name}
        onClick={handleClick}
        value={value}
      />
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {resourceOptions.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={() => handleMenuItemClick(value, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

