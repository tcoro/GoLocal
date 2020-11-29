"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], User.prototype, "stamp_created", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], User.prototype, "stamp_updated", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], User.prototype, "type_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], User.prototype, "secret_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
User = __decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBK0Q7QUFHL0QsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSTtDQTBCaEIsQ0FBQTtBQXZCRztJQURDLGdDQUFzQixFQUFFOztnQ0FDZDtBQUdYO0lBREMsZ0JBQU0sRUFBRTs4QkFDTSxJQUFJOzJDQUFDO0FBR3BCO0lBREMsZ0JBQU0sRUFBRTs4QkFDTSxJQUFJOzJDQUFDO0FBR3BCO0lBREMsZ0JBQU0sRUFBRTs7bUNBQ0s7QUFHZDtJQURDLGdCQUFNLEVBQUU7O3FDQUNPO0FBR2hCO0lBREMsZ0JBQU0sRUFBRTs7dUNBQ1M7QUFHbEI7SUFEQyxnQkFBTSxFQUFFOzt3Q0FDVTtBQUduQjtJQURDLGdCQUFNLEVBQUU7O3VDQUNTO0FBeEJULElBQUk7SUFEaEIsZ0JBQU0sRUFBRTtHQUNJLElBQUksQ0EwQmhCO0FBMUJZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIENvbHVtbn0gZnJvbSBcInR5cGVvcm1cIjtcblxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgVXNlciB7XG5cbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gICAgaWQ6IG51bWJlcjtcblxuICAgIEBDb2x1bW4oKVxuICAgIHN0YW1wX2NyZWF0ZWQ6IERhdGU7XG5cbiAgICBAQ29sdW1uKClcbiAgICBzdGFtcF91cGRhdGVkOiBEYXRlO1xuXG4gICAgQENvbHVtbigpXG4gICAgZW1haWw6IHN0cmluZztcblxuICAgIEBDb2x1bW4oKVxuICAgIHR5cGVfaWQ6IG51bWJlcjtcblxuICAgIEBDb2x1bW4oKVxuICAgIHNlY3JldF9pZDogbnVtYmVyO1xuXG4gICAgQENvbHVtbigpXG4gICAgZmlyc3RfbmFtZTogc3RyaW5nO1xuXG4gICAgQENvbHVtbigpXG4gICAgbGFzdF9uYW1lOiBzdHJpbmc7XG5cbn1cbiJdfQ==