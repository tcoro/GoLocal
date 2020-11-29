import "reflect-metadata";
import {createConnection} from "typeorm";
import {Farmer} from "./entity/Farmer";
createConnection().then(async connection => {


/*(await connection.manager.save(secret);
*/
const farmer = new Farmer();
//farmer.userId = 5;
//farmer.locationId = 1;
//user.hash = "12345";
//const secret = new Secret();
//secret.hash = "123456";

//await connection.manager.save(Farmer);


    console.log("Loading farmers from the database...");

    const farmerRepository = connection.getRepository(Farmer);
    const farmers = await farmerRepository.find({ relations: ["location", "user"] });

    //const users = await connection.manager.find(Farmer);
    console.log("Loaded users: ", farmers);
    //const user1 = await User.findOneById(1, {relations: })
    //console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
