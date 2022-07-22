var express = require('express')
const tableschema = require('./tableschema')
var router = express.Router()


router.get('/get', async (req, res) => {
    try {
        var data = await tableschema.find();
        res.status(200).send(data);
    }
    catch (err) {
        console.log('Unable to retrieve data from database')
    }
})

router.post('/insert', async (req, res) => {
    try{
    var data = new tableschema({
        id:req.body.id,
        MovieName: req.body.moviename,
        Rating: req.body.rating,
        Cast: req.body.cast,
        Genre: req.body.genre,
        ReleaseDate: req.body.date
    });
    await data.save()
    res.status(200).send('Data inserted successfully')
}
catch(err)
{
    console.log('Data not inserted successfully')
}
})

router.put('/update',async(req,res)=>
{
    try
    {
    var Id =req.body.id
    var movie=req.body.moviename;
    var data=await tableschema.updateOne({id:Id},{$set:{MovieName:movie}});
    res.status(200).send('Updated successfully');
    }
    catch(err)
    {
        console.log('Unable to update data')
    }
});

router.delete('/delete/:id',async(req,res)=>
{
    try{
    var Id=req.params.id;
    await tableschema.deleteOne({id:Id}).then(e=>
        {
            res.status(200).send("Deleted successfully");
        });  
    }
    catch(err)
    {
        console.log('Unable to delete data')
    }
})

module.exports = router