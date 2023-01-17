import React, { FC } from "react";
import {
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  MenuItem,
  Stack,
  Avatar,
  Menu,
  Tooltip,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Divider,
  TextField,
} from "@mui/material";
import { createSvgIcon } from "@mui/material/utils";
import AdbIcon from "@mui/icons-material/Adb";
import { StaticImage } from "gatsby-plugin-image";
import { green, grey, blueGrey, blue } from "@mui/material/colors";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WebinarCard from "../components/WebinarCard";
import FrameworkCard, { Types } from "../components/FrameworkCard";
import CommentsCard from "../components/CommentsCard";
import WalloffameCard from "../components/WalloffameCard";
import Appbar from "../components/Appbar";
const CodeTribeIcon = createSvgIcon(
  <svg
    width="685"
    height="152"
    viewBox="0 0 685 152"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40.176 111.728C32.4 111.728 25.488 109.952 19.44 106.4C13.488 102.752 8.736 97.8562 5.184 91.7122C1.728 85.5682 0 78.6082 0 70.8322C0 63.1522 1.728 56.2402 5.184 50.0962C8.64 43.9522 13.392 39.1522 19.44 35.6962C25.488 32.1442 32.4 30.3682 40.176 30.3682C45.456 30.3682 50.4 31.3282 55.008 33.2482C59.616 35.0722 63.6 37.6162 66.96 40.8802C70.416 44.1442 72.96 47.9362 74.592 52.2562L60.336 58.8802C58.704 54.8482 56.064 51.6322 52.416 49.2322C48.864 46.7362 44.784 45.4882 40.176 45.4882C35.76 45.4882 31.776 46.5922 28.224 48.8002C24.768 50.9122 22.032 53.9362 20.016 57.8722C18 61.7122 16.992 66.0802 16.992 70.9762C16.992 75.8722 18 80.2882 20.016 84.2242C22.032 88.0642 24.768 91.0882 28.224 93.2962C31.776 95.5042 35.76 96.6082 40.176 96.6082C44.88 96.6082 48.96 95.4082 52.416 93.0082C55.968 90.5122 58.608 87.2002 60.336 83.0722L74.592 89.8402C73.056 93.9682 70.56 97.7122 67.104 101.072C63.744 104.336 59.76 106.928 55.152 108.848C50.544 110.768 45.552 111.728 40.176 111.728Z"
      fill="white"
    />
    <path d="M128.08 111.728C120.592 111.728 113.728 109.952 107.488 106.4C101.344 102.848 96.4481 98.0002 92.8001 91.8562C89.1521 85.7122 87.3281 78.7522 87.3281 70.9762C87.3281 63.1042 89.1521 56.1442 92.8001 50.0962C96.4481 43.9522 101.344 39.1522 107.488 35.6962C113.632 32.1442 120.496 30.3682 128.08 30.3682C135.76 30.3682 142.624 32.1442 148.672 35.6962C154.816 39.1522 159.664 43.9522 163.216 50.0962C166.864 56.1442 168.688 63.1042 168.688 70.9762C168.688 78.8482 166.864 85.8562 163.216 92.0002C159.568 98.1442 154.672 102.992 148.528 106.544C142.384 110 135.568 111.728 128.08 111.728ZM128.08 96.6082C132.688 96.6082 136.768 95.5042 140.32 93.2962C143.872 91.0882 146.656 88.0642 148.672 84.2242C150.784 80.2882 151.84 75.8722 151.84 70.9762C151.84 66.0802 150.784 61.7122 148.672 57.8722C146.656 54.0322 143.872 51.0082 140.32 48.8002C136.768 46.5922 132.688 45.4882 128.08 45.4882C123.568 45.4882 119.488 46.5922 115.84 48.8002C112.288 51.0082 109.456 54.0322 107.344 57.8722C105.328 61.7122 104.32 66.0802 104.32 70.9762C104.32 75.8722 105.328 80.2882 107.344 84.2242C109.456 88.0642 112.288 91.0882 115.84 93.2962C119.488 95.5042 123.568 96.6082 128.08 96.6082Z" />
    <path d="M220.574 111.728C213.086 111.728 206.366 109.952 200.414 106.4C194.558 102.752 189.902 97.8562 186.446 91.7122C183.086 85.5682 181.406 78.6562 181.406 70.9762C181.406 63.2962 183.134 56.3842 186.59 50.2402C190.046 44.0962 194.702 39.2482 200.558 35.6962C206.414 32.1442 213.038 30.3682 220.43 30.3682C226.67 30.3682 232.19 31.6162 236.99 34.1122C241.79 36.6082 245.582 40.0642 248.366 44.4802L245.918 48.2242V0.992188H262.046V110H246.638V94.1602L248.51 97.1842C245.822 101.888 241.982 105.488 236.99 107.984C231.998 110.48 226.526 111.728 220.574 111.728ZM222.158 96.6082C226.67 96.6082 230.702 95.5042 234.254 93.2962C237.902 91.0882 240.734 88.0642 242.75 84.2242C244.862 80.2882 245.918 75.8722 245.918 70.9762C245.918 66.0802 244.862 61.7122 242.75 57.8722C240.734 54.0322 237.902 51.0082 234.254 48.8002C230.702 46.5922 226.67 45.4882 222.158 45.4882C217.646 45.4882 213.566 46.5922 209.918 48.8002C206.27 51.0082 203.438 54.0322 201.422 57.8722C199.406 61.7122 198.398 66.0802 198.398 70.9762C198.398 75.8722 199.406 80.2882 201.422 84.2242C203.438 88.0642 206.222 91.0882 209.774 93.2962C213.422 95.5042 217.55 96.6082 222.158 96.6082Z" />
    <path d="M317.619 111.728C309.843 111.728 302.931 109.952 296.883 106.4C290.931 102.752 286.275 97.8562 282.915 91.7122C279.555 85.4722 277.875 78.5122 277.875 70.8322C277.875 62.9602 279.555 56.0002 282.915 49.9522C286.371 43.9042 290.979 39.1522 296.739 35.6962C302.499 32.1442 309.027 30.3682 316.323 30.3682C322.179 30.3682 327.411 31.3762 332.019 33.3922C336.627 35.4082 340.515 38.1922 343.683 41.7442C346.851 45.2002 349.251 49.1842 350.883 53.6962C352.611 58.2082 353.475 63.0082 353.475 68.0962C353.475 69.3442 353.427 70.6402 353.331 71.9842C353.235 73.3282 353.043 74.5762 352.755 75.7282H290.691V62.7682H343.539L335.763 68.6722C336.723 63.9682 336.387 59.7922 334.755 56.1442C333.219 52.4002 330.819 49.4722 327.555 47.3602C324.387 45.1522 320.643 44.0482 316.323 44.0482C312.003 44.0482 308.163 45.1522 304.803 47.3602C301.443 49.4722 298.851 52.5442 297.027 56.5762C295.203 60.5122 294.483 65.3122 294.867 70.9762C294.387 76.2562 295.107 80.8642 297.027 84.8002C299.043 88.7362 301.827 91.8082 305.379 94.0162C309.027 96.2242 313.155 97.3282 317.763 97.3282C322.467 97.3282 326.451 96.2722 329.715 94.1602C333.075 92.0482 335.715 89.3122 337.635 85.9522L350.883 92.4322C349.347 96.0802 346.947 99.3922 343.683 102.368C340.515 105.248 336.675 107.552 332.163 109.28C327.747 110.912 322.899 111.728 317.619 111.728Z" />
    <path d="M403.052 110.864C394.892 110.864 388.555 108.56 384.043 103.952C379.531 99.3442 377.276 92.8642 377.276 84.5122V46.7842H363.595V32.0962H365.755C369.403 32.0962 372.235 31.0402 374.251 28.9282C376.267 26.8162 377.276 23.9362 377.276 20.2882V14.2402H393.548V32.0962H411.259V46.7842H393.548V83.7922C393.548 86.4802 393.98 88.7842 394.844 90.7042C395.708 92.5282 397.099 93.9682 399.02 95.0242C400.94 95.9842 403.436 96.4642 406.508 96.4642C407.276 96.4642 408.139 96.4162 409.099 96.3202C410.059 96.2242 410.972 96.1282 411.836 96.0322V110C410.492 110.192 409.003 110.384 407.371 110.576C405.739 110.768 404.3 110.864 403.052 110.864Z" />
    <path d="M427.715 110V32.0962H443.267V47.7922L441.827 45.4882C443.555 40.4002 446.339 36.7522 450.179 34.5442C454.019 32.2402 458.627 31.0882 464.003 31.0882H468.755V45.9202H461.987C456.611 45.9202 452.243 47.6002 448.883 50.9602C445.619 54.2242 443.987 58.9282 443.987 65.0722V110H427.715Z" />
    <path d="M479.887 110V32.0962H496.159V110H479.887ZM479.887 21.4402V2.72018H496.159V21.4402H479.887Z" />
    <path d="M556.8 111.728C550.752 111.728 545.232 110.48 540.24 107.984C535.344 105.488 531.552 101.888 528.864 97.1842L530.736 94.1602V110H515.184V0.992188H531.456V48.2242L528.864 44.4802C531.744 40.0642 535.584 36.6082 540.384 34.1122C545.184 31.6162 550.656 30.3682 556.8 30.3682C564.192 30.3682 570.816 32.1442 576.672 35.6962C582.624 39.2482 587.28 44.0962 590.64 50.2402C594.096 56.3842 595.824 63.2962 595.824 70.9762C595.824 78.6562 594.096 85.5682 590.64 91.7122C587.28 97.8562 582.672 102.752 576.816 106.4C570.96 109.952 564.288 111.728 556.8 111.728ZM555.216 96.6082C559.824 96.6082 563.904 95.5042 567.456 93.2962C571.008 91.0882 573.792 88.0642 575.808 84.2242C577.92 80.2882 578.976 75.8722 578.976 70.9762C578.976 66.0802 577.92 61.7122 575.808 57.8722C573.792 54.0322 571.008 51.0082 567.456 48.8002C563.904 46.5922 559.824 45.4882 555.216 45.4882C550.704 45.4882 546.624 46.5922 542.976 48.8002C539.424 51.0082 536.592 54.0322 534.48 57.8722C532.464 61.7122 531.456 66.0802 531.456 70.9762C531.456 75.8722 532.464 80.2882 534.48 84.2242C536.592 88.0642 539.424 91.0882 542.976 93.2962C546.624 95.5042 550.704 96.6082 555.216 96.6082Z" />
    <path d="M648.228 111.728C640.452 111.728 633.54 109.952 627.492 106.4C621.54 102.752 616.884 97.8562 613.524 91.7122C610.164 85.4722 608.484 78.5122 608.484 70.8322C608.484 62.9602 610.164 56.0002 613.524 49.9522C616.98 43.9042 621.588 39.1522 627.348 35.6962C633.108 32.1442 639.636 30.3682 646.932 30.3682C652.788 30.3682 658.02 31.3762 662.628 33.3922C667.236 35.4082 671.124 38.1922 674.292 41.7442C677.46 45.2002 679.86 49.1842 681.492 53.6962C683.22 58.2082 684.084 63.0082 684.084 68.0962C684.084 69.3442 684.036 70.6402 683.94 71.9842C683.844 73.3282 683.652 74.5762 683.364 75.7282H621.3V62.7682H674.148L666.372 68.6722C667.332 63.9682 666.996 59.7922 665.364 56.1442C663.828 52.4002 661.428 49.4722 658.164 47.3602C654.996 45.1522 651.252 44.0482 646.932 44.0482C642.612 44.0482 638.772 45.1522 635.412 47.3602C632.052 49.4722 629.46 52.5442 627.636 56.5762C625.812 60.5122 625.092 65.3122 625.476 70.9762C624.996 76.2562 625.716 80.8642 627.636 84.8002C629.652 88.7362 632.436 91.8082 635.988 94.0162C639.636 96.2242 643.764 97.3282 648.372 97.3282C653.076 97.3282 657.06 96.2722 660.324 94.1602C663.684 92.0482 666.324 89.3122 668.244 85.9522L681.492 92.4322C679.956 96.0802 677.556 99.3922 674.292 102.368C671.124 105.248 667.284 107.552 662.772 109.28C658.356 110.912 653.508 111.728 648.228 111.728Z" />
    <path d="M391 151.495L399.995 125.42H406.155L415.15 151.495H409.97L408.115 145.895H398.035L396.145 151.495H391ZM399.4 141.695H406.75L402.41 128.71H403.74L399.4 141.695Z" />
    <path d="M448.667 151.915C446.801 151.915 445.074 151.577 443.487 150.9C441.924 150.223 440.547 149.278 439.357 148.065C438.191 146.852 437.281 145.428 436.627 143.795C435.974 142.162 435.647 140.377 435.647 138.44C435.647 136.503 435.962 134.718 436.592 133.085C437.246 131.428 438.156 130.005 439.322 128.815C440.512 127.602 441.901 126.668 443.487 126.015C445.074 125.338 446.801 125 448.667 125C450.534 125 452.202 125.315 453.672 125.945C455.166 126.575 456.426 127.415 457.452 128.465C458.479 129.492 459.214 130.623 459.657 131.86L455.387 133.855C454.897 132.548 454.069 131.475 452.902 130.635C451.736 129.772 450.324 129.34 448.667 129.34C447.034 129.34 445.587 129.725 444.327 130.495C443.091 131.265 442.122 132.327 441.422 133.68C440.746 135.033 440.407 136.62 440.407 138.44C440.407 140.26 440.746 141.858 441.422 143.235C442.122 144.588 443.091 145.65 444.327 146.42C445.587 147.19 447.034 147.575 448.667 147.575C450.324 147.575 451.736 147.155 452.902 146.315C454.069 145.452 454.897 144.367 455.387 143.06L459.657 145.055C459.214 146.292 458.479 147.435 457.452 148.485C456.426 149.512 455.166 150.34 453.672 150.97C452.202 151.6 450.534 151.915 448.667 151.915Z" />
    <path d="M480.812 151.495L489.807 125.42H495.967L504.962 151.495H499.782L497.927 145.895H487.847L485.957 151.495H480.812ZM489.212 141.695H496.562L492.222 128.71H493.552L489.212 141.695Z" />
    <path d="M527.289 151.495V125.42H535.794C538.547 125.42 540.939 125.98 542.969 127.1C545.022 128.197 546.609 129.725 547.729 131.685C548.849 133.622 549.409 135.873 549.409 138.44C549.409 140.983 548.849 143.247 547.729 145.23C546.609 147.19 545.022 148.73 542.969 149.85C540.939 150.947 538.547 151.495 535.794 151.495H527.289ZM532.049 147.295H535.899C537.672 147.295 539.201 146.933 540.484 146.21C541.791 145.463 542.806 144.437 543.529 143.13C544.252 141.8 544.614 140.237 544.614 138.44C544.614 136.62 544.252 135.057 543.529 133.75C542.806 132.443 541.791 131.428 540.484 130.705C539.201 129.982 537.672 129.62 535.899 129.62H532.049V147.295Z" />
    <path d="M572.622 151.495V125.42H589.947V129.62H577.382V136.305H589.247V140.505H577.382V147.295H589.947V151.495H572.622Z" />
    <path d="M612.863 151.495V125.42H617.413L627.178 138.685H625.008L634.563 125.42H639.113V151.495H634.318V130.845L636.173 131.3L626.268 144.495H625.708L616.048 131.3L617.623 130.845V151.495H612.863Z" />
    <path d="M670.178 151.495V139.945L661.393 125.42H666.818L673.538 136.76H671.613L678.298 125.42H683.723L674.973 139.91V151.495H670.178Z" />
  </svg>,
  "Home"
);

const ButtonAppBar = () => {};
const Landing = () => {
  const frameworks = [
    {
      title: "Ionic",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ionic-icon.png",
      description:
        "An open source mobile toolkit for building high quality, cross-platform native and web app experiences. Move faster with a single code base, running everywhere with JavaScript and the Web.",
      bgColor:
        "linear-gradient(120deg, rgba(42,16,233,1) 0%, rgba(186,16,221,1) 100%)",
    },
    {
      title: "Angular",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
      description:
        "Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.",
      bgColor:
        "linear-gradient(120deg, rgba(233,76,16,1) 0%, rgba(221,16,119,1) 100%)",
    },
    {
      title: "ReactJs",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
      bgColor:
        "linear-gradient(120deg, rgba(16,213,233,1) 0%, rgba(16,134,221,1) 100%)",
    },
  ];
  const technologies = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      label: "ReactJS",
      link: "",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
      label: "Angular",
      link: "",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      label: "Github",
      link: "",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1200px-HTML5_Badge.svg.png",
      label: "HTML5",
      link: "",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
      label: "CSS3",
      link: "",
    },
    {
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ionic-icon.png",
      label: "Ionic",
      link: "",
    },
  ];
  return (
    <Box>
      <Appbar />
      {/* landing */}
      <Stack
        sx={{
          marginTop: 10,
          marginBottom: 30,
        }}
      >
        <Stack flex={1} direction={{ sm: "column", md: "row" }}>
          <Stack flex={1}>
            <StaticImage
              layout="constrained"
              src="../assets/login-illustration.png"
              alt="Developer"
            />
          </Stack>
          <Stack spacing={3} padding={5} flex={1} justifyContent={"center"}>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              <Typography fontWeight={"bold"} variant={"h2"}>
                Learn how to build Android & iOS Apps
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <Typography fontWeight={"bold"} variant={"h3"}>
                Learn how to build Android & iOS Apps
              </Typography>
            </Box>
            <Typography>
              We have an amazing team that is willing to train, guide and mentor
              you on your journey.
            </Typography>
            <Button sx={{ alignSelf: "start", paddingX: 3 }}>Login</Button>
          </Stack>
        </Stack>
        <Grid
          container
          flex={1}
          // direction={{ xs: "column", sm: "row" }}
          justifyContent={{ xs: "space-evenly", sm: "flex-end" }}
          spacing={2}
          padding={3}
          alignItems="center"
        >
          {technologies.map((item: TechTypes, i) => {
            return (
              <Grid item>
                <Tooltip title={item.label}>
                  <Stack
                    padding={2}
                    direction={"row"}
                    spacing={2}
                    justifyContent={"end"}
                    alignItems="center"
                  >
                    <img
                      style={{ width: 30, height: 30, objectFit: "contain" }}
                      src={item.icon}
                      alt={item.label}
                    />
                    <Typography>{item.label}</Typography>
                  </Stack>
                </Tooltip>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
      {/* About us */}
      <Container
        sx={{
          marginBottom: 30,
        }}
      >
        <Stack
          spacing={3}
          textAlign={"center"}
          justifyItems={"center"}
          justifyContent={"center"}
        >
          <Box
            margin={"auto"}
            padding={3}
            sx={{
              //   backgroundColor: "red",
              alignSelf: "start",
            }}
          >
            <Typography
              textAlign={"center"}
              display={"flex"}
              gap={1}
              fontWeight={"bold"}
              variant="h4"
            >
              About{" "}
              <Typography textAlign={"center"} variant="h4">
                Us
              </Typography>
            </Typography>
          </Box>

          <Typography>
            CodeTribe Academy Launched on 1 September 2014 as a partnership
            between The Innovation Hub and mLab Southern Africa to increase the
            skills of young ICT enthusiasts through a dedicated programme to of
            practical development of high impact and market relevant solutions.
          </Typography>
          <Typography>
            CodeTribe is a dedicated programme for developing the next
            generation of software developers. While established startups are
            welcome to have members participate in their own time and at own
            expense, they do not qualify for bursaries as full time students.
            Startups and their staff or members are advised to apply for
            incubation and acceleration support through Maxum Business Incubator
            and mLab.
          </Typography>
        </Stack>
      </Container>
      {/* webinar */}
      <Container
        sx={{
          marginBottom: 30,
        }}
      >
        <Stack
          spacing={3}
          textAlign={"center"}
          justifyItems={"center"}
          justifyContent={"center"}
        >
          <Stack marginBottom={5}>
            <Box
              margin={"auto"}
              padding={3}
              sx={{
                //   backgroundColor: "red",
                alignSelf: "start",
              }}
            >
              <Typography
                textAlign={"center"}
                display={"flex"}
                gap={1}
                fontWeight={"bold"}
                variant="h4"
              >
                Our
                <Typography textAlign={"center"} variant="h4">
                  Webinars
                </Typography>
              </Typography>
            </Box>

            <Typography>
              Get new tools, new insight or a fresh way of looking at a
              challenge in a FREE 60-minute mlab webinar.
            </Typography>
          </Stack>

          <Stack
            direction={"row"}
            sx={{
              overflowX: "auto",
              borderRadius: 3,
              padding: 2,
            }}
            spacing={2}
          >
            {Array.from(Array(10).keys()).map((item: number, i: number) => {
              return (
                <WebinarCard
                  creator=""
                  date=""
                  description=""
                  image=""
                  joining={0}
                  onClick={() => {
                    return true;
                  }}
                  title=""
                  key={item}
                />
              );
            })}
          </Stack>
        </Stack>
      </Container>
      {/* frameworks */}
      <Container
        sx={{
          marginBottom: 30,
        }}
      >
        <Stack marginBottom={5}>
          <Box
            margin={"auto"}
            padding={3}
            sx={{
              //   backgroundColor: "red",
              alignSelf: "start",
            }}
          >
            <Typography
              textAlign={"center"}
              display={"flex"}
              // gap={1}
              fontWeight={"bold"}
              variant="h4"
            >
              Frame
              <Typography textAlign={"center"} variant="h4">
                works
              </Typography>
            </Typography>
          </Box>

          <Typography textAlign={"center"}>
            Get new tools, new insight or a fresh way of looking at a challenge
            in a FREE 60-minute mlab webinar.
          </Typography>
        </Stack>
        <Stack
          justifyContent={"space-evenly"}
          direction={{ xs: "column", md: "row" }}
          spacing={1}
        >
          {frameworks.map((item: Types, i: number) => {
            return (
              <FrameworkCard
                key={i}
                title={item.title}
                icon={item.icon}
                description={item.description}
                bgColor={item.bgColor}
              />
            );
          })}
        </Stack>
      </Container>
      {/* join our tribe */}
      <Container
        sx={{
          marginBottom: 30,
        }}
      >
        <Stack marginBottom={5}>
          <Box
            margin={"auto"}
            padding={3}
            sx={{
              alignSelf: "start",
            }}
          >
            <Typography
              textAlign={"center"}
              display={"flex"}
              gap={1}
              fontWeight={"bold"}
              variant="h4"
            >
              Join our
              <Typography textAlign={"center"} variant="h4">
                Tribe
              </Typography>
            </Typography>
          </Box>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            {Array.from(Array(3).keys()).map((item: number) => {
              return (
                <CommentsCard
                  key={item}
                  name=""
                  picture=""
                  profession=""
                  text=""
                />
              );
            })}
          </Stack>
        </Stack>
      </Container>

      {/* wall of fame */}
      <Container
        sx={{
          marginBottom: 30,
        }}
      >
        <Stack marginBottom={5}>
          <Box
            margin={"auto"}
            padding={3}
            sx={{
              //   backgroundColor: "red",
              alignSelf: "start",
            }}
          >
            <Typography
              textAlign={"center"}
              display={"flex"}
              gap={1}
              fontWeight={"bold"}
              variant="h4"
            >
              Wall of
              <Typography textAlign={"center"} variant="h4">
                Fame
              </Typography>
            </Typography>
          </Box>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
          >
            {Array.from(Array(3).keys()).map((item: number) => {
              return (
                <WalloffameCard
                  image=""
                  name=""
                  position=""
                  skills={[{ icon: "" }]}
                  socials={[{ link: "", socialName: "" }]}
                />
              );
            })}
          </Stack>
        </Stack>
      </Container>
      {/* message */}
      <Container
        sx={{
          marginBottom: 30,
        }}
      >
        <Stack marginBottom={5}>
          <Stack
            margin={"auto"}
            padding={3}
            spacing={3}
            sx={{
              //   backgroundColor: "red",
              alignSelf: "start",
            }}
          >
            <Typography variant="h2" textAlign={"center"}>
              👋
            </Typography>
            <Stack>
              <Typography
                textAlign={"center"}
                gap={1}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                variant="h5"
              >
                help us grow the codetribe community
              </Typography>
              <Typography
                color={green[500]}
                textAlign={"center"}
                textTransform={"uppercase"}
                fontWeight={"bold"}
                variant="h5"
              >
                talk about codetribe
              </Typography>
            </Stack>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              direction={"row"}
              spacing={2}
            >
              <Box>
                <Chip
                  sx={{
                    alignSelf: "start",
                    paddingX: 2,
                  }}
                  // color="secondary"
                  icon={<FacebookIcon />}
                  label="Share on Facebook"
                />
              </Box>
              <Box>
                <Chip
                  sx={{
                    alignSelf: "start",
                    paddingX: 2,
                  }}
                  // color="secondary"
                  icon={<TwitterIcon />}
                  label="Share on Twitter"
                />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      {/* contact us */}
      <Container
        sx={{
          marginBottom: 30,
        }}
      >
        <Stack marginBottom={5}>
          <Box
            margin={"auto"}
            padding={3}
            sx={{
              //   backgroundColor: "red",
              alignSelf: "start",
            }}
          >
            <Typography
              textAlign={"center"}
              display={"flex"}
              gap={1}
              fontWeight={"bold"}
              variant="h4"
            >
              Contact
              <Typography textAlign={"center"} variant="h4">
                Us
              </Typography>
            </Typography>
          </Box>
        </Stack>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
          <Stack flex={1} spacing={3}>
            <Typography textAlign={"center"} variant="h6">
              Send us a message
            </Typography>

            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Subject" variant="outlined" />
            <TextField
              multiline
              maxRows={8}
              rows={4}
              id="outlined-basic"
              label="Message"
              variant="outlined"
            />
            <Button>Send 💖</Button>
          </Stack>
          <Stack flex={1}>
            <Box
              sx={{
                width: "100%",
                height: { xs: 400, md: "100%" },
                background: "tomato",
                borderRadius: 5,
              }}
            ></Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Landing;
export interface TechTypes {
  icon: string;
  label: string;
  link: string;
}
