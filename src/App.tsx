import styled from "styled-components";
import ReposList from "./components/ReposList/ReposList";

const AppLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const App = () => {
  return (
    <AppLayout data-testid="App">
      <ReposList />
    </AppLayout>
  );
};

export default App;
