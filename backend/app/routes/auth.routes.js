const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

/**
* @openapi
* /v1/auth/signup:
*   post:
*     summary: "SignUp Authentication"
*     description: ""
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               username:         
*                 type: string
*               password:    
*                 type: string
*               email:
*                 type: string
*               roles:
*                 type: array
*                 items:
*                   type: string
*             required:
*               - username
*               - password
*               - email
*               - roles
*     responses:
*       201:
*         description: "User was registered successfully!"
*/


  app.post(
    "/v1/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  /**
* @openapi
* /v1/auth/signin:
*   post:
*     summary: "SignIn Authentication"
*     description: ""
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               username:         
*                 type: string
*               password:    
*                 type: string
*             required:
*               - username
*               - password
*     responses:
*       200:
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 username:         
*                   type: string
*                 email:    
*                   type: string
*                 roles:
*                   type: array
*                   items:
*                     type: string
*                 access_token:    
*                   type: string
*                   format: JWT
*/
  app.post("/v1/auth/signin", controller.signin);
};