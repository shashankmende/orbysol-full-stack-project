
const Clinic = require('../models/clinics-models')
const Patients = require('../models/patients-models')
const Address = require('../models/address-model')
const Provider = require('../models/provider-model')

const home = async (req,res)=>{
    try{
        res.send("we are in controllers.js jdieie")

    }
    catch(e){
        
        console.log('error',e)
    }
}

const register = async(req,res)=>{
    try{
        // const {clinicName,deviceName,enrollmentType} = req.body
        
        // await Clinic.create({clinicName,deviceName,enrollmentType})
        
        // res.status(201).send('user details obtained successfuly')
        // console.log("request body",req.body)
        // const {lastName,firstName,middleName,dob,gender,pacemaker,icd} = req.body
        // await Patients.create({lastName,firstName,middleName,dob,gender,pacemaker,icd})
       
        // res.status(201).send("patient details recieved successfully")
    // const {address1,address2,city,state,primaryPhone,secondaryPhone,zip} = req.body
    // await Address.create({address1,address2,city,state,primaryPhone,secondaryPhone,zip})
    // res.status(201).send("Address  recieved successfully")

    const {orderProvider,readingProvider,referringProvider} = req.body
        await Provider.create({orderProvider,readingProvider,referringProvider})

    }
    catch(e){
        console.log("error in registration page",e)
        res.status(500).send('Internal Server Error');

    }
}

module.exports.home = home
module.exports.register = register
