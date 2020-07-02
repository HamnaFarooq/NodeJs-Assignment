const conn = require('../models/database.js')

module.exports.read = (req, res) => {
    let sql = "SELECT * FROM teachers";
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.render('teachers/index',{
        teachers: results
      });
    });
}

module.exports.create = (req, res) => {
    res.render('teachers/create')
  }

module.exports.store = (req, res) => {
    let sql = "SELECT * FROM teachers ORDER BY TId DESC LIMIT 1" ;
    let last = conn.query(sql, (err, results) => {
        if(err) throw err;
        const data = JSON.parse(JSON.stringify(req.body));
        let newid = parseInt(results[0].TId) + 1 ;
        let putdata = {Firstname: data.Firstname, Lastname: data.Lastname, Experience: data.Experience, Designation: data.Designation, TId: newid };
        let sql2 = "INSERT INTO teachers SET ?";
        let query = conn.query(sql2, putdata,(err, results) => {
            if(err) throw err;
            res.redirect('/teachers');
        });
    });
}

module.exports.edit = (req, res) => {
    const id = req.params.id;
    let sql = "SELECT * FROM teachers WHERE TId = ? LIMIT 1";
    let query = conn.query(sql, id, (err, results) => {
      if(err) throw err;
      res.render('teachers/edit',{ teacher: results[0] });
    });
}

module.exports.update = (req, res) => {
  const id = req.params.id;
  const data = JSON.parse(JSON.stringify(req.body));
  let sql = "UPDATE teachers SET Firstname='"+data.Firstname+"', Lastname='"+data.Lastname+"',  Experience='"+data.Experience+"', Designation='"+data.Designation+"' WHERE TId= '"+id+"'";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/teachers');
  });
}

module.exports.delete = (req, res) => {
  const id = req.params.id;
  let sql = "DELETE FROM teachers WHERE TId = ?";
  let query = conn.query(sql,id, (err, results) => {
    if(err) throw err;
      res.redirect('/teachers');
  });
}