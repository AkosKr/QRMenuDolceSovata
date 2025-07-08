import "./style.css";
import { renderMenu } from './coffee.ts';
import { renderDrinkMenu } from './drinks.ts';
import { renderHotDrinkMenu } from './hotdrinks.ts';

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class='MainFrame'>
    <div class='TopChocolateTexture'></div>
    <div class='MainContentHolder'>
      <div class="flex flex-col items-center-safe min-h-20 ">
        <div class="separator w-full text-[40px]"> MENU </div>
        <p class="text-center text-[20px] font-bold mt-0 pt-0 relative -top-4"> Dolce Sovata </p>
      </div>
      <div>
        <p class="font-bold text-[24px]"> Ice cream </p>
        <div class="flex flex-row w-full">
          <p class="w-1/2 text-left text-[16px] font-medium pl-4"> Daily Selection </p>
          <p class="w-1/2 text-right text-[14px] font-medium pr-4"> 8 RON / 80 gr. </p>
        </div>
      </div>
      <div>
        <div class="flex flex-col items-center w-full text-center">
          <p class="font-bold text-[24px] text-center"> Coffee </p>
          <p class="font-black text-[13px] mt-0 pt-0 "> Decaf available </p>
        </div>
        <div id="menu"></div>
      </div>
      <div>
        <div class="flex flex-col items-center w-full text-center">
          <p class="font-bold text-[24px] text-center"> Drinks </p>
        </div>
        <div id="drinkMenu"></div>
      </div>
      <div>
        <div class="flex flex-col items-center w-full text-center">
          <p class="font-bold text-[24px] text-center"> Hot Drinks </p>
        </div>
        <div id="hotDrinkMenu"></div>
      </div>
      <div>
        <div class="flex flex-col items-center w-full text-center">
          <p class="font-bold text-[24px] text-center"> Opening Hours </p>
        </div>
        <div>
          <p class="font-semibold text-[16px]"> Monday - Sunday </p>
          <p class="font-semibold text-[16px]"> 10:00 - 21:00 </p>
        </div>
      </div>
      <div>
        <div class="flex flex-col items-center w-full text-center">
          <p class="font-bold text-[24px] text-center"> Allergens </p>
        </div>
        <div>
          <p class="font-semibold text-[16px]"> Contains milk  </p>
          <p class="font-semibold text-[16px]"> Ice cream may contain allergens 
depending on the flavor </p>
        </div>
      </div>
    </div>
  </div>
`;

renderMenu("menu");
renderDrinkMenu("drinkMenu");
renderHotDrinkMenu("hotDrinkMenu");


