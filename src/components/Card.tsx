"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { IconButton } from "@mui/material";
import Link from "next/link";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  link: string;
  subtitle: string;
}

export default function ActionAreaCard({
  icon,
  title,
  link,
  subtitle,
}: CardProps) {
  return (
    <Card
      sx={{
        width: "100%",
        height: 0,
        paddingTop: "100%",
        position: "relative",
      }}
    >
      <CardActionArea
        sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <CardContent>
          <IconButton
            component={Link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </IconButton>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
