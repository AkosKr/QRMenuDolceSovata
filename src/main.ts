import "./style.css";
import { renderMenu } from "./coffee.ts";
import { renderDrinkMenu } from "./drinks.ts";
import { renderHotDrinkMenu } from "./hotdrinks.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
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
          <img src="QRMenuDolceSovata/ice-cream.png" alt="ice cream" class="w-5 h-5"/>
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
            <img src="QRMenuDolceSovata/milk-bottle.png" alt="milk" class="w-5 h-5"/>
            <p class="font-semibold text-[16px]"> Contains milk  </p>
          </div>
          <div class="flex flex-row items-start w-full gap-x-5">
            <img src="QRMenuDolceSovata/ice-cream.png" alt="ice cream" class="w-5 h-5"/>
            <p class="font-semibold text-[16px]"> Ice cream may contain allergens 
depending on the flavor </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class='BottomChocolateTexture'></div>
  </div>
`;

renderMenu("menu");
renderDrinkMenu("drinkMenu");
renderHotDrinkMenu("hotDrinkMenu");
