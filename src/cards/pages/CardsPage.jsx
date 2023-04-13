import { Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";

export default function CardsPage() {
  const { cards, isLoading, error, handleGetCards } = useCards();
  useEffect(() => {
    handleGetCards();
  }, []);

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <CardsFeedback cards={cards} isLoading={isLoading} error={error} />
      </Container>
    </div>
  );
}
