import React, { FC } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
const CommentsCard: FC<Comments> = ({ picture, text, name, profession }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack
          sx={{
            padding: 2,
            borderWidth: 1,
            borderColor: "grey",
          }}
          spacing={3}
        >
          <Stack direction={"row"} spacing={2}>
            <Stack
              alignItems={"center"}
              // padding={2}
              overflow={"hidden"}
            >
              <Box flex={1}>
                <Divider orientation="vertical" />
              </Box>

              <IconButton disabled>
                <LanguageTwoToneIcon />
              </IconButton>
              <Box flex={1}>
                <Divider orientation="vertical" />
              </Box>
            </Stack>
            <Stack flex={1}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent accumsan commodo fermentum. Fusce ultricies eros non
                quam venenatis, nec pulvinar augue efficitur. Phasellus lacus
                augue, tincidunt et lacus non, consequat congue nunc.
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Avatar src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXN8ZW58MHx8MHx8&w=1000&q=80" />
            <Stack>
              <Typography variant="subtitle1" fontWeight={"bold"}>
                Jane Doe
              </Typography>
              <Typography variant="caption">Front-end Developer</Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CommentsCard;
export interface Comments {
  picture: string;
  text: string;
  name: string;
  profession: string;
}
