The server is hosted at https://news-backend-r31m.onrender.com.

Also the web interface of the entire application will be available via the link: https://ihorkozloff.github.io/news-front/#/news.

The application web interface files themselves can be downloaded or viewed here: https://github.com/IhorKozloff/news-front. 

## The server accepts requests along the following routes:

### Auth routes
#### 1. POST: /api/user/register 
The body object must contain the following fields: name, email, password.
For example
```
{name: 'John', email: 'john@gmail.com', password: '123456'}
```
Will be received object with registered users data.
#### 2. POST: /api/user/login
The body object must contain the following fields: email, password.
For example
```
{ email: 'john@gmail.com', password: '123456'}
```
Will be received object with registered users data includes token.
#### 3. GET: /api/user/logout/:id
- Request must have auth header with token.
- :id - users id.
Fore example:
```
axios.get(/api/user/logout/83v678379t7895t705370, {
  headers: {
    'Authorization': 'Bearer eyen83n83703dm735778783578387570350357035067570563705673w5793y9yw58ly58l.yyw38yc3897cy789cy7c3y7w3y7c5y37cy7y78',
  }
});
```  
Will be received empty object - no content.
### News routes
#### 1.GET: /api/news
Will be received object with news data.
### Comments routes
#### 1.GET: /api/comments/:id
- id it is news id
Fore example:
```    
axios.get(/api/comments/83v678379t7895t705370);
``` 
Will be received object with all comments about current news.
#### 2.POST: /api/comments/ 
The body object must contain the following fields { text, news_id, img_urls }; img_urls - must be array contains strings, optional property.
Also need authorization header with token
For example:
```
axios.post(/api/comments, {
  body: {
    text: 'Hellow',
      news_id: '83v678379t7895t705370',
      img_urls: [
        'http://qwe.com/djkkjkdcdklmcc'
      ]
  },
  headers: {
    'Authorization': 'Bearer eyen83n83703dm735778783578387570350357035067570563705673w5793y9yw58ly58l.yyw38yc3897cy789cy7c3y7w3y7c5y37cy7y78',
  }
});
```    
Will be received object with added comment data.
### Replyes routes
#### 1.GET: /api/reply/:newsId?parent_id=parentId
Where :newsId - is id current news, and one query params - parentId - is comments id, whos reply is.
For example:
```
axios.get(/api/reply/83v678379t7895t705370?parent_id=8r83t8mx35897t9058ct7mc);
```
Will be received object with all replyes of current comment.
#### 2.POST: /api/reply
The body object must contain the following fields { parent_id, text, news_id, img_urls }, img_urls - must be array contains strings, optional property.
Also need authorization header with token
For example:
```
axios.post(/api/reply, {
  body: {
      text: 'Hellow',
      news_id: '83v678379t7895t705370',
      img_urls: [
        'http://qwe.com/djkkjkdcdklmcc'
      ],
      parent_id: 'nx4ytm83tz8w89t8w7tm3t8'
  },
  headers: {
    'Authorization': 'Bearer eyen83n83703dm735778783578387570350357035067570563705673w5793y9yw58ly58l.yyw38yc3897cy789cy7c3y7w3y7c5y37cy7y78',
  }
});
```
Will be received object with all replyes of current reply.
### Upload Image routes.
#### 1. POST: /api/upload
The body object must contain FormData type.
Also need authorization header with token
For example:
```   
axios.post(/api/upload, {
  body: new FormData()
  headers: {
    'Authorization': 'Bearer eyen83n83703dm735778783578387570350357035067570563705673w5793y9yw58ly58l.yyw38yc3897cy789cy7c3y7w3y7c5y37cy7y78'
        }
    });
```
Will be received object with image url.
     
