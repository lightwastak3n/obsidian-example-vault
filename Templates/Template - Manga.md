<%*
let data = await tp.user.myanimelist('manga', tp);
%>---
date_created: {{date}}
title: "<% data.title %>"
mal_link: "<% data.url %>"
authors: [<% data.authors %>]
chapters: <% data.chapters %>
manga_status: <% data.status %>
genres: [<% data.genres %>]
themes: [<% data.themes %>]
cover: "<% data.img %>"
mal_score: <% data.score %>
my_score: 
date_started:
date_finished:
status: 🟨
---
# <% tp.file.title %>
MyAnimeList: [link](<% data.url %>)
![|100](<% data.img %>)

## Plot
<% data.synopsis %>

## Review

