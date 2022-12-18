---
tags: [weekly_note]
---
# <% tp.file.title %>
[[<%tp.date.now("YYYY-[W]ww", -7, tp.file.title, "YYYY-[W]ww") %>|<Previous Week]] | [[<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-[W]ww") %>|Month]] | [[<%tp.date.now("YYYY-[W]ww", 7, tp.file.title, "YYYY-[W]ww") %>|Next Week>]]
Days: [[<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-[W]ww") %>|Monday]] [[<% tp.date.weekday("YYYY-MM-DD", 1, tp.file.title, "YYYY-[W]ww") %>|Tuesday]] [[<% tp.date.weekday("YYYY-MM-DD", 2, tp.file.title, "YYYY-[W]ww") %>|Wednesday]] [[<% tp.date.weekday("YYYY-MM-DD", 3, tp.file.title, "YYYY-[W]ww") %>|Thursday]] [[<% tp.date.weekday("YYYY-MM-DD", 4, tp.file.title, "YYYY-[W]ww") %>|Friday]] [[<% tp.date.weekday("YYYY-MM-DD", 5, tp.file.title, "YYYY-[W]ww") %>|Saturday]] [[<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-[W]ww") %>|Sunday]]

## Todo
```tasks
due after <% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-[W]ww") %>
due before <% tp.date.now("YYYY-MM-DD", 7, tp.file.title, "YYYY-[W]ww") %>
```
