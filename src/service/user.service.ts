import UserRepository from "../repository/user.repository";

class UserService {
  async createUser(data: any) {
    return await UserRepository.createUser(data);
  };


  async getAllUsers() {
    const result = await UserRepository.getAllUsers();
    return result;


  };

  async updateUser(id: any, data: any) {
    const result = await UserRepository.updateUser(id, data);
    return result;
  };



async userLogin(data: any) {
  const user = await UserRepository.userLogin(data.email);

  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== data.password) {
    throw new Error("Invalid password");
  }

  return user;
}

async bulkCreateUsers(data: any[]) {
    // if (!Array.isArray(data)) {
    //   throw new Error("Input must be an array");
    // }
    // if (data.length === 0) {
    //   throw new Error("User array is empty");
    // }

    const result= await UserRepository.bulkCreateUsers(data);
    return result
  }



}
export default new UserService();
