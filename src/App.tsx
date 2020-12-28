import { Column } from "./column" ;
import { Card } from "./card";
import { AddNewItem } from './add-new-item';
import { AppContainer } from "./styles";

// TODO: remove
const x = console.log;

const App = () => {
  return (
    <AppContainer>
      <Column text="Backlog">
        <Card text="Daily 90" /> 
      </Column>
      <Column text="In Progress">
        <Card text="TS + React" />
      </Column>
      <Column text="Done">
        <Card text="Day 1" /> 
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={x}/>
    </AppContainer>
) }

export default App;
