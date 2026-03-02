/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */

import fs from "fs/promises";

const order = process.argv[2];
const orderNumber = process.argv[3];

async function getPizzaOrders() {

  const file = await fs.readFile("data.json", "utf8");
  const pizzaOrders = JSON.parse(file);

  if (order === "getAllOrders") {

    pizzaOrders.forEach(pizza => console.log(pizza));

  } else if (order === "getOneOrder") {

    const pizza = pizzaOrders[orderNumber];

    pizza
      ? console.log(pizza)
      : console.log("Order not found. Please enter a valid order number.");

  }

}

getPizzaOrders();
