const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {

  app.get("/v1/test/all", controller.allAccess);

  app.get("/v1/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/v1/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/v1/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};