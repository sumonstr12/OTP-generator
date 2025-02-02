
const generateOtpCode = document.getElementById('generate-otp-code');
const generateInput = document.getElementById('input-section');


var otp = Math.floor(1000 + Math.random() * 9000);;
function displayotp(){
    
    generateOtpCode.innerHTML = `
                    <div class="otp-number"> Your OTP is : ${otp} </div>
                    <div>
                        <button class="btn" id="btn">submit</button>
                    </div>
    `;

    const submitButton = document.getElementById('btn');
    console.log(submitButton);
    submitButton.addEventListener('click', () => {
        if(input_otp == otp){
            alert("OTP is correct");
        } else {
            alert("OTP is incorrect");
        }
    });
}
console.log(otp);


let input_otp = "";
const checkOtp = (e) => {
    const currentElement = e.target;
    const currentElementValue = currentElement.value;
    input_otp += (currentElementValue);
    const nextChild = currentElement.nextElementSibling;
    if(nextChild){
        nextChild.focus();
    }
}



generateInput.addEventListener('input', checkOtp);
setTimeout(displayotp, 1000);