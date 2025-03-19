function selectPlayer(player) {
    alert(`Вы выбрали ${player}`);
}

document.getElementById('adminButton').addEventListener('click', function() {
    window.location.href = '/admin';  // Переход к админ-меню
});
