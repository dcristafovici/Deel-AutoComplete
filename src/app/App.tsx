import AutoComplete from "../components/AutoComplete";
import { autoCompleteMockData } from "../shared/Mock";
import { ApplicationStyled } from "./App.styled";

const App = () => {
  return (
    <ApplicationStyled>
      <h1>AutoComplete component in React TypeScript with local data.</h1>
      <AutoComplete data={autoCompleteMockData} />
    </ApplicationStyled>
  );
};

export default App;
