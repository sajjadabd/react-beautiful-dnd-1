import React , { useState } from 'react';
import initialData from './data/initialData';
import Column from './components/Column';
import { DragDropContext } from 'react-beautiful-dnd';


function App() {

  const [state , setState] = useState(initialData);

  // console.log(state);

  const onDragEnd = (result) => {
    // console.log(result);
    const { destination , source , draggableId } = result;

    
    if(!destination) return ;

    if ( destination.droppableId === source.droppableId && 
      destination.index === source.index ) {
      return;
    }

    const column = state.columns[source.droppableId];
    let newTaskIds = column.taskIds;
    
    newTaskIds.splice(source.index, 1);
    
    newTaskIds.splice(destination.index, 0, draggableId);

    // console.log(newTaskIds);

    const newColumn = {
      ...column ,
      taskIds : newTaskIds
    }


    const newSate = {
      ...state,
      columns : {
        ...state.columns,
        [newColumn.id] : newColumn
      }
    }

    setState(newSate);

    // console.log(destination , source , draggableId);
  }

  return (
    <DragDropContext
    onDragEnd={onDragEnd}
    >
      {state.columnOrder.map( (columnId) => {
        const col = state.columns[columnId];
        const tasks =  col.taskIds.map( (taskId) => {
          return state.tasks[taskId]
        });
        return <Column key={col.id} column={col} tasks={tasks} />
        //return col.title;
      })}
    </DragDropContext>
  );
}

export default App;
