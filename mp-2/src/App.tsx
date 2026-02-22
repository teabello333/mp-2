import Unis from "./components/Unis";
import styled from "styled-components";
import { useEffect, useState } from "react";
import type { Universities } from "./interfaces/Universities";

const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px darkgoldenrod solid;
  padding: 1rem;
`;

export default function App() {
  const [data, setData] = useState<Universities[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch(
        //universities with the word "middle" in their name
        "https://universities.hipolabs.com/search?name=middle");
      const json: { name: string; country: string; web_pages: string[] }[] =
        await rawData.json();

      // this maps to your Universities type (use first web_page as key)
      const universities: Universities[] = json.map((uni) => ({
        name: uni.name,
        country: uni.country,
        web_page: uni.web_pages[0],
      }));

      setData(universities);
    }

    fetchData()
      .then(() => console.log("Data fetched successfully"))
      .catch((e: Error) => console.log("There was the error: " + e));
  }, [data.length]);

  return (
    <ParentDiv>
      <Unis data={data} />
    </ParentDiv>
  );
}
