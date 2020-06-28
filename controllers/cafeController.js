const conn = require('../models/database.js')

module.exports.read = (req, res) => {
    let sql = "SELECT * FROM cafe";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.render('cafe/index',{
        cafes: results
      });
    });
}

module.exports.create = (req, res) => {
    res.render('cafe/create')
  }

module.exports.store = (req, res) => {
    let sql = "SELECT * FROM cafe ORDER BY CafeId DESC LIMIT 1" ;
    let last = conn.query(sql, (err, results) => {
        if(err) throw err;
        const data = JSON.parse(JSON.stringify(req.body));
        let newid = parseInt(results[0].CafeId) + 1 ;
        let putdata = {Cafename: data.Cafename, Cafelocation: data.Cafelocation, CafeId: newid };
        let sql2 = "INSERT INTO cafe SET ?";
        let query = conn.query(sql2, putdata,(err, results) => {
            if(err) throw err;
            res.redirect('/cafes');
        });
    });
}

module.exports.edit = (req, res) => {
    const id = req.params.id;
    let sql = "SELECT * FROM cafe WHERE CafeId = ? LIMIT 1";
    let query = conn.query(sql, id, (err, results) => {
      if(err) throw err;
      res.render('cafe/edit',{ cafe: results[0] });
    });
}

module.exports.update = (req, res) => {
  const id = req.params.id;
  const data = JSON.parse(JSON.stringify(req.body));
  let sql = "UPDATE cafe SET Cafename='"+data.Cafename+"', Cafelocation='"+data.Cafelocation+"' WHERE CafeId= '"+id+"'";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/cafes');
  });
}

module.exports.delete = (req, res) => {
  const id = req.params.id;
  let sql = "DELETE FROM cafe WHERE CafeId = ?";
  let query = conn.query(sql,id, (err, results) => {
    if(err) throw err;
      res.redirect('/cafes');
  });
}