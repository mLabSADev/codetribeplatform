import {
  Box,
  Container,
  Divider,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { theme } from "../../components/Theme";
import "./students.scss";
import { Image } from "antd";
import { StaticImage } from "gatsby-plugin-image";
const users = [
  {
    firstName: "Gloria Goratamang",
    lastName: "Pucoe",
    email: "9806190242083",
    phone: "gloriapucoe@gmail.com",
    group: "Kimberley",
    year: 2023,
    key: "2023-fNj6iSFCuX",
  },
  {
    firstName: "Jocelyn Jasmin",
    lastName: "Atwell",
    email: "9908250022089",
    phone: "jjatwell99@gmail.com",
    group: "Kimberley",
    year: 2023,
    key: "2023-MrvCA9iaGH",
  },
  {
    firstName: "Ayanda Jones",
    lastName: "Sontlaba",
    email: "9185332088",
    phone: "ayandasontlaba6@gmail.com",
    group: "Kimberley",
    year: 2023,
    key: "2023-sA6KfVMSVw",
  },
  {
    firstName: "Neo",
    lastName: "Seekoei",
    email: "210035050082",
    phone: "seekoeineo16@gmail.com",
    group: "Kimberley",
    year: 2023,
    key: "2023-z6NFu8d18m",
  },
  {
    firstName: "Gregory Letlhogonolo",
    lastName: "Kgosiejang",
    email: "9402145339080",
    phone: "gregorykgosiejang0@gmail.com",
    group: "Kimberley",
    year: 2023,
    key: "2023-AmQQByO11x",
  },
  {
    firstName: "Ashwin Oscar",
    lastName: "goolamhossen",
    email: "308295261082",
    phone: "ashwingoolamhossen2@gmail.com",
    group: "Kimberley",
    year: 2023,
    key: "2023-G6XdJkPEhE",
  },
  {
    firstName: "Tshenolo Joseya",
    lastName: "Khumalo",
    email: "8708215406083",
    phone: "tshenkhumalo21@gmail.com",
    group: "Kimberley",
    year: 2023,
    key: "2023-YWdmMQhaQS",
  },
  {
    firstName: "Fezibongo",
    lastName: "Rubushe",
    email: "9302145016086",
    phone: "Rubushefezibongo@gmail.com",
    group: "Kimberley",
    year: 2023,
    key: "2023-Rrnys66ZRN",
  },
  {
    firstName: "Letty Moila ",
    lastName: " Moila ",
    email: "980124 0078 081",
    phone: "moilankibelo@gmail.com",
    group: "Limpopo",
    year: 2023,
    key: "2023-FJc9f4rTym",
  },
  {
    firstName: "Tadima Vincent",
    lastName: " Monama",
    email: "970815 5888 083",
    phone: "keletsovincent92@gmail.com",
    group: "Limpopo",
    year: 2023,
    key: "2023-PCHrWLnEWN",
  },
  {
    firstName: "Khomotso Jane",
    lastName: " Sekhaolelo",
    email: "9909160145085",
    phone: "khomotsojane27@gmail.com",
    group: "Limpopo",
    year: 2023,
    key: "2023-6MpB0gbi73",
  },
  {
    firstName: "Mpho  ",
    lastName: "Chuene",
    email: "0203285923082",
    phone: "mphochuene42@gmail.com",
    group: "Limpopo",
    year: 2023,
    key: "2023-eYx1QFXEJf",
  },
  {
    firstName: "Bokamoso Future",
    lastName: " Kgaphola",
    email: "9506225654083",
    phone: "futurekgaphola@gmail.com",
    group: "Limpopo",
    year: 2023,
    key: "2023-LNiFPNnJDY",
  },
  {
    firstName: "Tlangelani Felender ",
    lastName: "Hlungwani",
    email: "880623 5531 086",
    phone: "felender7@gmail.com",
    group: "Limpopo",
    year: 2023,
    key: "2023-lJ9GIrgc4E",
  },
  {
    firstName: "Mulalo Cecil",
    lastName: "Tshigoba",
    email: "9603225585084",
    phone: "tshigobamulalo@gmail.com",
    group: "Limpopo",
    year: 2023,
    key: "2023-yoJTqcP8KE",
  },
  {
    firstName: "Moloko Chris ",
    lastName: "Poopedi",
    email: "970708 5382 084",
    phone: "molokochrisp742@gmail.com",
    group: "Limpopo",
    year: 2023,
    key: "2023-ENJc3jXS1e",
  },
  {
    firstName: "Ramaesela Rabecca",
    lastName: "Phoshoko",
    email: "0003100718083",
    phone: "phoshokorr@gmail.com",
    group: "Limpopo",
    year: 2023,
    key: "2023-OaGKHIfNId",
  },
  {
    firstName: "Seja Abrina ",
    lastName: "Dolo",
    email: "",
    phone: "dolosejaabrina@gmail.com",
    group: "Limpopo",
    year: 2023,
    key: "2023-QDjBo8hJ8C",
  },
  {
    firstName: "Elesta",
    lastName: "Mello",
    email: "0303245182082",
    phone: "elestamello1@gmail.com",
    group: "Limpopo",
    year: 2023,
    key: "2023-XBkPsca3vA",
  },
  {
    firstName: "Elton Selathole ",
    lastName: "Maruthulle",
    email: "0312036524089",
    phone: "202228124@keyaka.ul.ac.za",
    group: "Limpopo",
    year: 2023,
    key: "2023-B2NXIyqkjO",
  },
  {
    firstName: "Malapolosa Innocent ",
    lastName: "Seaba",
    email: "0002035671086",
    phone: "seabalapo@gmail.com",
    group: "Limpopo",
    year: 2023,
    key: "2023-8my1S00dL0",
  },
  {
    firstName: "Nicole Pheladi ",
    lastName: "Rachidi",
    email: "0112190828080",
    phone: "rachidinicole@gmail.com",
    group: "Limpopo",
    year: 2023,
    key: "2023-Z2rWYCURaU",
  },
  {
    firstName: "Morongwa Abigail ",
    lastName: "Mogotlane",
    email: "0104020556080",
    phone: "morongoaabigail204@gmail.com",
    group: "Limpopo",
    year: 2023,
    key: "2023-W3eODU6FxK",
  },
  {
    firstName: "Ntsako ",
    lastName: "Shiluvane",
    email: "9107165817085",
    phone: "ntsakoshil@gmail.com",
    group: "Limpopo",
    year: 2023,
    key: "2023-At6Ojzm7QR",
  },
  {
    firstName: "Odirile ",
    lastName: "Kekana",
    email: "9709170362088",
    phone: "kekanaodirile@gmail.com",
    group: "Soweto",
    year: 2023,
    key: "2023-7T8NnfrOYK",
  },
  {
    firstName: "Mahlatse",
    lastName: "Serathi",
    email: "9502060336084",
    phone: "serathikm@gmail.com",
    group: "Soweto",
    year: 2023,
    key: "2023-jQ0tqtKv9y",
  },
  {
    firstName: "Mbali",
    lastName: "Khumalo",
    email: "9712030742085",
    phone: "mbalikhumalo408@gmail.com",
    group: "Soweto",
    year: 2023,
    key: "2023-6bZEPuPeJl",
  },
  {
    firstName: "Letlhogonolo",
    lastName: "Moroke",
    email: "9911295263080",
    phone: "letlhogonolo.moroke8@gmail.com",
    group: "Soweto",
    year: 2023,
    key: "2023-q56g8YYWUU",
  },
  {
    firstName: "Malwandla Shaun ",
    lastName: "Hlungwani",
    email: "9803266071081",
    phone: "hlungwanimalwandlashaun@gmail.com",
    group: "Soweto",
    year: 2023,
    key: "2023-bnx8TDHRh5",
  },
  {
    firstName: "Neo ",
    lastName: "Ramoroka",
    email: "9002100218087",
    phone: "ramoroka.neo@gmail.com",
    group: "Soweto",
    year: 2023,
    key: "2023-uglH4uQUc6",
  },
  {
    firstName: "Ziggy Dzunisani",
    lastName: "Nyathi",
    email: "9112165813084",
    phone: "ziggynyathi091@gmail.com",
    group: "Soweto",
    year: 2023,
    key: "2023-AmbWuIvQIm",
  },
  {
    firstName: "Dlozi Lloyd",
    lastName: "Mthethwa",
    email: "9012095342081",
    phone: "dlozi.mthethwa@gmail.com",
    group: "Soweto",
    year: 2023,
    key: "2023-1c0kUo6fiU",
  },
  {
    firstName: "Promise Tshegofatso",
    lastName: "Magoga",
    email: "0203101139087",
    phone: "tshegofatsopromise362@gmail.com",
    group: "TIH",
    year: 2023,
    key: "2023-mBjxsiVEhj",
  },
  {
    firstName: "Nicholas Doctor",
    lastName: "Rabalao",
    email: "9310205467081",
    phone: "rabalaond@gmail.com",
    group: "TIH",
    year: 2023,
    key: "2023-jFp7FpNvng",
  },
  {
    firstName: "Sandile Joseph",
    lastName: "Mabilisa",
    email: "9301225867087",
    phone: "mabilisasandile@gmail.com",
    group: "TIH",
    year: 2023,
    key: "2023-95gWZpa3iG",
  },
  {
    firstName: "Loy Shandukani",
    lastName: "Netshiozwi",
    email: "9712025684086",
    phone: "netshiozwiloy@gmail.com",
    group: "TIH",
    year: 2023,
    key: "2023-Q7s5qP7nq9",
  },
  {
    firstName: "Siyabonga Makhosini",
    lastName: "Nzima",
    email: "9905055466081",
    phone: "makhosiya5@gmail.com",
    group: "TIH",
    year: 2023,
    key: "2023-Ke6diZ5yZr",
  },
  {
    firstName: "Vusumuzi Tetelo Ashley",
    lastName: "Tswai",
    email: "0008295952082",
    phone: "Vusumuzitswai@gmail.com",
    group: "TIH",
    year: 2023,
    key: "2023-avevVOyLv0",
  },
  {
    firstName: "Mokone Simon",
    lastName: "Lephoto",
    email: "8902016180084",
    phone: "simonlephotojr@gmail.com",
    group: "TIH",
    year: 2023,
    key: "2023-4ytMwdEChM",
  },
  {
    firstName: "Masana Pamcy",
    lastName: "Hlungwani",
    email: "9908210510083",
    phone: "hlungwanimasana15@gmail.com",
    group: "TIH",
    year: 2023,
    key: "2023-U9nb2MgbWi",
  },
  {
    firstName: "Louisa Kgomotso ",
    lastName: "Mdagane",
    email: "9009170582086",
    phone: "kgomotsolouisaseema@gmail.com",
    group: "TIH",
    year: 2023,
    key: "2023-qLKlW8eyjz",
  },
  {
    firstName: "Keabatswe",
    lastName: "Mabeba",
    email: "0008035593089",
    phone: "keabetswemabeba@gmail.com",
    group: "TIH",
    year: 2023,
    key: "2023-5Pdlc9ZeZb",
  },
  {
    firstName: "Serge ",
    lastName: "Mthombeni",
    email: "9509045471084",
    phone: "iammthombeni@gmail.com",
    group: "Tembisa",
    year: 2023,
    key: "2023-eq7UiRQxh1",
  },
  {
    firstName: "Shitlhangu Clarence ",
    lastName: "Sithole",
    email: "9010375313088",
    phone: "sitholeclarence9@gmail.com",
    group: "Tembisa",
    year: 2023,
    key: "2023-41awDjrrj4",
  },
  {
    firstName: "Musiiwa Lucky ",
    lastName: "Hlongwane",
    email: "9004055919081",
    phone: "lhlongwane81@gmail.com",
    group: "Tembisa",
    year: 2023,
    key: "2023-8dzBiu4ERw",
  },
  {
    firstName: "Temosho",
    lastName: "Shaku",
    email: "9601155652080",
    phone: "temoshomaduane@gmail.com",
    group: "Tembisa",
    year: 2023,
    key: "2023-fko5T1cP1V",
  },
  {
    firstName: "Johannes Mokibelo",
    lastName: "Mante",
    email: "9711155476081",
    phone: "mokibelomante@gmail.com",
    group: "Tembisa",
    year: 2023,
    key: "2023-M5bMYOCeC9",
  },
  {
    firstName: "Sophakama Eric",
    lastName: "Buso",
    email: "8509025560089",
    phone: "60679360@mylife.unisa.ac.za",
    group: "Tembisa",
    year: 2023,
    key: "2023-RfMBAxEtVD",
  },
  {
    firstName: "Lucky",
    lastName: "Cungwa",
    email: "9608105794086",
    phone: "cungwalucky@gmail.com",
    group: "Tembisa",
    year: 2023,
    key: "2023-uAd6Y7Nwhx",
  },
  {
    firstName: "Amukelani",
    lastName: "Nyambi",
    email: "9812060873089",
    phone: "nyambia13@gmail.com",
    group: "Tembisa",
    year: 2023,
    key: "2023-gihCFHnM7z",
  },
  {
    firstName: "Bongani Maxwell",
    lastName: "Sithole",
    email: "9806095874088",
    phone: "bmsithole1998@gmail.com",
    group: "Tembisa",
    year: 2023,
    key: "2023-59H1EbPvTt",
  },
];

const Student = ({ params }: any) => {
  // const [students, setStudents] = useState<{
  //     firstName: string
  //     lastName: string
  //     email: string
  //     phone: string
  //     group: string
  //     year: string
  //     key: string
  // }>()

  const [students, setStudents] = useState<any>();
  const id = params["id"];

  useEffect(() => {
    const keyMappedStudents: any = {};
    users.forEach((user) => {
      keyMappedStudents[user.key] = user;
    });
    setStudents(keyMappedStudents);
  }, []);

  return (
    <Box
      flex={1}
      sx={{
        flex: 1,
        height: "100vh",
        overflowY: "auto",
        // background: "black",
      }}
    >
      {students && (
        <ThemeProvider theme={theme}>
          <Stack
            height={"100vh"}
            sx={{
              background:
                "url(https://images.unsplash.com/photo-1514621166532-aa7eb1a3a2f4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
            flex={1}
          ></Stack>
          <Stack
            sx={{
              backdropFilter: "blur(35px)",
              background: "rgba(255,255,255,0.8)",
            }}
            position={"absolute"}
            zIndex={999}
            top={0}
            left={0}
            right={0}
            bottom={0}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: { xs: 150, sm: 300, md: 400, lg: 500 },
              }}
            >
              <StaticImage
                style={{ height: "100%" }}
                objectFit="contain"
                alt=""
                src="../../assets/deco.png"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: { xs: 240, sm: 300, md: 400, lg: 400 },
              }}
            >
              <StaticImage
                style={{ transform: "rotate(180deg)", height: "100%" }}
                objectFit="contain"
                alt=""
                src="../../assets/deco.png"
              />
            </Box>
            <Container>
              <Stack
                flex={1}
                height={"100vh"}
                sx={{ overflowY: "auto" }}
                alignItems={"center"}
              >
                <Stack flex={1}></Stack>
                <Stack textAlign={"center"}>
                  <Typography variant="h2">Certificate</Typography>
                  <Stack>
                    <Typography
                      variant="body2"
                      textTransform={"uppercase"}
                      letterSpacing={5}
                    >
                      of Participation
                    </Typography>
                  </Stack>
                  <Stack p={4} gap={2}>
                    <Typography variant="body2">
                      This is to certify that
                    </Typography>
                    <Stack
                      flex={1}
                      alignItems={"center"}
                      direction={"row"}
                      gap={2}
                    >
                      <Divider sx={{ flex: 1 }} />
                      <Typography variant="h5">
                        {students[id].firstName} {students[id].lastName}
                      </Typography>
                      <Divider sx={{ flex: 1 }} />
                    </Stack>

                    <Typography variant="body2">
                      has successfully participated in the
                    </Typography>
                    <Stack height={70} py={2}>
                      <StaticImage
                        objectFit="contain"
                        src={"../../assets/codetribe.png"}
                        alt=""
                      />
                      <Typography variant="overline">Program</Typography>
                    </Stack>
                    <Typography>
                      This program, conducted by mLab, is aimed at nurturing and
                      developing digital skills in programming. Throughout the
                      duration of the CodeTribe Program,{" "}
                      {students[id].firstName} {students[id].lastName}{" "}
                      demonstrated dedication, passion, and a commendable level
                      of proficiency in various programming frameworks,
                      including ReactJs, Firebase, and more.
                    </Typography>
                    <Typography variant="body2">
                      We hereby acknowledge {students[id].firstName}{" "}
                      {students[id].lastName}'s commitment to learning and
                      actively engaging in the program's activities,
                      contributing to a vibrant and collaborative learning
                      environment.
                    </Typography>
                    <Stack
                      flex={1}
                      direction={{ xs: "column", sm: "column", md: "row" }}
                    >
                      <Stack flex={1}></Stack>
                      <Stack flex={1}>
                        <StaticImage
                          objectFit="contain"
                          src="../../assets/stamp.png"
                          alt=""
                        />
                      </Stack>
                      <Stack flex={1}></Stack>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack flex={1}></Stack>
              </Stack>
            </Container>
          </Stack>
        </ThemeProvider>
      )}
    </Box>
  );
};

export default Student;
