---
tags: [daily_note]
---
# <% tp.file.title %>
[[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>|❮Yesterday]] | [[<% moment(tp.file.title,"YYYY-MM-DD").format("YYYY") %>-W<% moment(tp.file.title,"YYYY-MM-DD").week() %>|Week]] | [[<% tp.date.now("YYYY-MM-DD", +1, tp.file.title, "YYYYY-MM-DD") %>|Tomorrow❯]]

## Tasks
```tasks
due on <% tp.file.title %>
```
- Overdue
```tasks
not done
due before <% tp.file.title %>
```
