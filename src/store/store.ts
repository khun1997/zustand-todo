import { create } from "zustand";
export type TodoType = {
  id: number;
  name: string;
  completed: boolean;
};
export type TodosType = TodoType[];
export type StateType = {
  todos: TodosType;
  addTodo: (todo: TodoType) => void;
  delTodo:(id:number)=>void
  // updateTodo:(todo:TodoType)=>void
};

const store = (set: any): StateType => ({
  todos: [
    // { id: 1, name: "first todo", completed: false },
    // { id: 2, name: "second todo", completed: true },
  ],
  addTodo: (todo: TodoType) =>
    set((state: StateType) => ({ todos: [todo, ...state.todos] })),
  delTodo:(id:number)=>set((state:StateType)=>({todos:state.todos.filter(t => t.id !== id)}))
});

const useStore = create(store);

export default useStore;
