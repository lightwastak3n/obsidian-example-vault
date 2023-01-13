async function myanimelist(type, tp) {
    let url = await tp.system.clipboard();
    let itemId = url.split("/")[4];
    const response = await fetch(`https://api.jikan.moe/v4/${type}/${itemId}/full`);
    const responseData = await response.json();
	console.log(responseData.data.title)
    let data = {
        'title': responseData.data.title,
        'title_en': responseData.data.title_english,
        'title_jp': responseData.data.title_japanese,
        'url': responseData.data.url,
        'img': responseData.data.images.jpg.large_image_url,
        'synopsis': responseData.data.synopsis,
        'background': responseData.data.background,
        'demographics': dataArrStr(responseData.data.demographics),
        'genres': dataArrStr(responseData.data.genres),
        'themes': dataArrStr(responseData.data.themes),
        'status': responseData.data.status,
        'type': responseData.data.type,
        'score': responseData.data.score,
    }
	// Manga only data
    if (type == 'manga') {
        data.date_from = responseData.data.published.from.split("T")[0];
        data.date_to = dateTo(responseData.data);
        data.authors = dataArrStr(responseData.data.authors);
        data.chapters = responseData.data.chapters;
        data.volumes = responseData.data.volumes;
    }

    // Anime only data
    if (type == 'anime') {
        data.aired_from = responseData.data.aired.from.split("T")[0];
        data.aired_to = airedTo(responseData.data);
        data.trailer_url = responseData.data.trailer.url;
        data.trailer_embed = getEmbedUrl(responseData.data.trailer.embed_url);
        data.source = responseData.data.source;
        data.episodes = responseData.data.episodes;
        data.duration = responseData.data.duration;
        data.year = responseData.data.year;
        data.season = responseData.data.season;
        data.studios = dataArrStr(responseData.data.studios);
        data.crunchyroll = getCrunchyroll(responseData.data);
    }
    return data
}

function dataArrStr(dataArr) {
    let dataStr = "";
    for (let i = 0; i < dataArr.length; i++) {
        dataStr += `'${dataArr[i].name}'`;
        if (i < dataArr.length - 1) {
            dataStr += ', ';		
        }	
    }
    return dataStr;
} 

function getCrunchyroll(data) {
    let allStreams = data.streaming;
    for (let i = 0; i < allStreams.length; i++) {
        if (allStreams[i].name == 'Crunchyroll') {
            return allStreams[i].url;s
        }
    }
    return 'N/A';
}

function dateTo(data) {
    if (data.published.to != null) {
        return data.published.to.split("T")[0];
    }
    else {
        return 'N/A';
    }
}

function airedTo(data) {
    if (data.aired.to != null) {
        return data.aired.to.split("T")[0];
    }
    else {
        return 'N/A';
    }
}

function getEmbedUrl(embedUrl) {
	if (embedUrl != null) {
		return embedUrl.replace('&autoplay=1', '');
	}
	else {
		return 'N/A'
	}
}

module.exports = myanimelist;
