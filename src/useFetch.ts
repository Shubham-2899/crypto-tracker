import axios from "axios";
import { useEffect, useState } from "react";
import { coinFormat } from "./Interfaces";

const useFetch = (url: string) => {
  const [coins, setCoins] = useState<coinFormat[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setIsLoading(false));
  }, [url]);

  return { coins, isLoading, error };
};

export default useFetch;
