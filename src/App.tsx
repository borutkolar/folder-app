import styled from "styled-components";
import FolderTree from "./components/FolderTree";
import { MOCK_FOLDERS } from "./mocks";

function App() {
  return (
    <Styled.Container>
      <Styled.Title>FOLDER APP</Styled.Title>
      <FolderTree data={MOCK_FOLDERS} />
    </Styled.Container>
  );
}

export default App;

const Styled = {
  Container: styled.div`
    padding-top: 2rem;
    padding-left: 2rem;
  `,
  Title: styled.h1`
    margin: 0 0 1.5rem;
    color: #708090;
  `,
};
