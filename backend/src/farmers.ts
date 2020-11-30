import "reflect-metadata";
import {createConnection, Connection, getConnection} from "typeorm";
import {Farmer} from "./entity/Farmer";
import {Location} from "./entity/Location";
import {User} from "./entity/User";
import {Item} from "./entity/Item";

//const connection = createConnection().catch(error => console.log(error));




function getAllFarmers(){
  createConnection().then(async connection => {
    const farmerRepository = await connection.getRepository(Farmer);
    const farmers = await farmerRepository.find({ relations: [ "user", "location", "item"] });
    console.log(farmers);
  }).catch(error => console.log(error));
}

function getFarmers(){
  createConnection().then(async connection => {
    const farmerRepository = await connection.getRepository(Farmer);
    const farmers = await farmerRepository.find({ relations: [ "item"] });
    console.log(farmers);
  }).catch(error => console.log(error));
}

//addUser(user, secret);
getAllFarmers();
//getFarmers();
//getUserByMail(user.email);
