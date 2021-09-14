import prompt from "prompt";
import chalk from "chalk";
import Position from "./position";
import fs from "fs";

//
// Start the prompt
//
prompt.start();

console.log("Hi!");
console.log(
  "In the following prompt, please paste the full JSON extracted from Binance, as explained in the README"
);

//
// Get two properties from the user: username and email
//
prompt.get(["json"], (err, result) => {
  let positions: Position[];
  try {
    const parsed = JSON.parse(result.json as string);
    positions = parsed.data as Position[];
  } catch (e) {
    console.log(chalk.red("Error parsing JSON"));
    return;
  }

  const headers = [
    "Coin Symbol",
    "Exchange",
    "Pair",
    "Type",
    "Amount",
    "Price",
    "Fee",
    "Date",
    "notes",
  ];


  const rows = positions
    .map((position) => [
      position.asset,
      "Binance Earn",
      null,
      "deposit",
      position.amount,
      null,
      null,
      ((d: Date) => `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`)(new Date(parseInt(position.createTimestamp))),
      null,
    ])
    .join("\n");
  // Coin Symbol,Exchange,Pair,Type,Amount,Price,Fee,Date,Notes
  const csv = `${headers}\n${rows}`;
  fs.writeFileSync("./out.csv", csv, "utf-8");

  console.log("Great! I wrote out.csv for you :)")
});
