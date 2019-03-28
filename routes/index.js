var express = require('express');
var router = express.Router();
var SuperHeroCollection = require("../models/SuperHeroSchema");

/* GET home page. */
router.get('/', function(req, res, next) {
  SuperHeroCollection.find((errors,results)=>
  {
    if(errors) res.render('error',{error:errors});
    res.render('index', { title: 'Index, Get Request', allEntries:results });
  })

});

router.route('/add')
    .get((req,res)=>
    {
      res.render('add')
    })
    .post((req,res)=>
    {
      SuperHeroCollection.create(req.body, (errors,results)=>
      {
        if(errors) res.render('error',{error:errors});
        else res.render('add',{isSent:true})
      });
    });

router.route('/find')
    .get((req,res)=>
    {
      res.render('find')
    })
    .post((req,res)=>
    {
      SuperHeroCollection.findOne({id: req.body.id},(errors,results)=>
      {
        if(errors) res.render('error',{error:errors});
        else res.render('find',{findResults:results})
      });
    });
router.route('/delete')
    .get((req,res)=>
    {
      res.render('delete')
    })
    .post((req,res)=>
    {
      SuperHeroCollection.deleteOne({id:req.body.id},(errors)=>
      {
        if(errors) res.render('error',{error:errors});
        else res.render('delete',{isSent:true});
      });
    });

router.route('/edit')
    .get((req,res)=>
    {
      res.render('edit')
    })
    .post((req,res)=>
    {
      SuperHeroCollection.find({id:req.body.id},(errors,results)=>
      {
        if(errors) res.render('error',{error:errors});
        else {
          console.log(results);
          res.render('editChange',{findResults:results});
        }
      });
    });

router.post('/editChange',(req,res)=>
{
  res.send('BLEEP BLOOP BLEEP');
});
module.exports = router;
