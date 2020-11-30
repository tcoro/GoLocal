import "reflect-metadata";
import {createConnection, Connection, getConnection} from "typeorm";
import {getManager} from "typeorm";
import {Cart} from "./entity/Cart";



const connection = createConnection({
  type: "mysql",
  host: "waffel-eisen.net",
  port: 3306,
  username: "golocal_svc",
  password: "golocal",
  database: "golocal_db"

});

async function test (customerId) {
  const bla = await getConnection(connection)
  .createQueryBuilder()
  .select("cart")
  .from(Cart, "cart")
  .where("cart.customerId = :customerId", { customerId: customerId })
  .getMany();
  console.log(bla);
}

test(1);
