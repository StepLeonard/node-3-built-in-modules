/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */

import fs from "fs/promises";

const order = process.argv[2];
const orderNumber = process.argv[3];

console.log (order)
console.log(orderNumber);

async function getPizzaOrders() {

  const file = await fs.readFile("data.json", "utf8");
  const pizzaOrders = JSON.parse(file);
  

  // Step 4: Check what the user wants
  if (order === "getAllOrders") {
    console.log("Print all orders:");


// each pizza order
    pizzaOrders.forEach(pizza => console.log(pizza));

  } else if (order === "getOneOrder") {
    console.log("Print one pizza order:");

    // Get one pizza from the list
    const pizza = pizzaOrders[orderNumber];
    console.log("Selected pizza:", pizza);

    // If pizza exists, print it, if not show order not found
    pizza
      ? console.log(pizza)
      : console.log("Order not found. Please enter a valid order number.");

  }

}

getPizzaOrders();
