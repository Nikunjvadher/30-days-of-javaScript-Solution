const catsAPI = "https://api.thecatapi.com/v1/breeds";
// Exercises: Level 2
// 1 Print out all the cat names in to catNames variable.
fetch(catsAPI)
  .then((resoponse) => resoponse.json())
  .then((data) => {
    data.forEach((cat) => {
      let catNames = cat.name;
      console.log("Cat Name is : ", catNames);
    });
  });
