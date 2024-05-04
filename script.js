
// const fadeout=() =>{
//     const loader=document.querySelector(".preloader");
//     loader.classList.remove("preloader");
// }

//     window.addEventListener("onscroll", fadeout);

let BMI;

function calculateBMI() {
    let age = parseFloat(document.getElementById("age").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    // Convert height from meters to centimeters
    height = height / 100;

    // Calculate BMI
    BMI = weight / (height * height);

    $.ajax(
        // query q=storeBMI, id=useid, bmi=bmi_value
    );

    // Display the result
    let suggestion=displayImage();
    document.getElementById("result").innerHTML =`Your BMI is ${BMI.toFixed(2)} which is ${suggestion}`;
    document.getElementById("age").value='';
    document.getElementById("weight").value='';
    document.getElementById("height").value='';
    
}

let advice = "";
function displayImage() {
    // let advice_container = document.querySelector('.advice_container');

    if (BMI < 16) {
         return advice = "Severe Thinness";
    } else if (BMI < 17) {
         return advice = "Moderate Thinness";
    } else if (BMI < 18.5) {
         return advice = "Mild Thinness";
    } else if (BMI < 25) {
         return advice = "Normal";
    } else if (BMI < 30) {
         return advice = "Overweight";
    } else if (BMI < 35) {
       return advice = "Obesity";
    } else if (BMI < 40) {
         return advice = "High Obesity";
    } else {
        return advice = "Ultra High Obesity";
    }

   
}


//search bar
function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let product = document.querySelectorAll('.product');
    let l = document.getElementsByTagName('h3');
    let found = false; // Flag to track if any result is found
    let noresult = document.querySelector('.no_result');


    for (var i = 0; i < l.length; i++) {
        let a = product[i].getElementsByTagName('h3')[0];
        let value = a.innerHTML || a.innerText || a.textContent;

        if (value.toUpperCase().indexOf(filter) > -1) {
            product[i].style.display = "";
            found = true; // Set flag to true if result is found
    
        }
         else {
            product[i].style.display = "none";
     
        }
        if (found==true){
            noresult.style.display = "none"; // Display the message
    
        }
        else{
            noresult.style.display = "flex"; // Hide the message if results found
    
        }
    }
    
    

    }



$(document).ready(function(){
    $("#show_it").click(function(){
        $(".mainlogin_logout").show(500);


    });

    $("#hide_it").click(function(){
        $(".mainlogin_logout").hide(300);

    });

});

let right_container=document.querySelector('.right_container');
let right_container_2=document.querySelector('.right_container_2');

let Measure_bmi=document.querySelector('#Measure_bmi');
let Reveal_yourself=document.querySelector('#Reveal_yourself');

let loader=document.querySelector('.preloader');
function open_right_container(){
    // let add_js_btn=document.querySelector('.add_js_btn');
    // add_js_btn.classList.add('.js_btn');
    Measure_bmi.innerHTML="Connecting..."
    right_container_2.style.display= "none";
    loader.style.display="flex";
    
    setTimeout(()=>{
        right_container.style.display= "flex";
        // add_js_btn.style.display="none";
        loader.style.display="none";
        Measure_bmi.innerHTML="MEASURE BMI";


    },3000);


}

//for reveal yourself
function open_right_container_2(){
    // let add_js_btn=document.querySelector('.add_js_btn');

    // add_js_btn.classList.add('.js_btn');
    Reveal_yourself.innerHTML="Connecting..."
    right_container.style.display= "none";
    loader.style.display="flex";
    setTimeout(()=>{ 
        right_container_2.style.display= "flex";
        // add_js_btn.style.display="none";
        loader.style.display="none";
        Reveal_yourself.innerHTML="REVEAL YOURSELF";


    },3000);
}



$(document).ready(function(){
    $("#close_right_container").click(function(){
        $(".right_container").hide();

    });
    $("#close_right_container_2").click(function(){
        $(".right_container_2").hide();

    });

});





