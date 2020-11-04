import React from 'react';
import styled from 'styled-components';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  border : 1px dashed black;
  padding : 10px;
`

const Title = styled.div`
  padding : 5px;
`

const TaskList = styled.div`
  padding : 5px;
  background-color : ${props => (props.isDraggingOver ? 'cyan' : 'white')};
`

const Column = (props) => {

  const { column , tasks } = props;

  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable 
      droppableId={column.id}
      >
        {(provided, snapshot) => (
          <TaskList
          {...provided.droppableProps}
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
          >
          {tasks.map((task , index) => {
            return <Task key={task.id} task={task} index={index} />
          })}
          {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  )
}

export default Column;
