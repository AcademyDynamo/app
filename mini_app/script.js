const API_URL = "http://<IP_адрес_бота>:8000/get_deadline";  // 🔹 Укажите реальный IP бота

const substitutes = ["Игрок 1", "Игрок 2", "Игрок 3", "Игрок 4"]; // 🔹 Список замен

async function fetchDeadline() {
    try {
        let response = await fetch(API_URL);
        let data = await response.json();
        let deadlineTimestamp = data.deadline;
        let deadlineDate = new Date(deadlineTimestamp * 1000);

        document.getElementById("deadline-text").innerText = 
            `Дедлайн: ${deadlineDate.toLocaleString()}`;

        if (Date.now() / 1000 > deadlineTimestamp) {
            document.getElementById("edit-team").style.display = "none";
        }
    } catch (error) {
        console.error("Ошибка загрузки дедлайна:", error);
    }
}

// 🔹 Открытие/закрытие списка замен
function toggleSubstitutes() {
    let container = document.getElementById("substitutes-container");
    let list = document.getElementById("substitutes-list");

    if (container.classList.contains("show")) {
        container.classList.remove("show");
    } else {
        list.innerHTML = ""; // Очищаем список перед обновлением
        substitutes.forEach(player => {
            let li = document.createElement("li");
            li.innerText = player;
            li.onclick = () => replacePlayer(player);
            list.appendChild(li);
        });
        container.classList.add("show");
    }
}

// 🔹 Замена игрока
function replacePlayer(player) {
    alert(`${player} теперь в вашем составе!`);
}

fetchDeadline();
