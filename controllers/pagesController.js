const conn = require('../models/database.js')

module.exports.read = (req, res) => {
    let sql = "SELECT * FROM page";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.render('pages/index',{
        pages: results
      });
    });
}

module.exports.create = (req, res) => {
    res.render('pages/create')
  }

module.exports.store = (req, res) => {
    let sql = "SELECT * FROM page ORDER BY pid DESC LIMIT 1" ;
    let last = conn.query(sql, (err, results) => {
        if(err) throw err;
        const data = JSON.parse(JSON.stringify(req.body));
        let newid = parseInt(results[0].pid) + 1 ;
        let putdata = {pname: data.pname, pid: newid };
        let sql2 = "INSERT INTO page SET ?";
        let query = conn.query(sql2, putdata,(err, results) => {
            if(err) throw err;
            res.redirect('/pages');
        });
    });
}

module.exports.edit = (req, res) => {
    const id = req.params.id;
    let sql = "SELECT * FROM page WHERE pid = ? LIMIT 1";
    let query = conn.query(sql, id, (err, results) => {
      if(err) throw err;
      res.render('pages/edit',{ page: results[0] });
    });
}

module.exports.update = (req, res) => {
  const id = req.params.id;
  const data = JSON.parse(JSON.stringify(req.body));
  let sql = "UPDATE page SET pname='"+data.pname+"' WHERE pid= '"+id+"'";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/pages');
  });
}

module.exports.delete = (req, res) => {
  const id = req.params.id;
  let sql = "DELETE FROM page WHERE pid = ?";
  let query = conn.query(sql,id, (err, results) => {
    if(err) throw err;
      res.redirect('/pages');
  });
}