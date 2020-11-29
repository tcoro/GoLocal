"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const User_1 = require("./entity/User");
typeorm_1.createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "golocal_svc",
    password: "golocal",
    database: "golocal_db",
}).then(async (connection) => {
    let user = await typeorm_2.getManager()
        .createQueryBuilder(User_1.User, "user")
        .where("user.id = :id", { id: 1 })
        .getOne();
}).catch(error => console.log(error));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0QkFBMEI7QUFDMUIscUNBQXlDO0FBQ3pDLHFDQUFtQztBQUNuQyx3Q0FBbUM7QUFFbkMsMEJBQWdCLENBQUM7SUFFZixJQUFJLEVBQUUsT0FBTztJQUNiLElBQUksRUFBRSxXQUFXO0lBQ2pCLElBQUksRUFBRSxJQUFJO0lBQ1YsUUFBUSxFQUFFLGFBQWE7SUFDdkIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsUUFBUSxFQUFFLFlBQVk7Q0FFdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLEVBQUU7SUFFekIsSUFBSSxJQUFJLEdBQUcsTUFBTSxvQkFBVSxFQUFFO1NBQ3hCLGtCQUFrQixDQUFDLFdBQUksRUFBRSxNQUFNLENBQUM7U0FDaEMsS0FBSyxDQUFDLGVBQWUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNqQyxNQUFNLEVBQUUsQ0FBQztBQUloQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQge2NyZWF0ZUNvbm5lY3Rpb259IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQge2dldE1hbmFnZXJ9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL2VudGl0eS9Vc2VyXCI7XG5cbmNyZWF0ZUNvbm5lY3Rpb24oe1xuXG4gIHR5cGU6IFwibXlzcWxcIixcbiAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgcG9ydDogMzMwNixcbiAgdXNlcm5hbWU6IFwiZ29sb2NhbF9zdmNcIixcbiAgcGFzc3dvcmQ6IFwiZ29sb2NhbFwiLFxuICBkYXRhYmFzZTogXCJnb2xvY2FsX2RiXCIsXG5cbn0pLnRoZW4oYXN5bmMgY29ubmVjdGlvbiA9PiB7XG5cbiAgbGV0IHVzZXIgPSBhd2FpdCBnZXRNYW5hZ2VyKClcbiAgICAgIC5jcmVhdGVRdWVyeUJ1aWxkZXIoVXNlciwgXCJ1c2VyXCIpXG4gICAgICAud2hlcmUoXCJ1c2VyLmlkID0gOmlkXCIsIHsgaWQ6IDEgfSlcbiAgICAgIC5nZXRPbmUoKTtcblxuXG5cbn0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4iXX0=