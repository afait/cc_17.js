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
