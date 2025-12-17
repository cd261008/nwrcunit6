function myFormSubmits(event){
    event.preventDDefault();//prevents the default form submitting
    //callthe custom functionsyou want to execute before submitting the form.
    //downloadFormData();
    thanks();
}
function thanks(){
    // redirect to another page after download
    alert("Thank you for completeting the contact form.");
    window.location.href = "thankyou.html";
}