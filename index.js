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
        fs.readFile("./data.json", "utf-8", (err, data) => {
          if (err) console.log("data tidak ditemukan");
          const newMenus = JSON.parse(data);
          const menusFiltered = newMenus.filter((menu) => {
            return menu.status !== false;
          });
          console.log("berikut menu yang tersedia: ", menusFiltered);
        });
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
  getDetailMenu() {
    fs.readFile("./data.json", "utf-8", (err, data) => {
      if (err) throw err;
      const menus = JSON.parse(data);
      menus.forEach((menu) => {
        if (menu.id === this.menu.id && menu.status === true) {
          console.log("Ini adalah menu: ", menu);
        } else if (menu.id === this.menu.id && menu.status === false) {
          console.log("Menu tidak tersedia!");
        }
      });
    });
  }
  // Delete and Update status of Menu by ID
  deleteMenu() {
    fs.readFile("./data.json", "utf-8", (err, data) => {
      if (err) throw err;
      const menus = JSON.parse(data);
      menus.forEach((menu) => {
        if (menu.id === this.menu.id && menu.status === true) {
          menu.status = false;
        } else if (menu.id === this.menu.id && menu.status === false) {
          console.log("Menu tidak tersedia!");
        }
      });
      console.log("Berikut menu yang di hapus:", menus[this.menu.id - 1]);
      fs.writeFile("./data.json", JSON.stringify(menus), (err) => {
        if (err) throw err;
        fs.readFile("./data.json", "utf-8", (err, data) => {
          if (err) console.log("data tidak ditemukan");
          const newMenus = JSON.parse(data);
          const menusFiltered = newMenus.filter((menu) => {
            return menu.status !== false;
          });
          console.log("Sisa menu yang tersedia adalah: ", menusFiltered);
        });
      });
    });
  }
}

// OOP Inheritance
class UpdateMenu extends Menu {
  constructor(menu) {
    super(menu);
    // console.log("ini adalah menu", menu);
    this.id = menu.id;
    // console.log("ini adalah id", menu.id);
  }
  // Update Price Menu by id
  updateMenuPrice() {
    fs.readFile("./data.json", "utf-8", (err, data) => {
      if (err) throw err;
      const menus = JSON.parse(data);
      menus.forEach((menu) => {
        if (menu.id === this.id && menu.status === true) {
          menu.price = this.menu.price;
          console.log("Berikut menu yang di update:", menus[this.id - 1]);
          fs.writeFile("./data.json", JSON.stringify(menus), (err) => {
            if (err) throw err;
            fs.readFile("./data.json", "utf-8", (err, data) => {
              if (err) console.log("data tidak ditemukan");
              const newMenus = JSON.parse(data);
              const menusFiltered = newMenus.filter((menu) => {
                return menu.status !== false;
              });
              console.log("Ini adalah harga menu terbaru: ", menusFiltered);
            });
          });
        } else if (menu.id === this.id && menu.status === false) {
          console.log("Menu tidak tersedia!");
        }
      });
    });
  }
  // Update Name Menu by id
  updateMenuName() {
    fs.readFile("./data.json", "utf-8", (err, data) => {
      if (err) throw err;
      const menus = JSON.parse(data);
      menus.forEach((menu) => {
        if (menu.id === this.id && menu.status === true) {
          menu.name = this.menu.name;
          console.log("Berikut menu yang di update:", menus[this.id - 1]);
          fs.writeFile("./data.json", JSON.stringify(menus), (err) => {
            if (err) throw err;
            fs.readFile("./data.json", "utf-8", (err, data) => {
              if (err) console.log("data tidak ditemukan");
              const newMenus = JSON.parse(data);
              const menusFiltered = newMenus.filter((menu) => {
                return menu.status !== false;
              });
              console.log("Ini adalah harga menu terbaru: ", menusFiltered);
            });
          });
        } else if (menu.id === this.id && menu.status === false) {
          console.log("Menu tidak tersedia!");
        }
      });
    });
  }
  // Update Quantity Menu by id
  updateMenuQuantity() {
    fs.readFile("./data.json", "utf-8", (err, data) => {
      if (err) throw err;
      const menus = JSON.parse(data);
      menus.forEach((menu) => {
        if (menu.id === this.id && menu.status === true) {
          menu.quantity = this.menu.quantity;
          console.log("Berikut menu yang di update:", menus[this.id - 1]);
          fs.writeFile("./data.json", JSON.stringify(menus), (err) => {
            if (err) throw err;
            fs.readFile("./data.json", "utf-8", (err, data) => {
              if (err) console.log("data tidak ditemukan");
              const newMenus = JSON.parse(data);
              const menusFiltered = newMenus.filter((menu) => {
                return menu.status !== false;
              });
              console.log("Ini adalah harga menu terbaru: ", menusFiltered);
            });
          });
        } else if (menu.id === this.id && menu.status === false) {
          console.log("Menu tidak tersedia!");
        }
      });
    });
  }
}

// Run Command with process.argv
// 1. Get list Menu - node index.js 1
if (Number(process.argv[2]) === 1) {
  new Menu().getListMenus();
}
// 2. Get Detail Menu by ID - node index.js 2 [id]
if (Number(process.argv[2]) === 2) {
  new Menu({ id: Number(process.argv[3]) }).getDetailMenu();
}
// 3. Get Detail Menu by ID - node index.js 3 [name] [price] [quantity]
if (Number(process.argv[2]) === 3) {
  new Menu({
    name: process.argv[3],
    price: Number(process.argv[4]),
    quantity: Number(process.argv[5]),
  }).addMenu();
}
// 4. Delete Menu by ID - node index.js 4 [id]
if (Number(process.argv[2]) === 4) {
  new Menu({ id: Number(process.argv[3]) }).deleteMenu();
}
// 5. Update menu by price - node index.js 5 [price] [id]
if (Number(process.argv[2]) === 5) {
  new UpdateMenu({
    price: Number(process.argv[3]),
    id: Number(process.argv[4]),
  }).updateMenuPrice();
}
// 6. Update menu by name - node index.js 6 [name] [id]
if (Number(process.argv[2]) === 6) {
  new UpdateMenu({
    name: process.argv[3],
    id: Number(process.argv[4]),
  }).updateMenuName();
}
// 7. Update menu by name - node index.js 6 [quantity] [id]
if (Number(process.argv[2]) === 7) {
  new UpdateMenu({
    quantity: process.argv[3],
    id: Number(process.argv[4]),
  }).updateMenuQuantity();
}
