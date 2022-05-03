import {aboutModel} from "./aboutModel";
import {aboutModelfoot} from "./aboutModelFoot";

const aboutBlock = document.querySelector('#about-block');
const aboutFootBlock = document.querySelector('#about-foot-block');

let aboutHtml = aboutModel.map((a) => {
    return `
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-2">
                        <span style="background-color: red;color: white; padding: 15px 22px;
                            margin-left: 30px; border-radius: 40px; font-size: 20px;
                            font-weight: 700;">${a.id}</span>
                    </div>
                    <div class="col-md-10">
                        <h3><span class="text" style="color: red;">${a.span}</span>${a.title}</h3>
                        <ul style="list-style:disc; margin: 0 30px">
                            ${a.content.map((cont) => `<li>${cont.text}</li>`).join(" ")}
                        </ul>
                    </div>
                </div>
            </div>
    `
}).join(" ");

let aboutFootHtml = aboutModelfoot.map((a) => {
    return `

            <div class="col-md-3">
            </div>
    
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-2">

                    </div>
                    <div class="col-md-10">
                        <h3><span class="text" style="color: red;">${a.span}</span>${a.title}</h3>
                        <ul style="list-style:disc; margin: 0 30px">
                            ${a.content.map((cont) => `<li>${cont.text}</li>`).join(" ")}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="col-md-3">
            </div>
    `
}).join(" ");

aboutBlock.insertAdjacentHTML('beforeend', aboutHtml);
aboutFootBlock.insertAdjacentHTML('beforeend', aboutFootHtml);




