const prompt = require('prompt-sync')();

function logIn() {
   let firstName = prompt("Enter a first name: ");
   let lastName = prompt("Enter a last name: ");
   return {firstName, lastName};
}
function feedback(){
   let response = prompt("Response: ");
   let advantages = prompt("Advantages: ");
   let disadvantages = prompt("Disadvantages: ");
   return {response, advantages, disadvantages};
}
function responseRating(responseRating){
   responseRating = prompt("Оцініть товар: ");

   if(responseRating == 1){
      console.log("★");
   }else if(responseRating == 2){
      console.log("★ ★");
   }else if(responseRating == 3){
      console.log("★ ★ ★");
   }else if(responseRating == 4){
      console.log("★ ★ ★ ★");
   }else if(responseRating == 5){
      console.log("★ ★ ★ ★ ★");
   }else if(responseRating <= 0 || responseRating > 6){
      return;
   }
}
function entereCategory() {
   const category = [{
      name: "Computers and laptops",
   },
   {
      name: "Smartphones, TV and Electronics",
   }];

   category.forEach((item, index)=> {
      console.log(index + " : \n Name: " + item.name);
   });

   const selectedCategoryIndex = prompt("\nEnter a number category (started with 0):");
   console.clear();

   if (!isNaN(selectedCategoryIndex)) {
      const index = parseInt(selectedCategoryIndex);
      if (index >= 0 && index < category.length) {
         const selectedCategory = category[index];
         console.log("\n Selected category: \n" + selectedCategory.name);
         console.log();
         if (index === 0) {
            enterCategoryLC();
         } else if (index === 1) {
            console.log("Information about Smartphones, TV and Electronics will be displayed here.");
         }
      } else {
         console.log("Category number is out of range.");
      }
   } else {
      console.log("The entered value is not a number.");
   }

   return category;
}
function enterCategoryLC(){
   const category = [{
      name: "Computers",
   },
   {
      name: "Laptops",
   }];

   category.forEach((item, index)=> {
      console.log(index + " : \n" + item.name);
   });

   const selectedCategoryIndex = prompt("\nEnter a number category (started with 0):");
   console.clear();

   if (!isNaN(selectedCategoryIndex)) {
      const index = parseInt(selectedCategoryIndex);
      if (index >= 0 && index < category.length) {
         const selectedCategory = category[index];
         console.log("\n Selected category: \n Name: " + selectedCategory.name);
         console.log();
         if (index === 0) {
            enterComputers();
         } else if (index === 1) {
            enterLaptops();
         }
      } else {
         console.log("Category number is out of range.");
      }
   } else {
      console.log("The entered value is not a number.");
   }

   return category;
}
function enterLaptops(){
   const laptops = [{
      name: "Ноутбук ASUS TUF Gaming A15 FA506NC-HN026 (90NR0JF7-M004N0) Graphite Black",
      description: "Екран 15.6' IPS (1920x1080) Full HD 144 Гц, матовий / AMD Ryzen 5 7535HS (3.3 - 4.55 ГГц) / RAM 16 ГБ / SSD 1 ТБ / NVIDIA GeForce RTX 3050",
      seller: "Bravis",
      price: "35 999₴",
   },
   {
      name: "Ноутбук Lenovo IdeaPad Slim 5 16ABR8 (82XG007TRA) Cloud Grey",
      description: "Екран 16' IPS (1920x1200) WUXGA, матовий / AMD Ryzen 5 7530U (2.0 - 4.5 ГГц) / RAM 16 ГБ / SSD 1 ТБ / AMD Radeon Graphics",
      seller: "Rozetka",
      price: "26 999₴",
   }];
   laptops.forEach((item, index)=> {
      console.log(index + " : \n Name: " + item.name + "\n Seller: " + item.seller + "\n Description: " + item.description + "\n Price: " + item.price);
   });
const selectedLaptopIndex = prompt("\nEnter a number laptop (start with 0):");
if (!isNaN(selectedLaptopIndex)) {
   const index = parseInt(selectedLaptopIndex);
   if (index >= 0 && index < laptops.length) {
        const selectedLaptop = laptops[index];
        console.log("\n Selected laptop: \n Name: " + selectedLaptop.name);
   } else{
        console.log("Laptop number is out of range.");
   }
}else {
    console.log("The entered value is not a number.");
}
return laptops;
}
function enterComputers(){
   const computers = [{
      name: "Комп'ютер ARTLINE Gaming X49 (X49v35)",
      description: "AMD Ryzen 5 5500 (3.6 - 4.2 ГГц) / RAM 16 ГБ / SSD 1 ТБ / nVidia GeForce RTX 4060 Ti, 8 ГБ / LAN / Без ОД / Без ОС",
      seller: "Rozetka",
      price: "34 599₴",
   },
   {
      name: "Комп'ютер Cobra Optimal I14.32.S9.INT.17211D",
      description: "Intel Core i5-10400 (2.9 – 4.3 ГГц) / RAM 32 ГБ / SSD 960 ГБ / Intel UHD Graphics 630 / DVD+/-RW / LAN / без ОС",
      seller: "Rozetka",
      price: "16 199₴",
   }];
   computers.forEach((item, index)=> {
      console.log(index + " : \n Name: " + item.name + "\n Seller: " + item.seller + "\n Description: " + item.description + "\n Price: " + item.price);
   });
const selectedComputerIndex = prompt("\nEnter a number laptop (start with 0):");
if (!isNaN(selectedComputerIndex)) {
   const index = parseInt(selectedComputerIndex);
   if (index >= 0 && index < computers.length) {
        const selectedComputer = computers[index];
        console.log("\n Selected computer: \n Name: " + selectedComputer.name);
   } else{
        console.log("Laptop number is out of range.");
   }
}
}
function enterCategoryPreferences(){
   const preferences = [{
      name: "Write feedback",
   },
   {
      name: "Add to favorite",
   }];
   preferences.forEach((item, index)=> {
      console.log(index + " : \n" + item.name);
   });
   const selectedCategoryPreferencesIndex = prompt("\nEnter a number preferences (start with 0):");
   console.clear();

   if (!isNaN(selectedCategoryPreferencesIndex)) {
      const index = parseInt(selectedCategoryPreferencesIndex);
      if (index >= 0 && index < preferences.length) {
         const selectedCategory = preferences[index];
         console.log("\n Selected category: \n Name: " + selectedCategory.name);
         console.log();
         if (index === 0) {
            feedback();
         } else if (index === 1) {
         }
      } else {
         console.log("Category number is out of range.");
      }
   } else {
      console.log("The entered value is not a number.");
   }
   return preferences;
}
function comment() {
   let userLogIn = logIn();
   console.clear();

   let category = entereCategory()
   let preferences = enterCategoryPreferences();

   console.clear();

   console.log("Your response:");
   console.log();

   console.log(userLogIn.firstName + " " + userLogIn.lastName);
   console.log("Feedback from the buyer. Seller: Rozetka");
   console.log(feedback.response);
   console.log("Advantages: " + feedback.advantages);
   console.log("Disadvantages: " + feedback.disadvantages);
}

comment();