const express = require("express");
const app = express();

//Request and Repsonses
// app.use((req, res) => {
//   console.log("wE GOT A NEW REQUEST!");
// //   res.send("HELLO, WE GOT YOUR REQUEST! THIS IS YOUR RESPONSE")
//     // res.send({color:"red"})
//     res.send('<h1>This is my webpage!</h1>')
// });

//Routing
// /cats => 'meow'
// /dogs => 'woof'
// '/'

// app.get('*', (req, res)=>{
//     res.send(`I DON'T KNOW THE PATH!`)
// })

app.get('/', (req, res)=> {
    res.send("THIS IS THE HOMEPAGE!!")
})

app.get('/cats',(req, res)=> {
    res.send('MEOW!!')
})

app.get('/dogs', (req, res)=> {
    res.send("WOOF!!!")
})

app.post('/cats',(req, res)=> {
    res.send("POST REQUEST TO /cats. THIS IS DIFFERENT FROM A GET REQUEST!!")
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    console.log(req.params);
    res.send(`<h1>Browsing the ${subreddit}  subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const {subreddit,postId} = req.params;
    console.log(req.params);
    res.send(`<h1>Viewing POST ID : ${postId} on then subreddit ${subreddit}</h1>`)
})
// /r/SomethingHere

app.get('/search',(req,res) =>{
    const {q} = req.query;
    if(!q){
        res.send('NOTHING FOUND IF NOTHING SEARCHED!')
    }
    res.send( `<h1>Search results for: ${q}</h1>`);
    console.log(req.query);
})


app.get('*', (req, res)=>{
    res.send(`I DON'T KNOW THE PATH!`)
})

app.listen(8080, () => {
  console.log("LISTENING ON PORT 3000!");
});

