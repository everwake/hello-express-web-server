const express = require('express');
const hbs = require('hbs');
const app = express();
let port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partial');

hbs.registerHelper('getCurrentYear', ()=> {
  return new Date().getFullYear()
});

app.use(express.static(__dirname + '/public'));

app.use((req, res, next)=> {
  let now = new Date().toString();
  console.log(`${now}: ${req.method}: ${req.url}`)
  next();
});

//make a handler for get http request
app.get("/", (req, res)=> {
    // send response for http request
    res.send("Hello Express");

    // app.get("/help", (rq, res)=> {
    //   res.sendFile(__dirname + '/public/help.html')
    // })

    app.get('/about', (req, res) => {
        res.render('about.hbs', {
          pageTitle: 'About Page.'
        });
      });

    app.get('/main', (req,res) => {
      res.render('main.hbs', {
        pageTitle: 'Main Page'
      }) 
    })
})

app.listen(port, () => {
  console.log(`Server is up on ${port}`)
});