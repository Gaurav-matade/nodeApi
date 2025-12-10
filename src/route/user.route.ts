import { FastifyInstance } from "fastify";
import UserController from "../controller/user.controller";
import userController from "../controller/user.controller";

async function userRoute(app: FastifyInstance) {
  app.post("/user", UserController.createUser);
  app.get("/getUser", UserController.getAllUsers);
  app.put("/upadateUser/:id",UserController.updateUser);
  app.post('/login', userController.userLogin);
   app.post("/bulk", UserController.bulkCreateUsers);
   
}

export default userRoute;
