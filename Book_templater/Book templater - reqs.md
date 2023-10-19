# Book templater - reqs

Use [Scripts/goodreads.js](Scripts/goodreads.js) to access goodreads book link from your clipboard and then scrapes it. You need to download that script and put it in a folder that you specified in User script functions > Script files folder location in Templater settings.
Here is an example of it working:

Here is an example of this being used ![[goodreads.gif]]

## Files needed
- [Scripts/goodreads.js](Scripts/goodreads.js)

## Plugins needed
- Templater

## Config
- Add Scripts as Scripts folder location in Templater config
- To make data available to Templater you need to copy link from Godoreads and have this at the top of your file
```
<%* let bookData = await tp.user.goodreads(tp); %>
```

- This line will get deleted once you run Templater so you can write it like this to get a clean note
```
<%*
let bookData = await tp.user.goodreads(tp);
%> # Title of your note or --- for frontmatter beginning 
```

