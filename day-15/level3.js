

// =================== level 3 ============================
// /*
// 1 Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

class statistical {
  constructor(arr) {
    this.arr = arr;
  }

  get length() {
    return this.arr.length;
  }

  count() {
    return this.length;
  }

  sum() {
    let sum = 0;
    this.arr.forEach((num) => {
      sum += num;
    });
    return sum;
  }

  mean() {
    // this.sum();
    let sum = 0;
    this.arr.forEach((num) => {
      sum += num;
    });
    return Math.ceil(sum / this.length);
  }
  min() {
    let minNum = this.arr[0];
    for (let i = 0; i < this.length; i++) {
      if (this.arr[i] < minNum) {
        minNum = this.arr[i];
      }
    }
    return minNum;
  }

  max() {
    let maxNum = this.arr[0];
    for (let i = 0; i < this.length; i++) {
      if (this.arr[i] > maxNum) {
        maxNum = this.arr[i];
      }
    }
    return maxNum;
  }

  range() {
    return this.max() - this.min();
  }

  median() {
    let sorted = this.arr.sort();
    let index = sorted.length / 2;
    index = Math.floor(index);
    return sorted[index];
  }
  mode() {
    return "working on this";
  }
  varience() {
    let mean = this.mean();
    let varience = this.arr.map((num) => {
      return Math.pow(num - mean, 2) / this.length;
    });

    let newVarience = 0;
    varience.forEach((num) => (newVarience += num / this.length));
    return Math.ceil(newVarience / this.length);
  }
}

let ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

let statistics = new statistical(ages);
// console.log(number);

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.varience()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

// 2 Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount{
    constructor(firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.income = [];
        this.expenses = [];
    }

    totalIncome(){
        let tIncome = 0;
        this.income.forEach(income => tIncome += Number(income))
        return tIncome;
    }

    totalExpenses(){
        let tExpense=0;
        this.expenses.forEach(expense => tExpense += Number(expense));
        // console.log(this.expenses.forEach(expense => tExpense += Number(expense)))
        return tExpense;
    }

    accountInfo(){
        return `
        Full Name : ${this.firstName} ${this.lastName}
        Total Income : ${this.totalIncome} 
        Total Expenses : ${this.totalExpenses} 
        `;
    }

    set addIncome(amount){
        this.income.push(amount)
    }
    set addExpense(cost){
        this.expenses.push(cost)
    }

    accountBalance(){
      return this.totalIncome() - this.totalExpenses();
    }
}

let account = new PersonAccount('Nikunj' , 'Vadher')
account.addIncome = 10000
account.addIncome = 5000
account.addIncome = 2000

account.addExpense = 5000
account.addExpense = 1000
account.addExpense = 700
console.log('Incomes is ' + account.income);
console.log('Expenses is ' + account.expenses);
console.log(account.totalIncome());
console.log(account.totalExpenses());
console.log(account.accountBalance());

