---
tags: [yearly_note]
---
# <% tp.file.title %>
Quarters [[<% tp.file.title %>-Q1]] | [[<% tp.file.title %>-Q2]] | [[<% tp.file.title %>-Q3]] | [[<% tp.file.title %>-Q4]]
Months: <%*
let year = tp.file.title;
let links = [];
let months = {
	"01": "Jan", "02": "Feb", "03": "Mar", "04": "Apr",
    "05": "May", "06": "Jun", "07": "Jul", "08": "Aug",
    "09": "Sep", "10": "Oct", "11": "Nov", "12": "Dec",
}
for (let i = 1; i < 13; i++){
    if (i < 10) {
        p = "0" + i
    } else {
        p = i
    }
	links.push(`[[${year}-${p}|${months[p.toString()]}]]`)
}
tR += links.join(" | ")
%>
