import "reflect-metadata";
import {createConnection, getConnection} from "typeorm";
import { ConnectionManager } from 'typeorm';
import {User} from "./entity/User";
import {Secret} from "./entity/Secret";


function getUserCredentials(email){
  createConnection().then(async connection => {
  const user = await getConnection()
      .createQueryBuilder()
      .select("user")
      .from(User, "user")
      .leftJoinAndSelect("user.secret", "secret")
      .where("user.email = :email", { email: email })
      .getOne();

      console.log(user);
      }).catch(error => console.log(error));
}

let email = "lbluten@mail.de";
getUserCredentials(email);
