---
tags: [daily_note]
---
# <% tp.file.title %>
[[Periodic_notes/<% tp.date.now("YYYY", -1, tp.file.title, "YYYY-MM-DD") %>/<% tp.date.now("MM-MMM", -1, tp.file.title, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>|❮Yesterday]] | [[Periodic notes/Weekly/<% moment(tp.file.title,"YYYY-MM-DD").format("YYYY") %>-W<% moment(tp.file.title,"YYYY-MM-DD").week() %>|Week]] | [[Periodic_notes/<% tp.date.now("YYYY", +1, tp.file.title, "YYYY-MM-DD") %>/<% tp.date.now("MM-MMM", +1, tp.file.title, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", +1, tp.file.title, "YYYY-MM-DD") %>|Tomorrow❯]]

## Tasks
```tasks
due on <% tp.file.title %>
```
- Overdue
```tasks
not done
due before <% tp.file.title %>
```
