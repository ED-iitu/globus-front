const express = require('express')
const path = require('path');
const app = express()
const PORT = process.env.PORT || 8181

app.use(express.static(path.join(__dirname, '/build')));
app.use('/map', express.static(path.join(__dirname, '/map')));

// app.get('/map', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/map/index.html'));
// });

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT ${PORT}`);
})