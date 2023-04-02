import { Container } from "@mui/material";
import React from "react";
import PageHeader from "../../components/PageHeader";
import Cards from "../Cards";

export default function CardsPage() {
  const cards = [
    {
      _id: "eafeswfwr2326346tf3254f",
      title: "first",
      subtitle: "subTitle",
      description: "testing",
      phone: "050-1111111",
      email: "text@text.com",
      web: "https://www.test.co.il",
      image: {
        url: "assets/images/business-card-top-image.jpg",
        alt: "image",
      },
      address: {
        state: "TLV",
        country: "Israerl",
        street: "Dizingof",
        houseNumber: 1,
        city: "Tel Aviv",
        zip: 1312,
      },
      bizNumber: 1111111,
      likes: [],
      user_id: "4235234234mfnjrb2h3vbry23",
    },
    {
      _id: "daslfjhbasfjba123124123",
      title: "second",
      subtitle: "subTitle",
      description: "testing",
      phone: "050-1111111",
      email: "text@text.com",
      web: "https://www.test.co.il",
      image: {
        url: "assets/images/business-card-top-image.jpg",
        alt: "image",
      },
      address: {
        state: "TLV",
        country: "Israerl",
        street: "Dizingof",
        houseNumber: 2,
        city: "Tel Aviv",
        zip: 1312,
      },
      bizNumber: 222222,
      likes: [],
      user_id: "4235234234mfnjrb2h3vbry23",
    },
    {
      _id: "asdfaa54sdf158as4ass",
      title: "third",
      subtitle: "subTitle",
      description: "testing",
      phone: "050-1111111",
      email: "text@text.com",
      web: "https://www.test.co.il",
      image: {
        url: "assets/images/business-card-top-image.jpg",
        alt: "image",
      },
      address: {
        state: "TLV",
        country: "Israerl",
        street: "Dizingof",
        houseNumber: 3,
        city: "Tel Aviv",
        zip: 1312,
      },
      bizNumber: 333333,
      likes: [],
      user_id: "4235234234mfnjrb2h3vbry23",
    },
  ];
  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <Cards cards={cards} />
      </Container>
    </div>
  );
}
