import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  Rating,
  Card,
  CardMedia,
  CardActions,
  CardContent,
} from "@mui/material";
import insurance from "../asset/background1.jpg";
import SideNav from "../Components/SideNav";

const Book = () => {
  const cardData = [
    {
      niche: "Design",
      title:
        "Create styleguide foundation",
      description:
        "Create content for paceland App",
      image: insurance,
    },
    {
      niche: "Research",
      title:
        "Copywriting content",
      description:
        "Create content for paceland App",
      image: insurance,
    },
    {
      niche: "Planning",
      title:
        "Update Requirement list",
      description:
        "Create content for paceland App",
      image: insurance,
    },
  ];

  const [expandedCard, setExpandedCard] = useState(null);
  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <Box sx={{ display: 'flex', marginTop: '40px' }}>
      <SideNav />
      <Box component="main" sx={{ py: 5 }}>
        <Box sx={{ py: "20px", px: '20px' }}>
          <Box sx={{ width: { lg: "100%" }, margin: "0 auto" }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 2,
                mt: 4,
              }}
            >
              {cardData.map((card, index) => {
                const isLong = card.description.length > 100;
                return (
                  <Card
                    key={index}
                    sx={{
                      width: { xs: "100%", lg: "30%" },
                      height: "auto",
                      padding: "12px",
                      margin: { xs: "10px", lg: "0" },
                      transition: "0.3s",
                      border: "1px solid rgb(231, 225, 225)",
                      borderRadius: "10px",
                    }}
                  >
                    <Button
                        sx={{
                          marginLeft: "-8px",
                          marginBottom: "10px",
                          fontSize: "12px",
                          color: "rgb(168, 159, 159)",
                          fontWeight: "600",
                          ":hover": {
                            color: "blue",
                            background: "none",
                          },
                        }}
                      >
                        {card.niche}
                      </Button>
                      <p>Waqas</p>
                    <CardMedia
                      component="img"
                      height="200"
                      image={card.image}
                      alt="green iguana"
                      sx={{ borderRadius: "10px" }}
                    />

                    <CardContent sx={{ minHeight: "100px" }}>
                      <Typography
                        gutterBottom
                        className="hover-text"
                        variant="h5"
                        component="div"
                        sx={{
                          fontSize: "20px",
                          fontWeight: 600,
                          ":hover": { color: "blue" },
                        }}
                      >
                        {card.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          fontSize: "16px",
                          marginTop: "10px",
                        }}
                      >

                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          fontSize: "16px",
                          marginTop: "10px",
                        }}
                      >
                        ✔︎ Modern infrastructure
                        <br />
                        ✔︎ Consulting services
                      </Typography>
                    </CardContent>
                    {isLong && (
                      <CardActions>
                        <Button
                          onClick={() => toggleExpand(index)}
                          sx={{
                            fontSize: "10px",
                            textTransform: "none",
                            color: "black",
                            fontWeight: "600",
                            position: "relative",
                            ":hover": {
                              color: "blue",
                              background: "none",
                            },
                          }}
                        >
                          {expandedCard === index ? "Learn Less" : "Learn More"}
                        </Button>
                      </CardActions>
                    )}
                  </Card>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Book
