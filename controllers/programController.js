const conn = require('../models/database.js')

module.exports.read = (req, res) => {
    let sql = "SELECT * FROM program";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.render('program/index',{
        programs: results
      });
    });
}

module.exports.create = (req, res) => {
    res.render('program/create')
  }

module.exports.store = (req, res) => {
    let sql = "SELECT * FROM program ORDER BY pid DESC LIMIT 1" ;
    let last = conn.query(sql, (err, results) => {
        if(err) throw err;
        const data = JSON.parse(JSON.stringify(req.body));
        let newid = parseInt(results[0].pid) + 1 ;
        let putdata = {ptitle: data.ptitle, duration: data.duration, pid: newid };
        let sql2 = "INSERT INTO program SET ?";
        let query = conn.query(sql2, putdata,(err, results) => {
            if(err) throw err;
            res.redirect('/program');
        });
    });
}

module.exports.edit = (req, res) => {
    const id = req.params.id;
    let sql = "SELECT * FROM program WHERE pid = ? LIMIT 1";
    let query = conn.query(sql, id, (err, results) => {
      if(err) throw err;
      res.render('program/edit',{ program: results[0] });
    });
}

module.exports.update = (req, res) => {
  const id = req.params.id;
  const data = JSON.parse(JSON.stringify(req.body));
  let sql = "UPDATE program SET ptitle='"+data.ptitle+"', duration='"+data.duration+"' WHERE pid= '"+id+"'";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/program');
  });
}

module.exports.delete = (req, res) => {
  const id = req.params.id;
  let sql = "DELETE FROM program WHERE pid = ?";
  let query = conn.query(sql,id, (err, results) => {
    if(err) throw err;
      res.redirect('/program');
  });
}