import React from "react";
import { Container } from "react-bootstrap";
import scenary from "../../Assets/art/Photo1.png";
import sparks from "../../Assets/art/Photo2.png";
import shadow from "../../Assets/art/Photo3.png";
import water from "../../Assets/art/Photo4.png";
import falls from "../../Assets/art/Photo5.png";
import phone from "../../Assets/art/Photo6.png";
import doctor from "../../Assets/art/Portrait1.png";
import beckham from "../../Assets/art/Portrait2.png";
import tailorswift from "../../Assets/art/Portrait3.png";
import eyes from "../../Assets/art/Portrait4.png";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function Arts() {
  const artItems = [scenary,sparks,shadow,water,falls,phone,doctor,beckham,tailorswift,eyes]
  return (
    <Container fluid className="art-section">
      <Container>
        <h1 className="project-heading">
         <span style={{ color: "black" }}> My Recent </span><strong className="purple">Art Works</strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few favourites from my photography and pencil sketches.
        </p>
        <Box sx={{ width: 1300, height: 1150, overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {artItems.map((item) => (
                <ImageListItem key={item}>
                    <img
                    src={`${item}?w=248&fit=crop&auto=format`}
                    srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    loading="lazy"
                    />
                </ImageListItem>
                ))}
            </ImageList>
        </Box>
      </Container>
    </Container>
  );
}

export default Arts;
