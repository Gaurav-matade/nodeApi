import { FastifyRequest, FastifyReply } from "fastify";
import UserService from '../service/user.service';
 
class UserController {

    async createUser(request: FastifyRequest, reply: FastifyReply) {
        try {
            const data= request.body as any;
             const result = await UserService.createUser(data);
            return reply.send({
                status: 201,
                message: "user created successfully",
                result
            });
        } catch (error: any) {
            throw error
          }
    }

       async getAllUsers(request: FastifyRequest, reply: FastifyReply) {
        try {
             const result = await UserService.getAllUsers( );
            return reply.send({
                status: 200,
                message: "user get  successfully",
                result
            });
        } catch (error: any) {
            throw error
          }
    }

async updateUser(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { id } = request.params as any;   
    const data = request.body as any;       

    const result = await UserService.updateUser(id, data);

    return reply.send({
      status: 200,
      message: "User updated successfully",
      result
    });
  } catch (error: any) {
    throw error;
   }
}

async userLogin(request: FastifyRequest, reply: FastifyReply) {
  try {
    const data = request.body as any;

    const result = await UserService.userLogin(data);

    return reply.status(200).send({
      status: 200,
      message: "User login successfully",
      result
    });
  } catch (error: any) {
    return reply.status(401).send({
      status: 401,
      message: error.message
    });
  }
}


async bulkCreateUsers( request: FastifyRequest, reply: FastifyReply ) {
    try {

      const data= request.body as any[];

      const result = await UserService.bulkCreateUsers(data);

      return reply.code(201).send({
        status: 201,
        message: "Users created successfully",
        data: result
      });
    } catch (error: any) {
      return reply.code(400).send({
        status: 400,
        message: error.message
      });
    }
  }

}



export default new UserController();