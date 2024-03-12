import React from 'react'
import { useDrag } from 'react-dnd'

function OperationInput() {
  return (
    <input/>
  )

}
 const OperationCard = ({ id, name, context }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'operation',
    item: { id, name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })
   const styles = context === 'formula'
     ? {
       display: 'block',
       border: '1px solid #ccc',
       borderRadius: 5,
       padding: 5,
       // width: 'auto',
       height: 20,
       backgroundColor: 'white',
       color: 'black',
     }
     : {
     display: context === 'formula' ? '' : 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     border: '1px solid #ccc',
     borderRadius: 5,
     padding: 5,
     width: 20,
     height: 20,
     backgroundColor: 'white',
     color: 'black',
   }
  return (
    <div
      className='operation-item'
      ref={dragRef}
      style={styles}
    >
      {id.includes('input') && context === 'formula' ? <OperationInput /> : name }
      {isDragging && ' !!' }
    </div>
  )
}

export default OperationCard
