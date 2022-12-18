---
tags: [quarterly_note]
---
# <% tp.file.title %>
Months: <%*
let year = tp.file.title.split("-Q")[0];
let quarter = tp.file.title.split("-Q")[1];
let start = (quarter-1)*3;
let end = start + 3;
let links = [];
for (let i = start; i < end; i++){
    if (i < 9) {
        p = "0" + (i + 1)
    } else {
        p = i + 1
    }
	links.push(`[[${year}-${p}]]`)
}
tR += links.join(" | ")
%>
