import FormulaContainer from './components/FormulaContainer';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

export default function CFFormulaBuilder() {
  return (
    <DndProvider backend={HTML5Backend}>
    <FormulaContainer />
    </DndProvider>
  );
}
