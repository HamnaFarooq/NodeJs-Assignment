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
    let last = conn.query(sql, (err, results) => {
        if(err) throw err;
        const data = JSON.parse(JSON.stringify(req.body));
        let newid = 'p' + (parseInt((results[0].Productid).substr(1)) + 1) ;
        let putdata = {Productname: data.Productname, Price: data.Price, Productid: newid };
        let sql2 = "INSERT INTO products SET ?";
        let query = conn.query(sql2, putdata,(err, results) => {
            if(err) throw err;
            res.redirect('/products');
        });
    });
}

module.exports.edit = (req, res) => {
    const id = req.params.id;
    let sql = "SELECT * FROM products WHERE Productid = ? LIMIT 1";
    let query = conn.query(sql, id, (err, results) => {
      if(err) throw err;
      res.render('products/edit',{ product: results[0] });
    });
}

module.exports.update = (req, res) => {
  const id = req.params.id;
  const data = JSON.parse(JSON.stringify(req.body));
  let sql = "UPDATE products SET Productname='"+data.Productname+"', Price='"+data.Price+"' WHERE Productid= '"+id+"'";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/products');
  });
}

module.exports.delete = (req, res) => {
  const id = req.params.id;
  let sql = "DELETE FROM products WHERE Productid = ?";
  console.log(sql);
  let query = conn.query(sql,id, (err, results) => {
    if(err) throw err;
      res.redirect('/products');
  });
}