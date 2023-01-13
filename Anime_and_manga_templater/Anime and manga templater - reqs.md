# Anime and manga templater - reqs

This uses [Jikan - Unofficial MyAnimeList API](https://jikan.moe/) to fetch data from MyAnimeList and makes it available to Templater plugin.
In order to use it you need to add to clipboard (copy) MAL link for the anime/manga you wish to add.
If you want to test it out and see all the data that this fetches you can copy anime or manga link from MAL and run Templater in [[Anime templater example]] and [[Manga templater example]] notes.
Templates [[Template - Anime]] and [[Template - Manga]] show example of a template to be used with this.
For complete list of properties check this note [[Anime and manga properties]].

If you want to add more properties for yourself (rank, popularity,...) you can look at Jikan documentation [Jikan REST API v4 Docs](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeFullById) and add the appropriate code in the `Scripts/myanimelist.js`. 

Here is an example of this being used ![[Obsidian_anime_manga.gif]]

## Files needed
- [Scripts/myanimelist.js](Scripts/myanimelist.js)

## Plugins needed
- Templater

## Config
- Add Scripts as Scripts folder location in Templater config
- To make data available to Templater you need to copy link from MAL and have this at the top of your file
```
<%* let data = await tp.user.myanimelist('anime', tp); %>
```

- If the link is for the manga just replace `anime` with `manga`.
```
<%* let data = await tp.user.myanimelist('manga', tp); %>
```

- This line will get deleted once you run Templater so you can write it like this to get a clean note
```
<%* 
let data = await tp.user.myanimelist('anime', tp); 
%> # Title of your note or --- for frontmatter beginning 
```

