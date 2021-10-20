const express = require("express");
const router = express.Router();

router.get("/", (req,res) =>{
    res.json({
        nama : "Susila Tropika",
        "Tanggal Lahir" : "27-02-1993",
        "jenis Kelamin" : "Laki-Laki",
        Jurusan : "Sistem informasi",
        hobi : "ngoding"
    });
});

module.exports =router