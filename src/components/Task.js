import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const TaskWrapper = styled.div`
  padding : 5px;
  margin : 5px;
  font-size : 20px;
  border : 1px dotted black;
  color : ${ props => (props.isDragging ? 'maroon' : 'black')};
  background-color : ${ props => (props.isDragging ? 'lightgreen' : 'white')};
  display : flex;
  align-items : center;
`

const Handle = styled.div`
  width : 20px;
  height : 20px;
  background-color : orange;
  margin-right : 5px;
  border-radius : 5px;
`

const Task = (props) => {

  const { task, index } = props;

  return (
    <Draggable
    draggableId={task.id} 
    index={index}
    >
      {(provided, snapshot) => (
        <TaskWrapper
        {...provided.draggableProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
        >
          <Handle {...provided.dragHandleProps}/>
          {task.content}
        </TaskWrapper>
      )}
    </Draggable>
  )
}

export default Task
