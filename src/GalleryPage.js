import { ImageList, ImageListItem } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";

export default function GalleryPage({ galleryService }) {
  return (
    <Container maxWidth="md" noValidate>
      <ImageList sx={{ width: 800, height: 650 }} cols={2} >
        {galleryService.getImages().map((i) => (
          <ImageListItem key={i.img}>
            <img
              src={`${i.url}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${i.url}`}
              alt={i.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
