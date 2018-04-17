module.exports = function(app, db) {
  app.get("/leaderboard", (req, res) => {
    db.collection("leaderboard")
      .find({})
      .toArray((err, result) => {
        if(err) {
          res.send(err);
        } else {
          res.json(result);
        }
      })
  })

  app.post("/leaderboard", (req, res) => {
    const data = {
      name: req.body.name,
      level: req.body.level,
      weapon: req.body.weapon,
      armor: req.body.armor,
      time: req.body.time,
    }
    
    db.collection("leaderboard")
      .insert(data, (err, result) => {
        if(err) {
          console.log(err);
        } else {
          res.json("Data was entered succesfully.")
        }
      })
  })
}