var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("TypeSctipt Works");
var Driver = /** @class */ (function () {
    function Driver(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Driver.prototype, "Age", {
        get: function () {
            return this.age;
        },
        set: function (age) {
            if (age <= this.age) {
                console.log("Error ");
            }
            else {
                this.age = age;
            }
        },
        enumerable: false,
        configurable: true
    });
    Driver.prototype.getDriverInfo = function () {
        console.log("Drver name: ", this.name, "\nAge: ", this.age);
    };
    return Driver;
}());
var TruckDriver = /** @class */ (function (_super) {
    __extends(TruckDriver, _super);
    function TruckDriver(name, age, experriance) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        _this.experriance = experriance;
        _this.category = "E";
        _this.permit = true;
        _this.experriance = experriance;
        return _this;
    }
    TruckDriver.prototype.PrisonCheck = function () {
        return true;
    };
    TruckDriver.prototype.getDriverInfo = function () {
        console.log("Drver name: ", this.name, "\nAge: ", this.age, "\nExp: ", this.experriance, "\nCategory: ", this.category, "\nPermit: ", this.permit);
    };
    TruckDriver.prototype.CheckWorkingDay = function (data) {
        console.log("To dinner left.. ", data, " hours");
    };
    return TruckDriver;
}(Driver));
var dimas = new TruckDriver("Dimas", 56, 61);
dimas.getDriverInfo();
console.log("Prison check => ", dimas.PrisonCheck());
dimas.CheckWorkingDay("three");
