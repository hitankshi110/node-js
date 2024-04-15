const { ObjectId } = require("mongodb");
const main = require("../models/dbconfig"); 
const catform = async(req,res) =>{
    let db = await main();
    const collection = db.collection('categorydata');

    let allcat = await collection.find({}).toArray();

    res.render('category',{
        catInfo: allcat,
        editInfo: [],
    });
};
// params for id from url
// body for id  from form
const saveCatdata = async(req, res) => {
    let db = await main();
    const collection = db.collection('categorydata');
    let id=req.body.hid
    let obj = {
        name: req.body.catname
    };
    if(id != ''){
        // update
        let ans = collection.updateOne({_id :new ObjectId( id)},{$set:obj}); 
    }else{
        // insert
        let ans =  collection.insertOne(obj); 
    }
   
    res.redirect("/category/"); 
};
const deleteCatdata = async (req, res) => {
    try {
        let db = await main();
        const collection = db.collection("categorydata");
        
        let delete_id = req.params.i;
        let ans = await collection.deleteOne({ _id: new ObjectId(delete_id) });

        res.redirect("/category/");
    } catch (error) {
        console.error("Error deleting", error);
        res.status(500).send("Internal Server Error");
    }
};

const editCatData = async (req, res) => {
        let db = await main();
        const collection = db.collection("categorydata");
        let edit_id = req.params.i;
        let allcat = await collection.find({}).toArray();
     
        let editCat = await collection.find({ _id: new ObjectId(edit_id)}).toArray();

        res.render('category',{
            catInfo: allcat,
            editInfo: editCat,
        });
};
module.exports = { catform, saveCatdata, deleteCatdata, editCatData };
