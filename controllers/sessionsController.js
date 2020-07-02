const conn = require('../models/database.js')

module.exports.read = (req, res) => {
    let sql = "SELECT * FROM sessions";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.render('sessions/index',{
        sessions: results
      });
    });
}

module.exports.create = (req, res) => {
    res.render('sessions/create')
  }

module.exports.store = (req, res) => {
    let sql = "SELECT * FROM sessions ORDER BY sesid DESC LIMIT 1" ;
    let last = conn.query(sql, (err, results) => {
        if(err) throw err;
        const data = JSON.parse(JSON.stringify(req.body));
        let newid = parseInt(results[0].sesid) + 1 ;
        let putdata = {stitle: data.stitle, sdate: data.sdate, sesid: newid };
        let sql2 = "INSERT INTO sessions SET ?";
        let query = conn.query(sql2, putdata,(err, results) => {
            if(err) throw err;
            res.redirect('/sessions');
        });
    });
}

module.exports.edit = (req, res) => {
    const id = req.params.id;
    let sql = "SELECT * FROM sessions WHERE sesid = ? LIMIT 1";
    let query = conn.query(sql, id, (err, results) => {
      if(err) throw err;
      res.render('sessions/edit',{ session: results[0] });
    });
}

module.exports.update = (req, res) => {
  const id = req.params.id;
  const data = JSON.parse(JSON.stringify(req.body));
  let sql = "UPDATE sessions SET stitle='"+data.stitle+"', sdate='"+data.sdate+"' WHERE sesid= '"+id+"'";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/sessions');
  });
}

module.exports.delete = (req, res) => {
  const id = req.params.id;
  let sql = "DELETE FROM sessions WHERE sesid = ?";
  let query = conn.query(sql,id, (err, results) => {
    if(err) throw err;
      res.redirect('/sessions');
  });
}