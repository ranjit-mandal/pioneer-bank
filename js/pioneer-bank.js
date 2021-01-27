 // login button event handler
 const loginBtn = document.getElementById("login");
 loginBtn.addEventListener("click", function(){
 const loginArea = document.getElementById("login-area");
 loginArea.style.display = "none";
 const transactionArea = document.getElementById("transaction-area");
 transactionArea.style.display = "block";
 })

//deposit button event handler 19-9: number ke Dhora
const depositBtn = document.getElementById("addDeposit");//
depositBtn.addEventListener("click", function(){
const depositAmount = document.getElementById("depositAmount").value;//
depositNumber = parseFloat(depositAmount);//

//19-10: number Deposit-e jog korte hobe
const currentDeposit = document.getElementById("currentDeposit").innerText;//
const currentDepositNumber = parseFloat(currentDeposit);
const totalDeposit = depositNumber+currentDepositNumber;
document.getElementById("currentDeposit").innerText = totalDeposit;//
document.getElementById("depositAmount").value=""; 
//For Clear written number

// Balance-e Jog Kora: 19-11
const currentBalance = document.getElementById("currentBalance").innerText;
const currentBalanceNumber = parseFloat(currentBalance);
const totalBalance = depositNumber + currentBalanceNumber; 
document.getElementById("currentBalance").innerText = totalBalance;//
//OK

const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener("click", function(){
    //ok
    const drawAmount = document.getElementById('withdrawAmount').value;
    const withdrawNumber = parseFloat(drawAmount);
    //OK || Next >> 19-10 Start>>>
const previousWithdraw = document.getElementById('preWithdraw').innerText;
const currentWithdrawNumber = parseFloat(previousWithdraw);
const totalWithdraw = withdrawNumber + currentWithdrawNumber;
document.getElementById('preWithdraw').innerText = totalWithdraw;
//console.log(totalWithdraw);


})
})


    

