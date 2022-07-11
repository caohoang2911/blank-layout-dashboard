import React, { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { RootState } from '~/app/store';
import { fetchPostsRequest } from '~/features/post/saga/postAction';
import { useGetAllTodoQuery } from '~/services/todoRTK';
import { Todo } from '../types';

const Todos: React.FC<void> = (): React.ReactElement => {
  
  const {data,error,isLoading } =  useGetAllTodoQuery('1')

//   const dispatch = useAppDispatch();

//   const todos = useAppSelector((state: RootState) => state.todo.todos);
//   const loading = useAppSelector((state: RootState) => state.todo.pending);

//   const renderTodos = useMemo(()=>{
//     return todos.map((todo: Todo)=> <li key={todo.id}>{todo.title}</li>)
//   },[todos])

  useEffect(()=>{
    console.log(data,'data')
  },[data])

  useEffect(()=>{
    // dispatch(fetchPostsRequest())
  },[])

  return (
    // <div>{loading ? <p>Loading...</p> : renderTodos}</div>
    <h3>333</h3>
  )
}
export default Todos;

