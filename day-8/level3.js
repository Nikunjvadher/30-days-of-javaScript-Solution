// =======================  Level 3 ==================================
//  1 Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstName: "Nikunj",
  lastName: "Vadher",
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

  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
  accountInfo: function () {
    let name = `${this.firstName} ${this.lastName}`;
    let income = this.totalIncome()
    let expenses = this.totalExpense();
    let TotalIncome = this.totalIncome();
    let TotalExpense = this.totalExpense();
    let AccountBalance = this.accountBalance();

    return ` Name: ${name} \n Income:${income}\n Expenses: ${expenses}\n TotalIncome: ${TotalIncome}\n Totalexpenses: ${TotalExpense}\n AccountBalance: ${AccountBalance}`;
  },
};
// console.log(personAccount.accountInfo());
// console.log(personAccount.totalIncome());
// console.log(personAccount.totalExpense());
// console.log(personAccount.accountBalance());

// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];
// 2 Imagine you are getting the above users collection from a MongoDB database.
    // a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
    // b. Create a function called signIn which allows user to sign in to the application

const signUp = (username , email , password) => {
    users.forEach((user)=> {
        if(user.username === username && user.password === password){
            console.log('You have already an account');
        } else {
            let date = new Date();
            let chars = 'abcdefghijklmnopqrstuvwxyz';
            let id = [];
            for(let i=0; i<6; i++){
                id.push(chars[Math.floor(Math.random() * chars.length)])
            }
            id=id.join("");
            console.log(id);
            users.push({
                _id: id,
                username: username,
                password: password,
                email: email,
                createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}  ${date.getMinutes()}:${date.getHours()} `,
                isLoggedIn: false,
            })
        }
    })
    console.log(users[users.length - 1]);
}
signUp('Nikunj' , 'abc@gmail.com', '121212')

const signIn = (username , password) => {
    for(let i=0; i<users.length; i++){
        if(users[i].username.toLowerCase() === username.toLowerCase() && users[i].password === password){
            console.log('userfound' , users[i]);
            return users[i];
        } else {
            console.log('Envalid credentials');
        }
    }
}
signIn('Alex', '123123')

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

//  3 The products array has three elements and each of them has six properties.
    //  a. Create a function called rateProduct which rates the product
    //  b. Create a function called averageRating which calculate the average rating of a product
const rateProduct = (name, rate) => {
  products.forEach((product) => {
    if (product.name.toLowerCase().includes(name)) {
      let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
      let id = [];
      for (let i = 0; i < 6; i++) {
        id.push(chars[Math.floor(Math.random() * chars.length)]);
      }
      id = id.join("");
      product.ratings.push({
        userId: id,
        rate: rate,
      });
      console.log("filter");
    } else {
      console.error("No found");
    }
  });
};
rateProduct("tv", "3.5");

const averageRating = name => {
    let avg =0;
    let count=0;
    for(let i=0;i<products.length; i++){
        if(name.toLowerCase() === products[i].name.toLowerCase()){
            products[i].ratings.rate.forEach(rating => {
                count++;
                avg += rating
            });
        }
    }
    avg = avg / count;
    console.log(avg);
}
const avgRating = (name) => {
    let avg = 0;
    let count = 0;
    for (let i = 0; i < products.length; i++) {
        if (name.toLowerCase() === products[i].name.toLowerCase()) {
            products[i].ratings.rate.forEach(rating => {
                count++
                avg += rating
            })
        }
    }
    avg = avg / count;
}
avgRating('tv')
averageRating('mobile phone')

// 4 Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

const likeProduct = (name) => {
  for (let i = 0; i < products.length; i++) {
    if (name.toLowerCase() === products[i].name.toLowerCase()) {
      if (!products[i].likes) {
        console.log("like");
        let chars = "abcdefghijklmnopqrstuvwxyz";
        let id = [];

        for (let i = 0; i < 6; i++) {
          id.push(chars[Math.floor(Math.random() * chars.length)]);
        }
        id = id.join("");
        products[i].likes.push(id);
        console.log(id);
      } else {
        console.log("Product has been liked");
        // console.log(products[i].name);
      }
    } else {
      console.log("No Product available");
    }
  }
};

likeProduct("mobile phone");
