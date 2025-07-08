const items: { name: string; price: string }[] = [
{ name: "Coca Cola", price: "8 RON / 500 ml" },
{ name: "Fanta", price: "8 RON / 500 ml" },
{ name: "Fanta Madnass", price: "8 RON / 500 ml" },
{ name: "Sprite", price: "8 RON / 500 ml" },
{ name: "Schweppes Bitter Lemon", price: "8 RON / 500 ml" },
{ name: "Schweppes Tonic", price: "8 RON / 500 ml" },
{ name: "Pepsi Twist", price: "8 RON / 500 ml" },
{ name: "Pepsi", price: "8 RON / 500 ml" },
{ name: "Cappy Nectar - Orange", price: "8 RON / 250 ml" },
{ name: "Cappy Nectar - Peach", price: "8 RON / 250 ml" },
{ name: "Fuze Tea - Lemon", price: "8 RON / 500 ml" },
{ name: "Fuze Tea - Peach", price: "8 RON / 500 ml" },
{ name: "Fuze Tea - Wild Berry", price: "8 RON / 500 ml" },
{ name: "Perla Harghitei", price: "8 RON / 500 ml" },
{ name: "Borsec", price: "8 RON / 500 ml" }
];

export function renderDrinkMenu(containerId: string) {
const container = document.getElementById(containerId)!;

items.forEach(item => {
  const wrapper = document.createElement("div");
  wrapper.className = "flex flex-row w-full";

  const name = document.createElement("p");
  name.className = "w-1/2 text-left text-[16px] font-semibold pl-4";
  name.textContent = item.name;

  const price = document.createElement("p");
  price.className = "w-1/2 text-right text-[14px] font-semibold pr-4";
  price.textContent = item.price;

  wrapper.appendChild(name);
  wrapper.appendChild(price);
  container.appendChild(wrapper);
});
}

