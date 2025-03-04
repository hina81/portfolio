"use client";
import Image from "next/image";
import Card from "@/components/Card";
import { Box, Container, Grid, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Home() {
  return (
    <Container>
      <Box sx={{ marginBottom: 4, marginTop: 4 }}>
        <Image
          src="/usagi.png"
          alt="icon"
          width={150}
          height={150}
          style={{
            marginBottom: 16,
            borderRadius: "25%",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            border: "4px solid #fff",
          }}
        />

        <Typography
          variant="h5"
          sx={{ color: "text.secondary", marginBottom: 1, fontSize: "1.6rem" }}
        >
          Hi there 👋
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", lineHeight: "1.5em" }}
        >
          広島生まれ広島育ちの大学2年生です。
          <br />
          Webアプリ開発のエンジニアを目指していて、現在はフロントエンドをメインに勉強しています。
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={6} sm={4} md={3}>
          <Card
            icon={<GitHubIcon sx={{ color: "black" }} />}
            title="GitHub"
            link="https://github.com/hina81"
            subtitle="hina81"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Card
            icon={<Image src="/zenn.svg" alt="Zenn" width={24} height={24} />}
            title="Zenn"
            link="https://zenn.dev/hina81"
            subtitle="hina81"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Card
            icon={<TwitterIcon sx={{ color: "#1DA1F2" }} />}
            title="Twitter"
            link="https://twitter.com/hina___9"
            subtitle="@hina___9"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Card
            icon={<InstagramIcon />}
            title="Instagram"
            link="https://www.instagram.com/__hina.811/"
            subtitle="@___hina.811"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
