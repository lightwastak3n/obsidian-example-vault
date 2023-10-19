async function goodreads(tp) {
    const url = await tp.system.clipboard();
    const page = await tp.obsidian.request({ url });
    const p = new DOMParser();
    const doc = p.parseFromString(page, "text/html");

    
    const json = JSON.parse(
        doc.querySelector("script[type='application/ld+json']").innerHTML
    );

    const authors = [];
    for (let i = 0; i < json.author.length; i++) {
        authors.push(json.author[i].name);
    }

    const publicationDate = datePublished(doc);

    let data = {
        "title": json.name,
        "authors": authors,
        "date_published": publicationDate,
        "link": url,
        "type": json["@type"],
        "format": json.bookFormat,
        "image": json.image,
        "pages": json.numberOfPages,
        "language": json.inLanguage,
        "isbn": json.isbn,
        "rating": json.aggregateRating.ratingValue,
    }

    return data;
}


function datePublished(doc) {
    const publicationInfoElement = doc.querySelector('[data-testid="publicationInfo"]');
    console.log(publicationInfoElement.innerText)
    const rawDate = publicationInfoElement.innerText.split("published")[1].trim();
    const dateObject = new Date(rawDate);

    // format to YYYY-MM-DD
    const datePublished = dateObject.toISOString().split("T")[0];
    return datePublished;
}

module.exports = goodreads;
