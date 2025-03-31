// Task 1

class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }
    // Created Customer class
    addPurchase(amount) {
        if (amount > 0) {
            this.purchaseHistory.push(amount);
        }
    }
    // Adds purchase amount to the current purchase amount if the number is greater than zero
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
    // Created function getTotalSpent to add the current amount to the total amount
}

// Example Data

const customer1 = new Customer("Mickey Mouse", "ilikecheese@gmail.com");
customer1.addPurchase(100);
console.log(`${customer1.name} Spent: $${customer1.getTotalSpent()}`);


// Task 2 

class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
    }
    // Created class "SalesRep"

    addClient(customer) {
        if (customer instanceof Customer) {
            this.clients.push(customer);
        }
    } // Created a method to add customers to the list

    getClientTotal(name) {
        const client = this.clients.find(customer =>customer.name === name);
        if (client) {
                return client.getTotalSpent();
        }
        return 0;
    } // Returns the total amount the client has spent with a default of 0
};


// Examples

const salesRep = new SalesRep("Goofy");
salesRep.addClient(customer1);
customer1.addPurchase(200);

const customer2 = new Customer("Donald Duck", "gotanygrapes@gmail.com");
salesRep.addClient(customer2);

console.log(`Total spent by ${customer1.name}: $${salesRep.getClientTotal("Mickey Mouse")}`);
console.log(`Total spent by ${customer2.name}: $${salesRep.getClientTotal("Donald Duck")}`);
