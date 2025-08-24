// toggle
document.getElementById('grid_menu_add')
    .addEventListener('click',function(){
        document.getElementById('cashout_money_form').style.display= 'none'
        document.getElementById('add_money_form').style.display = 'block'
        document.getElementById('grid_menu_add').classList.add('selected_indicator')
        document.getElementById('grid_menu_cashout').classList.remove('selected_indicator')

    })
document.getElementById('grid_menu_cashout')
    .addEventListener('click',function(){
        document.getElementById('add_money_form').style.display= 'none'
        document.getElementById('cashout_money_form').style.display = 'block'
        document.getElementById('grid_menu_cashout').classList.add('selected_indicator')
        document.getElementById('grid_menu_add').classList.remove('selected_indicator')
    })

const validPin = 4321
document.getElementById('add_money_btn')
    .addEventListener(
        'click',function(e){
            e.preventDefault()
            const bank = document.getElementById('bank_name').value
            const addAccountNum = document.getElementById('account_number_to_add').value
            const addAmount = parseInt(document.getElementById('added_amount').value)
            const pin = parseInt(document.getElementById('send_pin_number').value)
            const balance = parseInt(document.getElementById('balance').innerText)

            if(addAccountNum.length!==11){
                alert('Please provide valid 11 digit account number')
                return;
            }
            if(pin!==validPin){
                alert('please provide valid pin')
                return;
            }
            // if(typeof addAmount !== 'number'){
            //     alert('enter valid amount to add')
            //     return;
            // }
            const newBalance = addAmount+balance
            document.getElementById('balance').innerText = newBalance
        }
    )

document.getElementById('withdraw_money_btn')
    .addEventListener(
        'click',function(e){
            e.preventDefault()
            const withdrawAccountNum = document.getElementById('agent_number_to_withdraw').value
            const withdrawAmount = parseInt(document.getElementById('withdraw_amount').value)
            const pin = parseInt(document.getElementById('withdraw_pin_number').value)
            const balance = parseInt(document.getElementById('balance').innerText)

            if(withdrawAccountNum.length!==11){
                alert('Please provide valid 11 digit account number')
                return;
            }
            if(pin!==validPin){
                alert('please provide valid pin')
                return;
            }
            // if(typeof addAmount !== 'number'){
            //     alert('enter valid amount to add')
            //     return;
            // }
            const newBalance = balance-withdrawAmount
            document.getElementById('balance').innerText = newBalance
        }
    )
