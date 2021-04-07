const express = require('express');
const serverPort = 8001;
const app = express();
var cors = require ('cors');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

const posts = [
    { id: 1, title: 'One guy murdered', content: 'blabla'},
    { id: 2, title: 'Two guys murdered', content: 'blabla'},
    { id: 3, title: 'PSG won the League Cup', content: 'lol..'}
]

app.get('/', (req, res) => {
    console.log('A new request just hit the API !');
    res.send('Hello dear API client :)');
});

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.get('/posts/:id', (req, res) => {
    const parsedPostId = parseInt(req.params.id)
    const post = posts.find((post) => post.id === parsedPostId);
    if (post) {
      res.send(post);
    } else {
      res.sendStatus(404);
    }
});

app.listen(serverPort, () => console.log('Express server is running'));