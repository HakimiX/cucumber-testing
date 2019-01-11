

function sendNews(response){
    return 'Seneste nyheder'
}

function sendColumns(response){
    return 'Seneste klummer'
}

function sendPodcast(response){
    return 'Seneste podcast'
}

function sendVideos(response){
    return 'Seneste videoer'
}

function sendKalender(response){
    return 'Seneste begivenheder'
}

function sendDebates(response){
    return 'Seneste debatter'
}

function sendTrending(response) {
    return 'Mest læste artikler'
}

function sendPerson(response){
    return 'Inger Støjberg'
}

function sendMenu(response){
    return 'menu'
}

function sendError(response) {
    return 'Jeg forstå desværre ikke hvad du mener'
}

module.exports.sendNews = sendNews;
module.exports.sendError = sendError;
module.exports.sendVideos = sendVideos;
module.exports.sendColumns = sendColumns;
module.exports.sendPodcast = sendPodcast;
module.exports.sendKalender = sendKalender;
module.exports.sendDebates = sendDebates;
module.exports.sendTrending = sendTrending;
module.exports.sendPerson = sendPerson;
module.exports.sendMenu = sendMenu;