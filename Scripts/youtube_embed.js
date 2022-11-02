function youtube_embed (youtubeLink){
    let youtubeId = youtubeLink.split("=")[1]
    return youtubeId
}
module.exports = youtube_embed;
