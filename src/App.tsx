import FolderTree from "./components/FolderTree";
import { MOCK_FOLDERS } from "./mocks";

function App() {
  return (
    <div>
      <h1>FOLDER APP</h1>
      <FolderTree data={MOCK_FOLDERS} />
    </div>
  );
}

export default App;
