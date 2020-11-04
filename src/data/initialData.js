const initialData = {
  tasks : {
    'task-1' : { id : 'task-1' , content : 'wash the car' },
    'task-2' : { id : 'task-2' , content : 'clean the room' },
    'task-3' : { id : 'task-3' , content : 'watch TV' },
    'task-4' : { id : 'task-4' , content : 'read books' },
    'task-5' : { id : 'task-5' , content : 'wash the car' },
    'task-6' : { id : 'task-6' , content : 'clean the room' },
    'task-7' : { id : 'task-7' , content : 'watch TV' },
    'task-8' : { id : 'task-8' , content : 'read books' },
    'task-9' : { id : 'task-9' , content : 'wash the car' },
    'task-10' : { id : 'task-10' , content : 'clean the room' },
    'task-11' : { id : 'task-11' , content : 'watch TV' },
    'task-12' : { id : 'task-12' , content : 'read books' },
    'task-13' : { id : 'task-13' , content : 'wash the car' },
    'task-14' : { id : 'task-14' , content : 'clean the room' },
    'task-15' : { id : 'task-15' , content : 'watch TV' },
    'task-16' : { id : 'task-16' , content : 'read books' },
    'task-17' : { id : 'task-17' , content : 'wash the car' },
    'task-18' : { id : 'task-18' , content : 'clean the room' },
    'task-19' : { id : 'task-19' , content : 'watch TV' },
    'task-20' : { id : 'task-20' , content : 'read books' },
  } , 
  columns : {
    'column-1' : {
      id : 'column-1' ,
      title : 'Todo List',
      taskIds : [
        'task-1' , 'task-2' , 'task-3' , 'task-4' ,
        'task-5' , 'task-6' , 'task-7' , 'task-8' ,
        'task-9' , 'task-10' , 'task-11' , 'task-12' ,
        'task-13' , 'task-14' , 'task-15' , 'task-16' ,
        'task-17' , 'task-18' , 'task-19' , 'task-20' ,
      ],
    }
  },
  columnOrder : ['column-1']
}

export default initialData;