import "reflect-metadata";
import {createConnection, Connection, getConnection} from "typeorm";
import {getManager} from "typeorm";
import {User} from "./entity/User";
import {Cart} from "./entity/Cart";
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

function createCartIdNotExists(customerId) {
  createConnection().then(async connection => {
    let cart = await getConnection()
    .createQueryBuilder()
    .select("cart")
    .from(Cart, "cart")
    .where("cart.customerId = :customerId", { customerId: customerId })
    .getOne();
    // Createcart
    if (cart == undefined){
      cart = new Cart();
      cart.customerId = customerId;
      await getManager().save(cart);
    }
    return cart.id;
    }).catch(error => console.log(error));
}

function getCartByCustomerId(customerId) {
  createConnection().then(async connection => {
    let cart = await getConnection()
    .createQueryBuilder()
    .select("cart")
    .from(Cart, "cart")
    .where("cart.customerId = :customerId", { customerId: customerId })
    .getMany();
    console.log(cart);
    }).catch(error => console.log(error));
}

function addItemToCart(itemId, customerId, quantity){

  createConnection().then(async connection => {
    const cart = new Cart();
    cart.customerId = customerId;
    cart.itemId = itemId;
    cart.quantity = quantity;
    await getManager().save(cart);
  }).catch(error => console.log(error));
}
//addItemToCart(4,1,5);
getCartByCustomerId(1);
