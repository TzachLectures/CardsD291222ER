import { useState } from "react";
import { getCards } from "../services/cardApiService";

export default function useCards() {
  const [cards, setCards] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleGetCards = async () => {
    try {
      const cards = await getCards();
      setLoading(false);
      setCards(cards);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return {
    cards,
    isLoading,
    error,
    handleGetCards,
  };
}
