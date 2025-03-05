"use client";
import Image from "next/image";
import Card from "@/components/Card";
import { Container, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Container className="flex-grow">
        <div className="my-4">
          <Image
            src="/usagi.png"
            alt="icon"
            width={150}
            height={150}
            style={{
              marginBottom: 16,
              borderRadius: "50%",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
              border: "4px solid #fff",
            }}
          />

          <Typography
            variant="h5"
            sx={{
              marginBottom: 1,
              fontSize: "1.6rem",
            }}
          >
            Hi there 👋
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "text.secondary", lineHeight: "1.7em" }}
          >
            広島生まれ広島育ちの大学3年生です。
            <br />
            Webアプリ開発のエンジニアを目指していて、現在はフロントエンドをメインに勉強しています。
          </Typography>
        </div>
        <div className="mb-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div>
              <Card
                icon={<GitHubIcon sx={{ color: "black" }} />}
                title="GitHub"
                link="https://github.com/hina81"
                subtitle="hina81"
              />
            </div>
            <div>
              <Card
                icon={
                  <Image src="/zenn.svg" alt="Zenn" width={24} height={24} />
                }
                title="Zenn"
                link="https://zenn.dev/hina81"
                subtitle="hina81"
              />
            </div>
            <div>
              <Card
                icon={<TwitterIcon sx={{ color: "#1DA1F2" }} />}
                title="Twitter"
                link="https://twitter.com/hina___9"
                subtitle="@hina___9"
              />
            </div>
            <div>
              <Card
                icon={<InstagramIcon />}
                title="Instagram"
                link="https://www.instagram.com/__hina.811/"
                subtitle="@___hina.811"
              />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
