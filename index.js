const fs = require("fs");

class Menu {
  constructor(menu) {
    this.menu = menu;
    // console.log(menu);
  }
  // Create new menu
  addMenu() {
    fs.readFile("./data.json", "utf8", (err, data) => {
      if (err) throw err;
      let menus = JSON.parse(data);
      menus.push(this.menu);
      menus[menus.length - 1].id = menus[menus.length - 2].id + 1;
      menus[menus.length - 1].status = true;
      console.log("Berikut menu yang ditambahkan :", menus[menus.length - 1]);
      fs.writeFile("./data.json", JSON.stringify(menus), (err) => {
        if (err) throw err;
      });
    });
  }
}

const newMenu = new Menu({
  name: "Nasi cha kangkung",
  price: 14500,
  quantity: 3,
});
newMenu.addMenu();
