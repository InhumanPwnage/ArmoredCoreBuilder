
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