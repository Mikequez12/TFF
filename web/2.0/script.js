document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('game').forEach((game) => {
        game.parentElement.innerHTML = `
        <img src="assets/games/${game.getAttribute("alias")}/logo.png"></img>
        <div>
            <h3>${game.getAttribute("name")}</h3>
            <span>${game.innerText}</span>
        </div>
        `
    })
});