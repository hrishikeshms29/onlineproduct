const express=require('express')
const app=express()
//middle ware
app.use(express.urlencoded({ extended: true }))
//app.use(express.json())

//get routes
app.get('/',(req,res)=>{
res.sendFile(__dirname+'/index.html')
})
app.get('/dashboard',(req,res)=>{
res.sendFile(__dirname+'/dashboard.html')
})
app.get('/product',(req,res)=>{
res.sendFile(__dirname+'/product.html')
})
app.get('/cart',(req,res)=>{
res.sendFile(__dirname+'/cart.html')
})
app.get('/billing',(req,res)=>{
res.sendFile(__dirname+'/cart.html')
})
app.get('/contact',(req,res)=>{
res.sendFile(__dirname+'/contact.html')
})
app.get('/contactsuc',(req,res)=>{
res.sendFile(__dirname+'/contactsuc.html')
})

//post routes
app.post('/signup',(req,res)=>{
console.log(req.body)
const username=req.body.username
const email=req.body.email
const pass=req.body.password
if(username&&email&&pass){
console.log("entered here")
res.redirect('/dashboard')
}
res.sendFile(__dirname+'/error.html')
})

app.post('/cpost',(req,res)=>{
const uname=req.body.uname
const email=req.body.email
const msg=req.body.msg
if(uname&&email&&msg){
res.redirect('/contactsuc')
}
res.redirect('/contact')
})


app.listen(3000,(req,res)=>{
console.log("Server started at port 3000")
})
