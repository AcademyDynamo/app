document.addEventListener("DOMContentLoaded", async () => {
    let teamContainer = document.getElementById("team");
    let response = await fetch("/get_players"); 
    let players = await response.json();

    players.forEach(player => {
        let div = document.createElement("div");
        div.innerHTML = `<img src="${player.logo}" width="50"> ${player.name} (${player.position})`;
        teamContainer.appendChild(div);
    });

    document.getElementById("saveTeam").addEventListener("click", async () => {
        alert("Состав сохранен!");
    });
});
