function toggleHandler(id){
    const toggleClass = document.getElementsByClassName('toggle_form')
        for (const toggle of toggleClass) {
            toggle.style.display = 'none'
        }
        document.getElementById(id).style.display = 'block'
}
document.getElementById('grid_menu_add')
    .addEventListener('click', function () {
        toggleHandler('add_money_form')
    }) 
document.getElementById('grid_menu_cashout')
    .addEventListener('click', function () {
       toggleHandler('cashout_money_form')
    })
document.getElementById('grid_menu_bonus')
    .addEventListener('click', function () {
       toggleHandler('bonus_money_form')
    })
document.getElementById('grid_menu_pay')
    .addEventListener('click', function () {
       toggleHandler('pay_money_form')
    })
const validPin = 1234   //pin for features
function inputValue(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputValueNumber = parseInt(inputFieldValue)
    return inputValueNumber
}
function cashBalance(id) {
    const balanceValue = document.getElementById(id)
    const balanceValueString = balanceValue.innerText
    const balanceValueInteger = parseInt(balanceValueString)
    return balanceValueInteger
}
document.getElementById('add_money_btn')
    .addEventListener(
        'click', function (e) {
            e.preventDefault()
            const bank = document.getElementById('bank_name').value
            const addAccountNum = document.getElementById('account_number_to_add').value
            const addAmount = inputValue('added_amount')
            const pin = inputValue('send_pin_number')
            const balance = cashBalance('balance')

            if (addAccountNum.length !== 11) {
                alert('Please provide valid 11 digit account number')
                return;
            }
            if (pin !== validPin) {
                alert('please provide valid pin')
                return;
            }
            const newBalance = addAmount + balance
            document.getElementById('balance').innerText = newBalance
        })
document.getElementById('withdraw_money_btn')
    .addEventListener(
        'click', function (e) {
            e.preventDefault()
            const withdrawAccountNum = document.getElementById('agent_number_to_withdraw').value
            const withdrawAmount = inputValue('withdraw_amount')
            const pin = inputValue('withdraw_pin_number')
            const balance = cashBalance('balance')
            if (withdrawAccountNum.length !== 11) {
                alert('Please provide valid 11 digit account number')
                return;
            }
            if (pin !== validPin) {
                alert('please provide valid pin')
                return;
            }
            const newBalance = balance - withdrawAmount
            document.getElementById('balance').innerText = newBalance
        })
const validCode = 557799 //this is coupon code
document.getElementById('bonus_money_btn')
        .addEventListener(
            'click',function(e){
                e.preventDefault()
                const couponCode = inputValue('coupon_code_number')
                const pin = inputValue('bonus_pin_number')
                const balance = cashBalance('balance')
                if(couponCode!== validCode){
                    alert('This code does not exist, Please add a valid coupon code')
                    return;
                }
                if (pin !== validPin){
                    alert('please provide valid pin')
                    return;
                }
                const newBalance = balance + 100
                document.getElementById('balance').innerText = newBalance
                alert('Congratulations!! you got $100 bonus')
            })
document.getElementById('pay_money_btn')
            .addEventListener(
                'click',function(e){
                    e.preventDefault()
                    const payAccountNumber = inputValue('account_number_to_pay')
                    const payAmount = inputValue('pay_amount')
                    const payPin = inputValue('pay_pin_number')
                    const balance = cashBalance('balance')
                    // if(payAccountNumber.length !== 11){
                    //     alert('please provide 11 digit account number')
                    //     return;
                    // }
                    if(payPin !== validPin){
                        alert('please provide valid pin')
                        return;
                    }

                    const newBalance = balance - payAmount
                    document.getElementById('balance').innerText = newBalance
                    alert('your bill has been paid')    
                })