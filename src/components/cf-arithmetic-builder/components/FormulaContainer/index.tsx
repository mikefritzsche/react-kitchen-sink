import React, {useEffect, useState} from 'react'
import { useDrop } from 'react-dnd';
import OperationItem from '../OperationItem/index.tsx';
import {uniqueId} from "lodash";

const OPERATIONS = [
  { id: 'add', name: '+' },
  { id: 'subtract', name: '-' },
  { id: 'multiply', name: 'X' },
  { id: 'divide', name: '/' },
  { id: 'input', name: '123' },
]

function OperationInput() {
  return (
    <input/>
  )

}
const FormulaContainer = () => {
  const [FormulaContainer, setFormulaContainer] = useState([])
  const [formula, setFormula] = useState([])

  useEffect(() => {
    console.log('formulaContainer effect: ', FormulaContainer)
  }, [FormulaContainer])
  const [{ isOver }, dropRef] = useDrop({
    accept: 'operation',
    drop: (item) => {
      console.log('drop item: ', item)
      setFormulaContainer((FormulaContainer) =>
        !FormulaContainer.includes(item) ? [...FormulaContainer, item] : FormulaContainer)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  })

  return (
    <>
      <div className='operations' style={{ display: 'flex', flexDirection: 'row', gap: 10}}>
        {OPERATIONS.map((operation, id) => <OperationItem draggable key={`operation-${id}-${operation.id}`} id={`${operation.id}-${uniqueId()}`} name={operation.name} context="operations" />)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: 32, backgroundColor: 'white' }} className='formula-container' ref={dropRef}>
        {
          FormulaContainer.map((operation, id) => <OperationItem key={`formula-${id}-${operation.id}`} id={operation.id} name={operation.name} context="formula" />)
        }
        {isOver && <div>Drop Here!</div>}
      </div>
    </>
  )
}

export default FormulaContainer
