- This Project is not more focus on better UI but it is for better Data layer and UI layer matching .... so user gets a better performance when he is using that.

- Search functionality

  - it uses a Debouncing to getting a suggestion when typing the search box

- Live Chats
  - In that we use Long polling to fetch the chats which are new present in the api
  - but after a certain limit this chat will we automatically delete from the dom which can help to the do not crash the web page

Debouncing :
typing slow = 200ms
typing slow = 30ms

debouncing with 200ms

- if difference between 2 keys strokes is <200ms - DECLINE API CALL
- > 200ms make an API Call

- cache:
  time complexity to search in array = o(n)
  time complexity to search in object = o(n)

<!-- live chat >>>>infinte Scroll >>>> pagination -->

- Get data live

  - web sockets : 2 way connection : e.g : Trading, whatsapp
  - API Polling(long polling) : e.g : gmail, crickbuzz

- Update the UI layer
  - cleaning up the pages deleting the chat
