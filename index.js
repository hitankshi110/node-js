var express=require('express')
var path=require('path')
const cat_router=require('./Routes/CategoryRoutes')
const app=express()
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')));

app.use("/category", cat_router);

app.get("/", (req,res) => {
    res.render("homepage")
});

console.log(path.join(__dirname,'public'));

app.listen(8080,"localhost",()=>{
    console.log("running port 8080")
})
