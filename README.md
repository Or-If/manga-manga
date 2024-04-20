# Manga Manga

> This is a manga viewer. We should be able to view manga!

We're going to use the [Mangadex API](https://api.mangadex.org/docs/)

# Functional Requirements:

1. We show a list of manga on the page.  
   a. If possible, let's show an image.
2. The manga is paginated.
3. Ordered by name or some kind of identifier.
4. Filter by tag.
5. Go to different pages.

# Non-functional Requirements:

1. Caching.  
   a. Holds information so we don't have to refetch.  
   b. Makes it so that going from page to page is fast.  

2. Use components to display manga. (Not all just one file.)
