import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import {getManager} from "typeorm";
import {User} from "./entity/User";


createConnection()
  .then(async (connection) => {
    let user = await getManager()
        .createQueryBuilder(User, "user")
        .where("user.id = :id", { id: 1 })
        .getOne();
        console.log(user);
  }).catch((error) => console.log(error));


/*createConnection({

  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "golocal_svc",
  password: "golocal",
  database: "golocal_db",

}).then(async connection => {




}).catch(error => console.log(error));
*/
/*


  let user = await getManager()
      .createQueryBuilder(User, "user")
      .where("user.id = :id", { id: 1 })
      .getOne();

 */
