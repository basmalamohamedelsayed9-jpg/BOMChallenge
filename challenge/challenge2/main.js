let setting =document.querySelector("setting")
let font=document.querySelector("#font")

font.addEventListener("change",function(){
let selectedValue=font.value
console.log(selectedValue)
document.body.style.fontFamily=`${selectedValue}`;
window.localStorage.setItem("font",`${selectedValue}`)
})
let savedFont = localStorage.getItem("font");
if (savedFont !== null) {
    document.body.style.fontFamily = savedFont;
    font.value = savedFont;
}
// 
let color=document.querySelector("#color")

color.addEventListener("change",function(){
let selectedValue=color.value
console.log(selectedValue)
document.body.style.color=`${selectedValue}`;
window.localStorage.setItem("color",`${selectedValue}`)
})
let savedcolor = localStorage.getItem("color");
if (savedFont !== null) {
    document.body.style.color = savedcolor;
    color.value = savedcolor;
}
let size=document.querySelector("#size")

size.addEventListener("change",function(){
let selectedValue=size.value
console.log(selectedValue)
document.body.style.fontSize=`${selectedValue}`;
window.localStorage.setItem("size",`${selectedValue}`)
})
let savedsize = localStorage.getItem("size");
if (savedsize !== null) {
    document.body.style.fontSize = savedsize;
    size.value = savedsize;
}

//task 2
let form=document.querySelector("form")
let inputgroup=document.querySelectorAll("input-group")
let department=document.querySelector("#department")
let name=document.querySelector("#name")
let email=document.querySelector("#email")
let age=document.querySelector("#age")
let userData = {
    name: name.value,
    email: email.value,
    age: age.value,
    department: department.value
};
sessionStorage.setItem("userData",JSON.stringify(userData))
let savedData=JSON.parse(sessionStorage.getItem("userData"))