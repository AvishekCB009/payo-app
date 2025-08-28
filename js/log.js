document.getElementById('log_in_btn')
    .addEventListener('click',function(e){
        e.preventDefault()
        const mNumber = 12345678900;
        const pinNumber = 1234;
        const mNumberVal = document.getElementById('mobile_number').value
        const convertedMNumber = parseInt(mNumberVal)
        const pinNumberVal = document.getElementById('pin_number').value
        const convertedPinNumber = parseInt(pinNumberVal)
        if(convertedMNumber === mNumber && convertedPinNumber === pinNumber){
          window.location.href="./pages/home.html"
        }})
