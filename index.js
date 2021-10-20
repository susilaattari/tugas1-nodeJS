const express = require("express");
const app = express();
const port =8000;
const apiRouterSiswa = require("./dataSiswa");


app.get("/", (req,res)=>{
    res.send("selamat datang di data mahasiswa")
})
app.use("/dataSiswa",apiRouterSiswa);

app.listen(port, ()=>{
    console.log(`server berjalan di port ${port}`)
});



