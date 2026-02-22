import styled from "styled-components";
import type { Universities } from "../interfaces/Universities";

const AllUnisDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: bisque;
`;

const SingleUniDiv = styled.div<{ country: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 30%;
  padding: 2%;
  margin: 1%;
  color: black;
  border: 3px darkred solid;
  font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
  text-align: center;
`;

export default function Unis(props: { data: Universities[] }) {
  if (props.data.length === 0) return <p>Loading universities...</p>;

  return (
    <AllUnisDiv>
      {props.data.map((uni: Universities) => 
        <SingleUniDiv key={uni.web_page} country={uni.country}>
          <h1>{uni.name}</h1>
          <p>{uni.country}</p>
          <a href={uni.web_page} target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </SingleUniDiv>
      )}
    </AllUnisDiv>
  );
}