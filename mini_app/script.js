document.addEventListener("DOMContentLoaded", function () {
    const playerSlots = document.querySelectorAll(".player-slot");
    const playersList = document.getElementById("players-list");
    const playerItems = document.querySelectorAll("#players-list li");

    let selectedSlot = null;

    playerSlots.forEach(slot => {
        slot.addEventListener("click", function () {
            selectedSlot = this;
            playersList.classList.remove("hidden");
        });
    });

    playerItems.forEach(player => {
        player.addEventListener("click", function () {
            if (selectedSlot) {
                selectedSlot.textContent = this.dataset.name;
                selectedSlot.classList.add("selected");
                playersList.classList.add("hidden");
            }
        });
    });
});
