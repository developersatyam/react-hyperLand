import { useState, useEffect } from "react";
function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchUrlFn() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrlFn();
  }, []);
  return [data, loading];
}
export { useFetch };
