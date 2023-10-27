import { useEffect, useState } from "react";
import TribesTable from "../../components/TribesTable";
import { instance } from "../../index";

export default function Tribes() {
  const [tribes, setTribes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    setError(false);
    try {
      const response = await instance.get("/tribes");
      setTribes(response.data);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <TribesTable tribes={tribes} isLoading={isLoading} error={error} />;
}
