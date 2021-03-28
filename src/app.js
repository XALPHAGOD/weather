const path= require("path");
const express= require("express");
const hbs= require("hbs");

const app= express();

const port= process.env.PORT || 9100;   //if not global host then shift to local host with port 9100

// console.log(__dirname);

const staticPath= path.join(__dirname, "../main");      //to link images, css with hbs files
const allReqPath= path.join(__dirname, "../ViewsPartials/views");     //new views directory
const partialsPath= path.join(__dirname, "../ViewsPartials/partials");      //path for partials


app.set("view engine", "hbs");
app.set("views", allReqPath);     //setting views to new directory

hbs.registerPartials(partialsPath);     //register partials


app.use(express.static(staticPath));        //to link images, css with hbs files





app.get("", (req, res)=>{       //home page
    res.render("index");
});

app.get("/weather", (req, res)=>{       
    res.render("weather");
});

app.get("/about", (req, res)=>{       
    res.render("about");
});

app.get("*", (req, res)=>{       
    res.render("error");
});




app.listen(port, ()=>{
    // console.log(`Listening to port ${port}`);
});