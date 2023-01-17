import React, { FC } from "react";
import {
  Avatar,
  Box,
  Divider,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";

import FacebookIcon from "@mui/icons-material/Facebook";
const WalloffameCard: FC<WallofFameTypes> = () => {
  return (
    <Stack
      sx={{
        borderRadius: 5,
        overflow: "hidden",
        height: 600,
        width: 380,
        // backgroundColor: "tomato",
      }}
    >
      <Stack flex={1} sx={{ position: "relative" }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
          flex={1}
        >
          <img
            // width={"100%"}
            // layout="fullWidth"
            loading="lazy"
            height={"100%"}
            src="https://media.istockphoto.com/id/1354524757/photo/casual-african-american-woman-smiling-in-purple-studio-isolated-background.jpg?s=170667a&w=0&k=20&c=OcXcn_MnMFCiX4Zms00WdJDJFQxYIJ4IWtWiqwrMwLs="
            alt="person bg"
          />
        </Box>
        <Stack
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            padding: 2,
          }}
          spacing={3}
        >
          <Tooltip placement="right" title="GitHub">
            <GitHubIcon />
          </Tooltip>

          <Tooltip placement="right" title="WhatsApp">
            <WhatsAppIcon />
          </Tooltip>

          <Tooltip placement="right" title="LinkedIn">
            <LinkedInIcon />
          </Tooltip>

          <Tooltip placement="right" title="Facebook">
            <FacebookIcon />
          </Tooltip>
        </Stack>
        <Stack
          sx={{
            zIndex: 2,
            padding: 4,
          }}
          // spacing={1}
        >
          <Typography variant="h4" fontWeight={"bold"}>
            Jane Doe
          </Typography>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Divider sx={{ width: 20 }} />
            <Typography>UI/UX designer</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        // height={90}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        padding={2}
        sx={{
          backgroundColor: blueGrey[900],
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
          sx={{ width: 40, height: 40 }}
        />
        <Avatar
          alt="Remy Sharp"
          src="https://ionicacademy.com/wp-content/uploads/2020/02/ionic-Logo.svg"
          sx={{ width: 40, height: 40 }}
        />
        <Avatar
          alt="Remy Sharp"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          sx={{ width: 40, height: 40 }}
        />
        <Avatar
          alt="Remy Sharp"
          src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
          sx={{ width: 40, height: 40 }}
        />
        <Avatar
          alt="Remy Sharp"
          src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
          sx={{ width: 40, height: 40 }}
        />
      </Stack>
    </Stack>
  );
};

export default WalloffameCard;
export interface WallofFameTypes {
  image: string;
  name: string;
  position: string;
  socials: [
    {
      link: string;
      socialName: string;
    }
  ];
  skills: [
    {
      icon: string;
    }
  ];
}
