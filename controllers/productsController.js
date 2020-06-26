const conn = require('../models/database.js')

module.exports.read = (req, res) => {
    let sql = "SELECT * FROM products";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.render('products/index',{
        products: results
      });
    });
}

module.exports.create = (req, res) => {
    res.render('products/create')
  }

module.exports.store = (req, res) => {
    let sql = "SELECT * FROM products ORDER BY Productid DESC LIMIT 1" ;
    // let newid = 1;
    let last = conn.query(sql, (err, results) => {
        if(err) throw err;
        const data = JSON.parse(JSON.stringify(req.body));
        let newid = 'p' + (parseInt((results[0].Productid).substr(1)) + 1) ;
        let putdata = {Productname: data.Productname, Price: data.Price, Productid: newid };
        let sql2 = "INSERT INTO products SET ?";
        let query = conn.query(sql2, putdata,(err, results) => {
            if(err) throw err;
            res.send('stored');
        });
    });
}

  module.exports.update = (req, res) => {
    res.send('update')
  }

  module.exports.delete = (req, res) => {
    res.send('delete')
  }


//   //route for insert data
//   app.post('/save',(req, res) => {
//     let data = {product_name: req.body.product_name, product_price: req.body.product_price};
//     let sql = "INSERT INTO product SET ?";
//     let query = conn.query(sql, data,(err, results) => {
//       if(err) throw err;
//       res.redirect('/');
//     });
//   });
   
//   //route for update data
//   app.post('/update',(req, res) => {
//     let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.body.id;
//     let query = conn.query(sql, (err, results) => {
//       if(err) throw err;
//       res.redirect('/');
//     });
//   });
   
//   //route for delete data
//   app.post('/delete',(req, res) => {
//     let sql = "DELETE FROM product WHERE product_id="+req.body.product_id+"";
//     let query = conn.query(sql, (err, results) => {
//       if(err) throw err;
//         res.redirect('/');
//     });
// });