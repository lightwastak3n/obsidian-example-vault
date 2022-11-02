function youtube_thumbnail (youtubeLink){
    let youtubeId = youtubeLink.split("=")[1]
    let youtubeThumbnail = "https://img.youtube.com/vi/" + youtubeId + "/0.jpg"
    return youtubeThumbnail
}
module.exports = youtube_thumbnail;
