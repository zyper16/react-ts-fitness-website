export const fetchOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_EXERCISEDB_API_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export async function fetchData(url: string, options?: RequestInit) {
  try {
    const response = await fetch(url, options);
    if (!response.ok)
      throw new Error(`Api response has failed! Code: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
