import axios from "axios";
import { Todo } from "~/features/todoNew/types";

const getTodos= () => axios.get<Todo[]>('https://my-json-server.typicode.com/typicode/demo/posts')


export { getTodos };
