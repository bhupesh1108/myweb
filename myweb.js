var express=require('express');
var app=express();
app.use(express.static('public'))
app.get("/",(req, res)=>{res.send("Welcome to  GIT");});
app.get("/product",(req, res)=>{var p={ "id":45, "title":"GITHUB","description":"CONNECTING PEOPLE ", "unitprice":14, "quatity":7000 };
                                       res.send(p);
});
app.listen(2000);
console.log("App is listening on port 2000");