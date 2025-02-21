import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });



    function removeTask(id: string, todoListId: string) {
        setTasks(
            {...tasks, 
            [todoListId]: tasks[todoListId].filter(i=> i.id != id)}
        );
    }

    function addTask(title: string, todoListId: string) {
        let task = {id: v1(), title: title, isDone: false};
        setTasks({
            ...tasks,
            [todoListId]: [task, ...tasks[todoListId]]
        });
    }

    function changeStatus(taskId: string, isDone: boolean, todoListId: string) {
        setTasks({
            ...tasks,
            [todoListId]: tasks[todoListId].map(i => i.id===taskId ? {...i, isDone} : i)
        });
    }

    function changeFilter(value: FilterValuesType, todoListId: string) {
        setTodolists(
            todolists.map(i => i.id === todoListId ? {...i, filter: value} : i)
        );
    }
const currentTodoLists = todolists.map(t=> {
    let tasksForTodolist = tasks[t.id];

    if (t.filter === "active") {
        tasksForTodolist = tasks[t.id].filter(t => t.isDone === false);
    }
    if (t.filter === "completed") {
        tasksForTodolist = tasks[t.id].filter(t => t.isDone === true);
    }

    return (
        <Todolist 
        key={t.id}
        todoListId={t.id}
        title={t.title}
        tasks={tasksForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeTaskStatus={changeStatus}
        filter={t.filter}
/>
    )
})

    return (
        <div className="App">
            {currentTodoLists}
        </div>
    );
}

export default App;
