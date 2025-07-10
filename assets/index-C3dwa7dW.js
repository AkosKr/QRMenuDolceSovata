(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const s=[{name:"Ristretto (15ml)",price:"8 RON",milk:!1,iceCream:!1},{name:"Espresso (30ml)",price:"8 RON",milk:!1,iceCream:!1},{name:"Long black (60ml)",price:"8 RON",milk:!1,iceCream:!1},{name:"Cappuccino (180ml)",price:"10 RON",milk:!0,iceCream:!1},{name:"Latte Macchiato (220ml)",price:"10 RON",milk:!0,iceCream:!1},{name:"Ice Coffee (300ml)",price:"12 RON",milk:!0,iceCream:!0}];function r(i){const a=document.getElementById(i);s.forEach(n=>{const l=document.createElement("div");l.className="flex flex-row w-full items-center";const e=document.createElement("p");e.className="w-1/2 text-left text-[16px] font-semibold pl-4",e.textContent=n.name;const t=document.createElement("p");if(t.className="w-1/2 text-right text-[14px] font-semibold pr-4",t.textContent=n.price,l.appendChild(e),n.milk===!0){const c=document.createElement("img");c.src="QRMenuDolceSovata/milk-bottle.png",c.alt="milk",c.className="w-4 h-4",l.appendChild(c)}if(n.iceCream===!0){const c=document.createElement("img");c.src="QRMenuDolceSovata/ice-cream.png",c.alt="ice cream",c.className="w-4 h-4",l.appendChild(c)}l.appendChild(t),a.appendChild(l)})}const o=[{name:"Coca Cola",price:"8 RON / 500 ml"},{name:"Fanta",price:"8 RON / 500 ml"},{name:"Fanta Madnass",price:"8 RON / 500 ml"},{name:"Sprite",price:"8 RON / 500 ml"},{name:"Schweppes Bitter Lemon",price:"8 RON / 500 ml"},{name:"Schweppes Tonic",price:"8 RON / 500 ml"},{name:"Pepsi Twist",price:"8 RON / 500 ml"},{name:"Pepsi",price:"8 RON / 500 ml"},{name:"Cappy Nectar - Orange",price:"8 RON / 250 ml"},{name:"Cappy Nectar - Peach",price:"8 RON / 250 ml"},{name:"Fuze Tea - Lemon",price:"8 RON / 500 ml"},{name:"Fuze Tea - Peach",price:"8 RON / 500 ml"},{name:"Fuze Tea - Wild Berry",price:"8 RON / 500 ml"},{name:"Perla Harghitei",price:"8 RON / 500 ml"},{name:"Borsec",price:"8 RON / 500 ml"}];function m(i){const a=document.getElementById(i);o.forEach(n=>{const l=document.createElement("div");l.className="flex flex-row w-full";const e=document.createElement("p");e.className="w-1/2 text-left text-[16px] font-semibold pl-4",e.textContent=n.name;const t=document.createElement("p");t.className="w-1/2 text-right text-[14px] font-semibold pr-4",t.textContent=n.price,l.appendChild(e),l.appendChild(t),a.appendChild(l)})}const p=[{name:"Hot Chocolate (Milk)",price:"12 RON / 250 ml",milk:!0},{name:"Hot Chocolate (Dark)",price:"12 RON / 250 ml",milk:!0},{name:"Tea",price:"8 RON / 250 ml",milk:!1}];function d(i){const a=document.getElementById(i);p.forEach(n=>{const l=document.createElement("div");l.className="flex flex-row w-full items-center";const e=document.createElement("p");e.className="w-1/2 text-left text-[16px] font-semibold pl-4",e.textContent=n.name;const t=document.createElement("p");if(t.className="w-1/2 text-right text-[14px] font-semibold pr-4",t.textContent=n.price,l.appendChild(e),n.milk===!0){const c=document.createElement("img");c.src="QRMenuDolceSovata/milk-bottle.png",c.alt="milk",c.className="w-4 h-4",l.appendChild(c)}l.appendChild(t),a.appendChild(l)})}document.querySelector("#app").innerHTML=`
  <div class='MainFrame'>
    <div class='TopChocolateTexture'></div> 
    <div class="IceCreamFrame">
    <div class='MainContentHolder'>
      <div class="flex flex-col items-center-safe min-h-20 ">
        <div class="separator w-full text-[40px]"> MENU </div>
        <p class="text-center text-[20px] font-bold mt-0 pt-0 relative -top-4"> Dolce Sovata </p>
      </div>
      <div class="text-center mt-7">
        <p class="font-bold text-[24px]"> Ice cream </p>
        <div class="flex flex-row w-full">
          <p class="w-1/2 text-left text-[16px] font-semibold pl-4"> Daily Selection </p>
          <img src="ice-cream.png" alt="ice cream" class="w-5 h-5"/>
          <p class="w-1/2 text-right text-[14px] font-semibold pr-4"> 8 RON / 80 gr </p>
        </div>
      </div>
      <div class="mt-7">
        <div class="flex flex-col items-center w-full text-center">
          <p class="font-bold text-[24px] text-center"> Coffee </p>
          <p class="font-black text-[13px] mt-0 pt-0 "> Decaf available </p>
        </div>
        <div class="mt-4" id="menu"></div>
      </div>
      <div class="mt-7">
        <div class="flex flex-col items-center w-full text-center">
          <p class="font-bold text-[24px] text-center"> Drinks </p>
        </div>
        <div class="mt-4" id="drinkMenu"></div>
      </div>
      <div class="mt-7">
        <div class="flex flex-col items-center w-full text-center">
          <p class="font-bold text-[24px] text-center"> Hot Drinks </p>
        </div>
        <div class="mt-4" id="hotDrinkMenu"></div>
      </div>
      <div class="mt-7">
        <div class="flex flex-col items-center w-full text-center">
          <p class="font-bold text-[24px] text-center"> Opening Hours </p>
        </div>
        <div class="pl-4 mt-4 text-center">
          <p class="font-semibold text-[16px]"> Monday - Sunday </p>
          <p class="font-semibold text-[16px]"> 10:00 - 21:00 </p>
        </div>
      </div>
      <div class="mt-7">
        <div class="flex flex-col items-center w-full text-center">
          <p class="font-bold text-[24px] text-center"> Allergens </p>
        </div>
        <div class="flex flex-col items-start pl-4 w-full mt-4">
          <div class="flex flex-row items-start w-full gap-x-5">
            <img src="milk-bottle.png" alt="milk" class="w-5 h-5"/>
            <p class="font-semibold text-[16px]"> Contains milk  </p>
          </div>
          <div class="flex flex-row items-start w-full gap-x-5">
            <img src="ice-cream.png" alt="ice cream" class="w-5 h-5"/>
            <p class="font-semibold text-[16px]"> Ice cream may contain allergens 
depending on the flavor </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class='BottomChocolateTexture'></div>
  </div>
`;r("menu");m("drinkMenu");d("hotDrinkMenu");
