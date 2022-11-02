---
cssClasses: cards
---
# Youtube dashboard

```dataview
table without id ("![](" + thumbnail + ")") as Cover , file.link as Name
from #youtube_thumbnail AND !"Templates"
```