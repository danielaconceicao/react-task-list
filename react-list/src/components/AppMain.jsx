import { Fragment } from "react";

export default function AppMain(){
    /* const contentBody = "welcome to my react app"; */

    const tasks = [
        {
            id: 1,
            title: "Implementare la homepage",
            priority: 1,
            estimatedTime: 120,
            state: "completed"
        },
        {
            id: 2,
            title: "Sviluppare il menu di navigazione",
            priority: 2,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 3,
            title: "Creare il footer del sito",
            priority: 3,
            estimatedTime: 30,
            state: "completed"
        },
        {
            id: 4,
            title: "Ottimizzare le performance",
            priority: 1,
            estimatedTime: 180,
            state: "completed"
        },
        {
            id: 5,
            title: "Scrivere test per i componenti",
            priority: 2,
            estimatedTime: 90,
            state: "completed"
        },
        {
            id: 6,
            title: "Implementare la pagina dei contatti",
            priority: 3,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 7,
            title: "Aggiungere animazioni CSS",
            priority: 2,
            estimatedTime: 30,
            state: "backlog"
        },
        {
            id: 8,
            title: "Integrare l'API di autenticazione",
            priority: 1,
            estimatedTime: 120,
            state: "in_progress"
        },
        {
            id: 9,
            title: "Aggiornare la documentazione",
            priority: 3,
            estimatedTime: 60,
            state: "backlog"
        },
        {
            id: 10,
            title: "Rifattorizzare il codice CSS",
            priority: 2,
            estimatedTime: 90,
            state: "in_progress"
        }
    ];

    const completedTask = tasks.filter(task => task.state === 'completed');
    const currentTask = tasks.filter(task => task.state !== 'completed');

    return (
        <main>
            <div className="completedTask">
                <h2>Completed Tasks ({completedTask.length})</h2>
                <section className="tasks">
                    {completedTask.map((product) => 
                        <Fragment key={product.id}>
                            <h4>{product.title} <span>{product.state}</span></h4>
                            <p>Priority {product.priority}</p>
                            <p>Est. time {product.estimatedTime}</p>
                        </Fragment>)}
                </section>
            </div>

            <hr></hr>

            <div className="currentTask">
                <h2>Current Tasks ({currentTask.length})</h2>
                <section className="task">
                    {currentTask.map((product) => 
                    <Fragment key={product.id}>
                        <h4>{product.title} <span>{product.state}</span></h4>
                        <p>Priority {product.priority}</p>
                        <p>Est. time {product.estimatedTime}</p>
                    </Fragment>)}
                </section>
            </div>
        </main>
    )
}