const conn = require('../models/database.js')

module.exports.read = (req, res) => {
    let sql = "SELECT * FROM type";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.render('type/index',{
        types: results
      });
    });
}

module.exports.create = (req, res) => {
    res.render('type/create')
  }

module.exports.store = (req, res) => {
  let sql = "SELECT * FROM type ORDER BY tid DESC LIMIT 1" ;
  let last = conn.query(sql, (err, results) => {
      if(err) throw err;
      const data = JSON.parse(JSON.stringify(req.body));
      let newid = parseInt(results[0].tid) + 1 ;
      let putdata = {tname: data.tname, tid: newid };
      let sql2 = "INSERT INTO type SET ?";
      let query = conn.query(sql2, putdata,(err, results) => {
          if(err) throw err;
          res.redirect('/type');
      });
  });
}

module.exports.edit = (req, res) => {
    const id = req.params.id;
    let sql = "SELECT * FROM type WHERE tid = ? LIMIT 1";
    let query = conn.query(sql, id, (err, results) => {
      if(err) throw err;
      res.render('type/edit',{ type: results[0] });
    });
}

module.exports.update = (req, res) => {
  const id = req.params.id;
  const data = JSON.parse(JSON.stringify(req.body));
  let sql = "UPDATE type SET tname='"+data.tname+"' WHERE tid= '"+id+"'";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/type');
  });
}

module.exports.delete = (req, res) => {
  const id = req.params.id;
  let sql = "DELETE FROM type WHERE tid = ?";
  let query = conn.query(sql,id, (err, results) => {
    if(err) throw err;
      res.redirect('/type');
  });
}