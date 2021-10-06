var Personnel;
(function (Personnel) {
    var Employee = /** @class */ (function () {
        function Employee(name) {
            this.name = name;
        }
        return Employee;
    }());
    Personnel.Employee = Employee;
    function work(emp) {
        console.log(emp.name, "Is working");
    }
    Personnel.work = work;
    Personnel.defaultUser = { name: "Rei" };
    Personnel.value = "Hi";
})(Personnel || (Personnel = {}));
//let alice = new Personnel.Employee("Alice");
//console.log(alice.name);
var alice = new Personnel.Employee("Alice");
Personnel.work(alice);
console.log(Personnel.defaultUser.name);
console.log(Personnel.value);
//------------------------------
var Data;
(function (Data) {
    var Personnel;
    (function (Personnel) {
        var Employee = /** @class */ (function () {
            function Employee(name) {
                this.name = name;
            }
            return Employee;
        }());
        Personnel.Employee = Employee;
    })(Personnel = Data.Personnel || (Data.Personnel = {}));
    var Clients;
    (function (Clients) {
        var VipClient = /** @class */ (function () {
            function VipClient(name) {
                this.name = name;
            }
            return VipClient;
        }());
        Clients.VipClient = VipClient;
    })(Clients = Data.Clients || (Data.Clients = {}));
})(Data || (Data = {}));
var ivan = new Data.Personnel.Employee("Ivan");
console.log(ivan.name);
var sam = new Data.Clients.VipClient("Sam");
console.log(sam.name);
//------------------------------
var Data1;
(function (Data1) {
    var Personnel;
    (function (Personnel) {
        var Employee = /** @class */ (function () {
            function Employee(name) {
                this.name = name;
            }
            return Employee;
        }());
        Personnel.Employee = Employee;
    })(Personnel = Data1.Personnel || (Data1.Personnel = {}));
})(Data1 || (Data1 = {}));
var employee = Data1.Personnel.Employee;
var tom = new employee("Tom");
console.log(tom.name);
