---
tags: [monthly_note]
---
# <% tp.file.title %>
Weeks: <%*
let start_of_month = moment(tp.file.title,'YYYY-MM').startOf('month').startOf('IsoWeek');
let end_of_month = moment(tp.file.title,'YYYY-MM').endOf('month').startOf('IsoWeek'); 
let weeks_in_month = end_of_month.diff(start_of_month, 'weeks') + 1;
tR += Array(weeks_in_month).fill(null).map((x, i) => moment(tp.file.title,'YYYY-MM').startOf('month').startOf('IsoWeek').add(i, 'w').format("[[[]GGGG-[W]WW[|][W]WW[]]]")).join(' ') 
%>

## Todo
```tasks
due after <% moment(tp.file.title,'YYYY-MM-DD').startOf('month').format("YYYY-MM-DD") %>
due before <% moment(tp.file.title,'YYYY-MM-DD').endOf('month').format("YYYY-MM-DD") %>
short mode
```
