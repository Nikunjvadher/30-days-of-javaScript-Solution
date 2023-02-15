// Exercises: Level 1
// Create a closure which has one inner function
function outer() {
  let name = "Nikunj";
  function inner() {
    // console.log(name);
    return name;
  }
  return inner();
}
console.log(outer());

// Exercises: Level 2
// Create a closure which has three inner functions
function outer() {
  let firstName = "Nikunj";
  let lastName = "Nikunj";
  let age = 20;
  function FirstName() {
    return firstName;
  }
  function LastName() {
    return lastName;
  }
  function Age() {
    return age;
  }
  return {
    FirstName: FirstName(),
    LastName: LastName(),
    Age: Age(),
  };
}
console.log(outer());
console.log(outer().FirstName);
console.log(outer().LastName);
console.log(outer().Age);

// Exercises: Level 3
// 1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
function personAccount(firstname, lastname) {
  let incomes = new Map();
  let expenses = new Map();
  let totalIncome = 0;
  let totalExpense = 0;
  let accountInfo = `${firstname} ${lastname}'s account balance:`;
  
  function addIncome(amount, description) {
    incomes.set(description, amount);
    totalIncome += amount;
  }
  
  function addExpense(amount, description) {
    expenses.set(description, amount);
    totalExpense += amount;
  }
  
  function accountBalance() {
    return totalIncome - totalExpense;
  }
  
  return {
    addIncome,
    addExpense,
    accountBalance,
    get accountInfo() {
      let incomeInfo = "Income:\n";
      for (const [description, amount] of incomes) {
        incomeInfo += `${description}: $${amount}\n`;
      }
      incomeInfo += `Total income: $${totalIncome}\n\n`;
      
      let expenseInfo = "Expenses:\n";
      for (const [description, amount] of expenses) {
        expenseInfo += `${description}: $${amount}\n`;
      }
      expenseInfo += `Total expenses: $${totalExpense}\n\n`;
      
      return `${accountInfo}\n${incomeInfo}${expenseInfo}Account balance: $${accountBalance()}`;
    }
  };
}


const johnDoe = personAccount("John", "Doe");
johnDoe.addIncome(2000, "Salary");
johnDoe.addIncome(500, "Bonus");
johnDoe.addExpense(800, "Rent");
johnDoe.addExpense(300, "Groceries");

console.log(johnDoe.accountInfo);
