const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");



const checkInput = () => {
    if(input.value === ""){
        output.innerHTML = "Please enter a valid number";
        return false;
    }else if(input.value < 1){
        output.innerHTML = "Please enter a number greater than or equal to 1";
        return false;
    }else if(input.value >= 4000){
        output.innerHTML = "Please enter a number less than or equal to 3999";
        return false;

    }
    return true;
};

const converter = (num) =>{

    if(num >= 1000){
        return "M" + converter(num - 1000);
    }
    if(num >= 900){
        return "CM" + converter(num - 900);
    }
    if(num >= 500){
        return "D" + converter(num - 500);
    }
    if(num >= 400){
        return "CD" + converter(num - 400);
    }
    if(num >= 100){
        return "C" + converter(num - 100);
    }
    if(num >= 90){
        return "XC" + converter(num - 90);
    }
    if(num >= 50){
        return "L" + converter(num - 50);
    }
    if(num >= 40){
        return "XL" + converter(num - 40);
    }
    if(num >= 10){
        return "X" + converter(num - 10);
    }
    if(num >= 9){
        return "IX" + converter(num - 9);
    }
    if(num >= 5){
        return "V" + converter(num - 5);
    }
    if(num >= 4){
        return "IV" + converter(num - 4);
    }
    if(num >= 1){
        return "I" + converter(num - 1);
    }

    return "";
}
convertBtn.addEventListener("click", () =>{
    if(checkInput()){
        const num = parseInt(input.value);
        const result = converter(num);
        output.innerHTML = result;
    }
});
input.addEventListener("keydown" ,(e)=>{
    if(e.key === "Enter"){
        if(checkInput()){
            const num = parseInt(input.value);
            const result = converter(num);
            output.innerHTML = result;
        }
    }
});