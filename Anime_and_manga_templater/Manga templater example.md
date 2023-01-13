<%*
let data = await tp.user.myanimelist('manga', tp);
%># Manga templater example

## Data extracted
| Data           | Templater               |
| -------------- | ----------------------- |
| Title          | <% data.title %>        |
| Title English  | <% data.title_en %>     |
| Title Japanese | <% data.title_jp %>     |
| Authors        | <% data.authors %>      |
| Url            | <% data.url %>          |
| Chapters       | <% data.chapters %>     |
| Volumes        | <% data.volumes %>      |
| Demographics   | <% data.demographics %> |
| Genres         | <% data.genres %>       |
| Themes         | <% data.themes %>       | 
| Date from      | <% data.date_from %>    |
| Date to        | <% data.date_to %>      |
| Status         | <% data.status %>       |
| Type           | <% data.type %>         |
| Score          | <% data.score %>        |

## Cover image
![](<% data.img %>)

## Synopsis
<% data.synopsis %>

## Background
<% data.background %>
