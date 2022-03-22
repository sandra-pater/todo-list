{

    const tasks = [
        {
            content: "iść na spacer",
            done: false,
        },
        {
            content: "umówić się do lekarza",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li${task.done ? " style=\"text-decoration: line-through\"" : ""}
            >
            <button class="js-done">zrobione</button>
            <button class="js-remove">Usuń</button>
                ${task.content}
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        const toggleDoneTask = (index) => {
            tasks[index].done = !tasks[index].done;
            render();
        }

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                tasks.splice(index, 1);
                render();
            });
        });

        const toggleDoneButton = document.querySelectorAll(".js-done");

        toggleDoneButton.forEach((toggleDoneButton, index) =>
            toggleDoneButton.addEventListener("click", () => {
                toggleDoneTask(index);
            })
        );
};

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,

        });

        render();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();

            if (newTaskContent === "") {
                return;
            }

            addNewTask(newTaskContent);
        });
    };

    init();

}