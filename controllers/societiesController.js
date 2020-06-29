const conn = require('../models/database.js')

module.exports.read = (req, res) => {
    let sql = "SELECT * FROM societies";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.render('societies/index',{
        societies: results
      });
    });
}

module.exports.create = (req, res) => {
    res.render('societies/create')
  }

module.exports.store = (req, res) => {
    let sql = "SELECT * FROM societies ORDER BY socid DESC LIMIT 1" ;
    let last = conn.query(sql, (err, results) => {
        if(err) throw err;
        const data = JSON.parse(JSON.stringify(req.body));
        let newid = parseInt(results[0].socid) + 1 ;
        let putdata = {socname: data.socname, type: data.type, socId: newid };
        let sql2 = "INSERT INTO societies SET ?";
        let query = conn.query(sql2, putdata,(err, results) => {
            if(err) throw err;
            res.redirect('/societies');
        });
    });
}

module.exports.edit = (req, res) => {
    const id = req.params.id;
    let sql = "SELECT * FROM societies WHERE socid = ? LIMIT 1";
    let query = conn.query(sql, id, (err, results) => {
      if(err) throw err;
      res.render('societies/edit',{ society: results[0] });
    });
}

module.exports.update = (req, res) => {
  const id = req.params.id;
  const data = JSON.parse(JSON.stringify(req.body));
  let sql = "UPDATE societies SET socname='"+data.socname+"', type='"+data.type+"' WHERE socid= '"+id+"'";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/societies');
  });
}

module.exports.delete = (req, res) => {
  const id = req.params.id;
  let sql = "DELETE FROM societies WHERE socid = ?";
  let query = conn.query(sql,id, (err, results) => {
    if(err) throw err;
      res.redirect('/societies');
  });
}