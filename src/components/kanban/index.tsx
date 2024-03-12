import React, {useState} from 'react';
import {uniqueId} from 'lodash';
// import {DragDropContext, Droppable} from "@hello-pangea/dnd";
import TaskCard from "./components/TaskCard";

const data = [
  {
    id: '1',
    Task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.',
    // Assigned_To: 'Beltran',
    // Assignee: 'Romona',
    // Status: 'To-do',
    // Priority: 'Low',
    Due_Date: '25-May-2020',
  },
  {
    id: '2',
    Task: 'Fix Styling',
    // Assigned_To: 'Dave',
    // Assignee: 'Romona',
    // Status: 'To-do',
    // Priority: 'Low',
    Due_Date: '26-May-2020',
  },
  {
    id: '3',
    Task: 'Handle Door Specs',
    // Assigned_To: 'Roman',
    // Assignee: 'Romona',
    // Status: 'To-do',
    // Priority: 'Low',
    Due_Date: '27-May-2020',
  },
  {
    id: '4',
    Task: 'morbi',
    // Assigned_To: 'Gawen',
    // Assignee: 'Kai',
    // Status: 'Done',
    // Priority: 'High',
    Due_Date: '23-Aug-2020',
  },
  {
    id: '5',
    Task: 'proin',
    // Assigned_To: 'Bondon',
    // Assignee: 'Antoinette',
    // Status: 'In Progress',
    // Priority: 'Medium',
    Due_Date: '05-Jan-2021',
  },
];
const columnsFromBackend = {
  [uniqueId()]: {
    title: 'To-do',
    items: data,
  },
  [uniqueId()]: {
    title: 'In Progress',
    items: [],
  },
  [uniqueId()]: {
    title: 'Done',
    items: [],
  },
};

const Kanban = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  const onDragEnd = (result: { destination: any; source?: any; }, columns: {
    [x: string]: any; [x: number]: {
      title: string; items: {
        id: string; Task: string;
        Due_Date: string;
      }[];
    };
  }, setColumns: {
    (value: React.SetStateAction<{
      [x: number]: {
        title: string; items: {
          id: string; Task: string;
          Due_Date: string;
        }[];
      };
    }>): void; (arg0: any): void;
  }) => {
    if (!result.destination) return;
    const {source, destination} = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  return (
      <div>
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div>
              <span>{column.title}</span>
              {column.items.map((item, index) => (
                <div>{item.Task}</div>
                // <TaskCard key={item} item={item} index={index}/>
              ))}
            </div>
          );
        })}
      </div>
    // <DragDropContext
    //   onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    // >
    //   <div>
    //     <div>
    //       {Object.entries(columns).map(([columnId, column], index) => {
    //         return (
    //           <Droppable key={columnId} droppableId={columnId}>
    //             {(provided, snapshot) => (
    //               <div
    //                 ref={provided.innerRef}
    //                 {...provided.droppableProps}
    //               >
    //                 <span>{column.title}</span>
    //                 {column.items.map((item, index) => (
    //                   <TaskCard key={item} item={item} index={index}/>
    //                 ))}
    //                 {provided.placeholder}
    //               </div>
    //             )}
    //           </Droppable>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </DragDropContext>
  );
};

export default Kanban;
