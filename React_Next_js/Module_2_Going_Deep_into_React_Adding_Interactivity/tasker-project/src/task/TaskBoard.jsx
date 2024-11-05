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
