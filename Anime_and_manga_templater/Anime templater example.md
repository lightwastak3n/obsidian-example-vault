<%*
let data = await tp.user.myanimelist('anime', tp);
%># Anime templater example

## Data extracted
| Data           | Templater               |
| -------------- | ----------------------- |
| Title          | <% data.title %>        |
| Title English  | <% data.title_en %>     |
| Title Japanese | <% data.title_jp %>     |
| Url            | <% data.url %>          |
| Demographics   | <% data.demographics %> |
| Episodes       | <% data.episodes %>     |
| Duration       | <% data.duration %>     |
| Genres         | <% data.genres %>       |
| Themes         | <% data.themes %>       | 
| Year           | <% data.year %>         |
| Season         | <% data.season %>       |
| Source         | <% data.source %>       |
| Trailer        | <% data.trailer_url %>  |
| Aired from     | <% data.aired_from %>   |
| Aired to       | <% data.aired_to %>     |
| Status         | <% data.status %>       |
| Studios        | <% data.studios %>      |
| Crunchyroll    | <% data.crunchyroll %>  |
| Type           | <% data.type %>         |
| Score          | <% data.score %>        |

## Cover image
![](<% data.img %>)

## Trailer embed
<iframe height=315 width=560 src="<% data.trailer_embed %>"></iframe>

## Synopsis
<% data.synopsis %>

## Background
<% data.background %>

