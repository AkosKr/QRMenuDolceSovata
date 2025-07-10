const items: { name: string; price: string; milk: boolean }[] = [
{ name: "Hot Chocolate (Milk)", price: "12 RON / 250 ml", milk: true },
{ name: "Hot Chocolate (Dark)", price: "12 RON / 250 ml", milk: true },
{ name: "Tea", price: "8 RON / 250 ml", milk: false },
];

export function renderHotDrinkMenu(containerId: string) {
const container = document.getElementById(containerId)!;

items.forEach(item => {
  const wrapper = document.createElement("div");
  wrapper.className = "flex flex-row w-full items-center";

  const name = document.createElement("p");
  name.className = "w-1/2 text-left text-[16px] font-semibold pl-4";
  name.textContent = item.name;

  const price = document.createElement("p");
  price.className = "w-1/2 text-right text-[14px] font-semibold pr-4";
  price.textContent = item.price;

  wrapper.appendChild(name);

  if (item.milk === true) {
      const milk = document.createElement("img");
      milk.src = "QRMenuDolceSovata/milk-bottle.png"
      milk.alt = "milk";
      milk.className = "w-4 h-4";
      wrapper.appendChild(milk);
  } 

  wrapper.appendChild(price);
  container.appendChild(wrapper);
});
}
