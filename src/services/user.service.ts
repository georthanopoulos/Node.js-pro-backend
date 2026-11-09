// import User, {IUser} from '../models/user.model';
// Προσθήκη για ρόλο schema
// import Role, {IRole} from '../models/role.model';
import * as userDao from '../dao/user.dao';

// export const findUsers = async():Promise<IUser[]> => {
export const findUsers = async()=> {
  // Προσθήκη στο populate για ρόλο 
  // const users = await User.find().populate("roles").lean().exec();
  // const users = await User.find().populate({ path: "roles", model: Role }).lean().exec();
  const users = await userDao.findAll();
  console.log(">>>>>>>", users)
  return users;
}

export const findUserByEmail = async(email:string) =>{
  const user = await userDao.findByEmail(email);
  if (user) {
    return user
  }
}