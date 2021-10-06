namespace Personnel {
	export interface IUser {
		displayInfo(): void;
	}

	export class Employee {
		constructor(public name: string){

		}
	}

	export function work(emp: Employee): void {
		console.log(emp.name, "Is working");
	}
	export let defaultUser = { name: "Rei" }

	export let value = "Hi";
}

//let alice = new Personnel.Employee("Alice");
//console.log(alice.name);

let alice = new Personnel.Employee("Alice");
Personnel.work(alice);

console.log(Personnel.defaultUser.name);
console.log(Personnel.value);
//------------------------------
namespace Data {
	export namespace Personnel {
		export class Employee {
			constructor(public name: string) {
			}
		}
	}
	export namespace Clients {
		export class VipClient {
			constructor(public name: string) {
			}
		}
	}
}

let ivan = new Data.Personnel.Employee("Ivan");
console.log(ivan.name);
let sam = new Data.Clients.VipClient("Sam");
console.log(sam.name);
//------------------------------
namespace Data1{
    export namespace Personnel {
        export class Employee {
         
            constructor(public name: string){
            }
        }
    }
}
 
import employee = Data1.Personnel.Employee;
let tom = new employee("Tom")
console.log(tom.name);