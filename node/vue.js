const express=require('express');
const mysql=require('mysql');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({ extended: true }));

const pool=mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'woaini00..',
  database:'item',
  port:3306
})

app.post('/', function(req,res) { 
  res.setHeader('Access-Control-Allow-Origin','*')
  pool.getConnection(function(err,con){
    if(err) throw err
    var sql=`select * from loupan where fenlei='${req.body.fenlei}' limit ${req.body.one},${req.body.two}`;
    con.query(sql,function(err,rows){
	 if(err) throw err
      res.send(rows)
      con.release()
           
    })
  })
})



app.get('/news',function (req,res) {
  res.setHeader('Access-Control-Allow-Origin','*')
  pool.getConnection(function(err,con){
      if (err) throw err;
      var sql = 'select * from news'
      con.query(sql,function(err,rows){
        if (err) throw err;
          res.send(rows)
          con.release()
      })
  })
})


app.post('/xiangq', function(req, res) {
  
  res.setHeader('Access-Control-Allow-Origin','*')
  pool.getConnection(function(err,con){
    if(err) throw err
    console.log("dsadsadsadsa")
    var sql=`select * from loupan where id=${req.body.id}`
    con.query(sql,function(err,rows){
      if(err) throw err
      console.log(rows)
      res.send(rows)    
      con.release()
      
      
    })
  })
});

app.listen(8000,function(){
  console.log("okokok")
})