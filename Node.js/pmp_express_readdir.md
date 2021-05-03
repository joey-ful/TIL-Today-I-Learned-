# TIL-Today-I-Learned- 20200613(Sat).md

## pmp

`npm install pm2 -g`

`pm2 start main.js --watch` with the `--watch` tag `node app.js` is automatically done after code editing (just need to reload the localhost web page)

`pm2 monit` (press `q` to quit)

`pm2 list`

`pm2 stop app`

---

## express

The two following codes are identical
`app.get('/', (req, res) => res.send('Hello World!'))`

```
app.get('/', function(req, res) {
    return res.send('Hello World!')
});
```
- Instead of using query string, the following code uses path and send parameter as output.
`/` is the path
```
app.get('/page/pageId/chapterId', function(request, response) {
  response.send(request.params);
 });
 ```
 If I type `localhost:3000/page/CSS/WEB` then I will get
 `{"pageId":"CSS","chapterId":"WEB")}`

---
The two following codes are identical
`app.listen(3000, () => console.log('Example app listening on port 3000!'))

```
app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
});
```

---


## Node.js

```
var testFolder = './data';
var fs = require('fs');

fs.readdir(testFoler, function(error, filelist) {
  console.log(filelist);
})

>>['CSS', 'HTML', 'JavaScript']
```

