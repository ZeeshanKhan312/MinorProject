const {database} = require('./Models/index');
const AdminRoutes = require('./Routes/admins')
const VoterRoutes = require('./Routes/voters')
const express = require('express')
const app = express();
const path = require('path');

const PORT = 8080;
app.listen(PORT,()=>{
    console.log('listening on port 8080')
})
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

database.authenticate()
.then(()=>console.log("Connected to Database..."))
.catch(err=>console.log(err))
database.sync({alter: true})

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'public','voterLogin.html'));
})

app.use('/voters',VoterRoutes);
app.use('/admin',AdminRoutes);
