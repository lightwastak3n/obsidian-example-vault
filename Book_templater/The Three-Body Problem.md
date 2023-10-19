<%*
let bookData = await tp.user.goodreads(tp);
%>---
title: "<% bookData.title %>"
authors: [<% bookData.authors %>]
date_published: <% bookData.date_published %>
link: "<% bookData.link %>"
type: <% bookData.type %>
format: <% bookData.format %>
image: "<% bookData.image %>"
pages: <% bookData.pages %>
language: <% bookData.language %>
isbn: <% bookData.isbn %>
goodreads_rating: <% bookData.rating %>
---
# The Three-Body Problem
Link: [Goodreads link](<% bookData.link %>)
![|200](<% bookData.image %>)

