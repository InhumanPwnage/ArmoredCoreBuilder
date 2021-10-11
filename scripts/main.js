
// making use of jQuery in a seperate script like this, note the order of scripts https://stackoverflow.com/questions/20398021/how-do-i-reference-jquery-from-my-html-javascript-application

_showingPlayerPanel = false;
_gameId = -1;

function setGame(gameId) 
{
    if(this._gameId != gameId) {
        $('#errors').replaceClass('display-inherit', 'display-none');
    }

    this._gameId = gameId;

    this.loadPlayers();
}

function loadPlayers() {
    this.showHidePlayers();
}

function showHidePlayers() {
    this._showingPlayerPanel = !this._showingPlayerPanel;

    if(this._showingPlayerPanel) 
    {
        $('#playerPanel').replaceClass('display-none','display-inherit');
    }
    else 
    {
        $('#playerPanel').replaceClass('display-inherit','display-none');
    }
}

//utility function to replace CSS class https://stackoverflow.com/a/37297740
(function ($) {
    $.fn.replaceClass = function (pFromClass, pToClass) {
        return this.removeClass(pFromClass).addClass(pToClass);
    };
}(jQuery));