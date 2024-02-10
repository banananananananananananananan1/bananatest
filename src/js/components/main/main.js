import {generalMain} from "./mainModel";

const main = document.querySelector('#main')

let main_Html = generalMain.map((a) => {
    return `

    <p>${a.text_Lorem}</p>
    <ul>
        <li>${a.text_1}</li>
        <li>${a.text_2}</li>
        <li>${a.text_3}</li>
        <li>${a.text_4}</li>
        <li>${a.text_5}</li>
        <li>${a.text_6}</li>  
        <li>${a.text_7}</li>
        <li>${a.text_8}</li>  
    </ul>
 `
}).join("");



main.insertAdjacentHTML('beforeend',main_Html)
