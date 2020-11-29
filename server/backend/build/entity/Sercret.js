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
exports.Secret = void 0;
var typeorm_1 = require("typeorm");
var Secret = /** @class */ (function () {
    function Secret() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Secret.prototype, "id", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Secret.prototype, "stamp_created", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Secret.prototype, "stamp_updated", void 0);
    __decorate([
        typeorm_1.Column("varchar", { length: 200 }),
        __metadata("design:type", String)
    ], Secret.prototype, "sercret", void 0);
    __decorate([
        typeorm_1.Column({ type: "tinyint" }),
        __metadata("design:type", Number)
    ], Secret.prototype, "reset_id", void 0);
    Secret = __decorate([
        typeorm_1.Entity()
    ], Secret);
    return Secret;
}());
exports.Secret = Secret;
//# sourceMappingURL=Sercret.js.map