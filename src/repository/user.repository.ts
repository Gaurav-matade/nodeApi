import { where } from "sequelize";
import UserModel from "../model/user.model";

class UserRepository {

  async createUser(data:any){

    const user=await  UserModel.findOne({where:{email:data.email}});
     if(user){
        console.log('user alredy exsist');
        throw new Error('user alredy exsist');  
    }
    const result = await UserModel.create({...data});
    return result;

 } 

  async getAllUsers() {
    const result = await UserModel.findAll();
    return result;
  } 

async updateUser(id: any, data: any) {
  const user = await UserModel.findByPk(id);

  if (!user) {
    throw new Error("User not found");
  }

  const result = await user.update(data); 
  return result;
}

async userLogin(email: string) {
  return await UserModel.findOne({
    where: { email }
  });
}



async bulkCreateUsers(data: any[]) {
     for (const item of data) {
        const user = await UserModel.findOne({ where: { email: item.email } });
        if (user) {
            console.log('user already exists');
            throw new Error('user already exists');
        }
    }

     const result = await UserModel.bulkCreate(data, { validate: true });
    return result;
}


}



export default new UserRepository();
