
export interface TodoState{
    todos: Todo[],
    pending: boolean
}

export interface Todo{
    id: string;
    title: string;
}