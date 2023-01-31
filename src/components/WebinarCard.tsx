import React, { FC } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";

const WebinarCard: FC<WebinarTypes> = () => {
  return (
    <Card sx={{ maxWidth: 340, minWidth: 340 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="190"
        image="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
      />
      <CardContent>
        <Typography
          textAlign={"start"}
          gutterBottom
          fontWeight={"bolder"}
          variant="h5"
        >
          Webinar - COBIT’s Value for Small and Medium Enterprises
        </Typography>
        <Stack
          direction={"row"}
          sx={{
            marginBottom: 3,
          }}
        >
          <Stack
            color={"gray"}
            direction={"row"}
            spacing={2}
            flex={1}
            alignItems={"center"}
          >
            <Typography variant="subtitle1" fontWeight={"700"}>
              by Unathi
            </Typography>
            <Typography variant="caption">Jun 15</Typography>
          </Stack>
          <Chip
            sx={{
              paddingX: 1,
            }}
            variant="outlined"
            icon={<Groups2RoundedIcon />}
            label="14k joining"
          />
        </Stack>
        <Typography
          textAlign={"start"}
          variant="body2"
          color="text.secondary"
          textOverflow={"ellipsis"}
          // maxHeight={20}
        >
          For small and medium enterprises (SMEs), information & technology
          (I&T) has become crucial for support, sustainability and growth.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" fullWidth>
          Login to watch
        </Button>
        {/* <Button size="large">Learn More</Button> */}
      </CardActions>
    </Card>
  );
};

export default WebinarCard;

export interface WebinarTypes {
  image: string;
  title: string;
  creator: string;
  joining: number;
  description: string;
  date: string;
  onClick(): any;
}
