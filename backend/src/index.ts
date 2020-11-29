import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");

    const user = new User();

    user.firstName = "Lasse";
    user.lastName = "Bluten";
    user.typeId = 2;
    user.email = "lbluten@aol.com";
    user.secret = "12345";

    await connection.manager.save(user);
//(await connection.manager.save(secret);
    console.log("Saved a new user with id: " + user.id);
/*
    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);
    //const user1 = await User.findOneById(1, {relations: })
    //console.log("Here you can setup and run express/koa/any other framework.");
*/
}).catch(error => console.log(error));
