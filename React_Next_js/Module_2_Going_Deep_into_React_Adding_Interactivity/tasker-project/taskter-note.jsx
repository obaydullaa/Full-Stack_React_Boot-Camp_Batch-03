Feature List 
===================
- Have a Header - Done 
- Have a Footer - Done 
- Have a Hero Section - Done 
- List the Tasks & Install react icon - Done 
- Add A Task - 
- Edit a Task -
- Delete A Task - 
- Delete All Tasks - 
- Mark a Task Fav/Unfav - 
- Search Tasks -
- Show No Tasks Fund -



step 1: create all component ( same type all component in folder )

Html to rect: ->
class = className
for = htmlFor


TaskBoard.jsx
============================
import { useState } from "react";

import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
    const defaultTask = {
        'id': crypto.randomUUID(),
        'title': "Learn React",
        'descriptions': "I want to learn React such than i can treat it like my salve and make it do whatever I want to do",
        'tags': ["web", "react", "js"],
        'priority': "Low",
        'isFavorite': true,
    };

    const [tasks, setTasks] = useState([defaultTask]);
    return (
        <section className="mb-20" id="tasks">
            <div className="container">
                <div className="p-2 flex justify-end">
                    <SearchTask />
                </div>

                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskActions />

                    <TaskList tasks={tasks} />
                </div>
            </div>
        </section>
    );
}


TaskList.jsx 
==============================
import { FaStar } from "react-icons/fa6";

export default function TaskList({ tasks }) {
    return (
        <div className="overflow-auto">
            <table className="table-fixed overflow-auto xl:w-full">
                <thead>
                    <tr>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                            {" "}
                            Title{" "}
                        </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                            {" "}
                            Description{" "}
                        </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                            {" "}
                            Tags{" "}
                        </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                            {" "}
                            Priority{" "}
                        </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                            {" "}
                            Options{" "}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr
                            key={task.id}
                            className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
                        >
                            <td>
                                {task.isFavorite ? <FaStar color="yellow" /> : <FaStar color="gray" /> }
                            </td>
                            <td>{task.title}</td>
                            <td>
                                <div>{task.descriptions}</div>
                            </td>
                            <td>
                                <ul className="flex justify-center gap-1.5 flex-wrap">
                                    {task.tags.map((tag, index) => (
                                        <li key={index}>
                                            <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                                                {tag}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td className="text-center">{task.priority}</td>
                            <td>
                                <div className="flex items-center justify-center space-x-3">
                                    <button className="text-red-500">
                                        Delete
                                    </button>
                                    <button className="text-blue-500">
                                        Edit
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


TaskBoard.jsx 
============================
Modal add and Open 
import { useState } from "react";

import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

export default function TaskBoard() {
    const defaultTask = {
        'id': crypto.randomUUID(),
        'title': "Learn React",
        'descriptions': "I want to learn React such than i can treat it like my salve and make it do whatever I want to do",
        'tags': ["web", "react", "js"],
        'priority': "Low",
        'isFavorite': true,
    };

    const [tasks, setTasks] = useState([defaultTask]);
    const [showAddModal, setShowAddModal] = useState(false);

    function handleAddTask() {
        console.log("Adding a Task")
    }

    return (
        <section className="mb-20" id="tasks">
            
           { showAddModal && <AddTaskModal />}

            <div className="container">
                <div className="p-2 flex justify-end">
                    <SearchTask />
                </div>

                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    
                    <TaskActions onAddClick={() => setShowAddModal(true)} />

                    <TaskList tasks={tasks} />
                </div>
            </div>
        </section>
    );
}


TaskActions.jsx 
===================================
export default function TaskActions({onAddClick}) {
    return (
        <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <div className="flex items-center space-x-5">
                <button className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
                onClick={onAddClick}>
                    Add Task
                </button>
                <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">
                    Delete All
                </button>
            </div>
        </div>
    );
}
