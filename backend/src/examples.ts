import "reflect-metadata";
import {createConnection, Connection, getConnection} from "typeorm";
import {User} from "./entity/User";
//import {Farmer} from "./entity/Farmer";
import {Secret} from "./entity/Secret";

const connection = createConnection().catch(error => console.log(error));




/* Write New user und pass */

const user = new User();
user.firstName = "Lassma";
user.lastName = "Ballernsson";
user.email = "lbal@aol.com";
user.usertypeId = 2;

const secret = new Secret();
secret.hash ="Welt";

function addUser(a, b){
  createConnection().then(async connection => {

      let query = await connection.manager.save(secret);
      user.secretId = query.id;
      await connection.manager.save(user);
    }).catch(error => console.log(error));
}

function getAllUsers(){
  createConnection().then(async connection => {
    const userRepository = await connection.getRepository(User);
    const users = await userRepository.find({ relations: ["secret", "usertype"] });
    console.log(users);
  }).catch(error => console.log(error));
}

function getUserByMail(email){

}

//addUser(user, secret);
getAllUsers();
//getUserByMail(user.email);
