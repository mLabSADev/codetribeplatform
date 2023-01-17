import { Card, CardContent, Typography, Stack, Box } from "@mui/material";
import Divider from "@mui/material/Divider/Divider";
import { StaticImage } from "gatsby-plugin-image";

import React, { FC } from "react";

const FrameworkCard: FC<Types> = ({ title, icon, description, bgColor }) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        background: bgColor,
        color: "white",
      }}
    >
      <CardContent>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Box
            sx={{
              width: 50,
              height: 50,
              //   background: "tomato",
            }}
          >
            <img
              style={{ objectFit: "contain" }}
              width={"100%"}
              height={"100%"}
              loading="lazy"
              src={icon}
              alt={title}
            />
          </Box>
          <Typography variant="h5" gutterBottom fontWeight={"bold"}>
            {title}
          </Typography>
        </Stack>
        <Divider
          sx={{
            my: 2,
            // color: "white",
            background: bgColor,
          }}
        />
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default FrameworkCard;
export interface Types {
  title: string;
  icon: string;
  description: string;
  bgColor: string;
}
