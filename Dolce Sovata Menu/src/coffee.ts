// coffee.ts

const items: { name: string; price: string }[] = [
  { name: "Ristretto (15ml)", price: "8 RON" },
  { name: "Espresso (30ml)", price: "8 RON" },
  { name: "Long black (60ml)", price: "8 RON" },
  { name: "Cappuccino (180ml)", price: "10 RON" },
  { name: "Latte Macchiato (220ml)", price: "10 RON" },
  { name: "Ice Coffee (300ml)", price: "12 RON" },
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
    wrapper.appendChild(price);
    container.appendChild(wrapper);
  });
}

