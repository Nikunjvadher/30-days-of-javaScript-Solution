
// => Run in Browser Console

// ==================== Level 1 ====================

// 1 Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('First_Name' , 'Nikunj')
localStorage.setItem('Last_Name' , 'Vadher')
localStorage.setItem('Age' , 20)
localStorage.setItem('country' , 'India')


// ==================== Level 2 ====================

// 2 Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
    firstName: 'Nikunj',
    lastName: 'Vadher',
    age: 20,
    skills: ['HTML' , 'CSS' , 'JS' , 'NODE' , 'REACT' , 'PYTHON'],
    country: 'India',
    enrolled: true,
}

localStorage.setItem('student' , JSON.stringify(student))


// ==================== Level 3 ====================
// 3 Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = {
  firstName: "Nikunj",
  lastName: "Vadher",
  age: 20,
  incomes: [
    {
      description: "Freelancing",
      amount: 10000,
    },
    {
      description: "Jon",
      amount: 15000,
    },
  ],

  expenses: [
    {
      description: "Bills",
      amount: 1000,
    },
    {
      description: "Rent",
      amount: 10000,
    },
  ],
  totalIncome: function () {
    let tIncome = 0;
    this.incomes.forEach((income) => (tIncome += Number(income.amount)));
    return tIncome;
  },

  totalExpense: function () {
    let tExpense = 0;
    this.expenses.forEach((expense) => (tExpense += Number(expense.amount)));
    return tExpense;
  },

  accountInfo: function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
    console.log(`Total Income: ${this.totalIncome()}`);
    console.log(`Total Expense: ${this.totalExpense()}`);
  },

  addIncome: function (description, amount) {
    this.incomes.push({
      description,
      amount,
    });
  },
  addExpense: function (description, amount) {
    this.expenses.push({
      description,
      amount,
    });
  },
};

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
personAccount.accountInfo()
personAccount.addIncome('others', 1000)
personAccount.addExpense('others', 5000)
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
