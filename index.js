// Drink class to represent a drink item
class Drink {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// Menu class to manage the drink items
class Menu {
    constructor() {
        this.drinks = [];
    }

    // Add a new drink to the menu
    addDrink(name, price) {
        const drink = new Drink(name, price);
        this.drinks.push(drink);
    }

    // Delete a drink from the menu by name
    deleteDrink(name) {
        this.drinks = this.drinks.filter(drink => drink.name !== name);
    }

    // Display all drinks in the menu
    displayDrinks() {
        if (this.drinks.length === 0) {
            alert("No drinks available.");
            return;
        }
        let drinks = '';
        for (let i = 0; i < this.drinks.length; i++) {
            drinks += `${i}) ${this.drinks[i].name} - $${this.drinks[i].price.toFixed(2)}\n`;
        }
        alert(drinks);
    }

    // Show main menu options
    showMenuOptions() {
        return prompt(`
        0) Exit
        1) Create a new drink
        2) View drinks
        3) Delete a drink
        `);
    }
}

// Main program loop
const menu = new Menu();

let selection = '';
while (selection !== '0') {
    selection = menu.showMenuOptions();

    switch (selection) {
        case '1': // Create a new drink
            const name = prompt('Enter drink name:');
            const price = parseFloat(prompt('Enter drink price:'));
            if (!isNaN(price)) {
                menu.addDrink(name, price);
            } else {
                alert("Invalid price. Please try again.");
            }
            break;
        case '2': // View all drinks
            menu.displayDrinks();
            break;
        case '3': // Delete a drink
            const drinkName = prompt('Enter the name of the drink to delete:');
            menu.deleteDrink(drinkName);
            break;
        case '0': // Exit
            alert("Exiting the menu.");
            break;
        default: // Invalid selection
            alert("Invalid option. Please choose again.");
    }
}
