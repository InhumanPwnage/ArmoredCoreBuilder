
// making use of jQuery in a seperate script like this, note the order of scripts https://stackoverflow.com/questions/20398021/how-do-i-reference-jquery-from-my-html-javascript-application

_showingPlayerPanel = false;
_gameId = -1;

function setGame(gameId) {
    this._gameId = gameId;
}

function loadPlayers() {

}

function showHidePlayer() {
    this._showingPlayerPanel = !this._showingPlayerPanel;
}