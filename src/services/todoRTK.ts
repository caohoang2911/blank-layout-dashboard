import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Todo } from '~/features/todoNew/types'


export const todoRTK   = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://my-json-server.typicode.com/typicode/demo/'
    }),
    endpoints: (builder) => ({
        getAllTodo: builder.query<Todo, string>({
          query: (id) => `posts/${id}`,
        }),
    }),
})

export const { useGetAllTodoQuery } = todoRTK;