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
  // Read all Menus
  getPermanentListMenus() {
    fs.readFile("./data.json", "utf-8", (err, data) => {
      if (err) throw err;
      console.log(JSON.parse(data));
    });
  }
  // Read all Menus with status true
  getListMenus() {
    fs.readFile("./data.json", "utf-8", (err, data) => {
      if (err) console.log("data tidak ditemukan");
      const menus = JSON.parse(data);
      const menusFiltered = menus.filter((menu) => {
        return menu.status !== false;
      });
      console.log("List menu yang tersedia: ", menusFiltered);
    });
  }
  // Read detail Menu with status true
  getDetailMenu(id) {
    fs.readFile("./data.json", "utf-8", (err, data) => {
      if (err) throw err;
      const menus = JSON.parse(data);
      menus.forEach((menu) => {
        if (menu.id === id && menu.status === true) {
          console.log("Ini adalah menu: ", menu);
        } else if (menu.id === id && menu.status === false) {
          console.log("Menu tidak tersedia!");
        }
      });
    });
  }
}

const newMenu = new Menu({
  name: "Nasi cha kangkung",
  price: 14500,
  quantity: 3,
});
// newMenu.addMenu();
// newMenu.getPermanentListMenus();
// newMenu.getListMenus();
// newMenu.getDetailMenu(4);
