import Head from "next/head";
import { Box, Container, Typography } from "@mui/material";
import { CurrentSchedule } from "../components/CurrentSchedule";
import { Attendance } from "../components/Attendance";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hogwarts Schedule</title>
        <meta name="description" content="Hogwarts Schedule App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Box
          sx={{ textAlign: "center", padding: "30px 0" }}
          component={"header"}
        >
          <Typography variant="h1" component={"h1"}>
            Hogwarts Schedule App
          </Typography>
        </Box>
        <Box
          sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}
        >
          <Attendance />
          <CurrentSchedule />
        </Box>
      </Container>
    </>
  );
}
