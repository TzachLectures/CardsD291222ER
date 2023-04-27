import { useState } from "react";
import { getCards } from "../services/cardApiService";
import useAxios from "../../hooks/useAxios";
import { useSnack } from "../../providers/SnackBarProvider";

export default function useCards() {
  const [cards, setCards] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useAxios();
  const snack = useSnack();

  const handleGetCards = async () => {
    try {
      const cards = await getCards();
      setLoading(false);
      setCards(cards);
      snack("success", "All the cards are here");
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
