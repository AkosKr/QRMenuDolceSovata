// coffee.ts

const items: { name: string; price: string; milk: boolean; iceCream: boolean }[] = [
  { name: "Ristretto (15ml)", price: "8 RON", milk: false, iceCream: false},
  { name: "Espresso (30ml)", price: "8 RON", milk: false, iceCream: false},
  { name: "Long black (60ml)", price: "8 RON", milk: false, iceCream: false},
  { name: "Cappuccino (180ml)", price: "10 RON", milk: true, iceCream: false},
  { name: "Latte Macchiato (220ml)", price: "10 RON", milk: true, iceCream: false},
  { name: "Ice Coffee (300ml)", price: "12 RON", milk: true, iceCream: true},
];

export function renderMenu(containerId: string) {
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

    if (item.milk === true) {
      const milk = document.createElement("span");
      milk.textContent = "🥛";
      wrapper.appendChild(milk);
    }

    if (item.iceCream === true) {
      const iceCream = document.createElement("span");
      iceCream.textContent = "f";
      wrapper.appendChild(iceCream);
    }

    wrapper.appendChild(price);
    container.appendChild(wrapper);
  });
}

