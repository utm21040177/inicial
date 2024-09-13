const mongoose = require('mongoose')
const { type } = require('os')
const urlbd="mongodb://localhost:27017/UTMA"

mongoose.connect(urlbd)
.then(()=>{
    console.log("Funciona la conexion a la base de datos")
})
.catch((error)=>{
    console.log("No funciona la conexion ala base de datos", 
    error)
})

const EsquemaAlumnos = new mongoose.Schema({
    name:{
        type:String
    },
    apepat:{
        type:String
    },
    edad:{
        type:Number
    }
})
const modeloAlumnos = new mongoose.model("Tabla de alumnos", EsquemaAlumnos)

modeloAlumnos.create({
    name:"Laisha",
    apepad:"Hernanez",
    edad:21
})