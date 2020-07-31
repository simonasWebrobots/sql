import { watchFile } from "fs";

let actualCode = `
var element = document.createElement('div');        // create new element
element.setAttribute("id","uniqueID");              // set element's id to something unique, non existing on page
if(os.productpage) element.textContent = JSON.stringify(os); 
else element.textContent = JSON.stringify(window['product-details'].__data); 
document.documentElement.append(element);           // attach element to DOM`;     

let script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();

wait('#uniqueID',10000).always(()=>{
    //do stuff here
})