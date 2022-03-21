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
            <li>
                ${task.content}
            </li >
            `;

            document.querySelector(".js-tasks").innerHTML = htmlString;
        }

    }
    const init = () => {
        render();
    }

    init();

}