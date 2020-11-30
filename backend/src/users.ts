import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
createConnection().then(async connection => {


/*(await connection.manager.save(secret);
*/
//const user = new User();
//farmer.userId = 5;
//farmer.locationId = 1;
//user.hash = "12345";
//const secret = new Secret();
//secret.hash = "123456";

//await connection.manager.save(Farmer);


    console.log("Loading users from the database...");

    const farmerRepository = connection.getRepository(User);
    const users = await farmerRepository.find({ relations: ["usertype", "secret"] });

    //const users = await connection.manager.find(Farmer);
    console.log("Loaded users: ", users);
    //const user1 = await User.findOneById(1, {relations: })
    //console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
