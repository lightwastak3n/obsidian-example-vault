<%*
let data = await tp.user.myanimelist('anime', tp);
%>---
date_created: 2023-01-10
title: "<% data.title %>"
mal_link: "<% data.url %>"
studios: [<% data.studios %>]
season: <% data.season %>
year: <% data.year %>
anime_status: <% data.status %>
genres: [<% data.genres %>]
themes: [<% data.themes %>]
source: <% data.source %>
cover: "<% data.img %>"
mal_score: <% data.score %>
my_score: 
date_started:
date_finished:
status: 🟨
---
# <% tp.file.title %>
[MAL link](<% data.url %>)
<%* if (data.crunchyroll != "N/A") { %><%`[Crunchyroll](${data.crunchyroll})` %>
<%* } else { %>
No Crunchyroll link found
<%* } %>
![|100](<% data.img %>)

## Trailer
<%* if (data.trailer_embed != "N/A") { %><iframe height=315 width=560 src="<% data.trailer_embed %>"></iframe>
<%* } else { %>
No trailer found
<%* } %>



## Plot
<% data.synopsis %>

## Review

