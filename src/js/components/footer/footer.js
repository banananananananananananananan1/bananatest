import generalFooter from "./footerModel"

const footer = document.querySelector('#footer');

let footer_Html = generalFooter.map((a) => {
    return `

    <p>${a.allRights}</p>
    <p style="font-size: 13px;color: black;">${a.team}</p>

 `
}).join("");

footer.insertAdjacentHTML('beforeend',footer_Html)