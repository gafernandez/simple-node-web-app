
module.exports =   function(app) {
    app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to simple web application." });
  });
  
  require('./auth.routes')(app);
  
  require('./user.routes')(app);

}
