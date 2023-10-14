function bookNow() {
    var div = document.getElementById('divDetails');
    div.style.display = 'none';
    var div = document.getElementById('divInfo');
    div.style.display = 'block';

    var firstName = document.forms["formDetails"]["firstnameofhost"].value
    var lastName = document.forms["formDetails"]["lastnameofhost"].value
    var email = document.forms["formDetails"]["hostemail"].value
    var phoneNumber = document.forms["formDetails"]["hostphonenumber"].value
    var bankAccountNumber = document.forms["formDetails"]["hostbankaccountnumber"].value
    var poBox = document.forms["formDetails"]["pobox"].value
    var address = document.forms["formDetails"]["address"].value

    var details =
        'First name: ' + firstName + '<br>' +
        'Last name: ' + lastName + '<br>' +
        'Email: ' + email + '<br>' +
        'Phone Number: ' + phoneNumber + '<br>' +
        'Bank Account Number: ' + bankAccountNumber + '<br>' +
        'PO Box: ' + poBox + '<br>' +
        'Address: ' + address;

    document.getElementById("codeDetails").innerHTML = details;
}

function confirmBooking() {
    document.getElementById("output").innerHTML = "SUCCESS!!! Now on to buying presents!";
    var div = document.getElementById('divInfo');
    div.style.display = 'none';


    var name = document.forms["formInfo"]["name"].value
    var gender = document.forms["formInfo"]["gender"].value
    var age = document.forms["formInfo"]["age"].value
    var party = document.forms["formInfo"]["party"].value
    var numberOfGuests = document.forms["formInfo"]["numberofguests"].value
    var date = document.forms["formInfo"]["date"].value
    var message = document.forms["formInfo"]["message"].value

    var details =
        'Target Name: ' + name + '<br>' +
        'Target: ' + gender + '<br>' +
        'Age: ' + age + '<br>' +
        'Kind of party: ' + party + '<br>' +
        'Number of Guests: ' + numberOfGuests + '<br>' +
        'Where: New Zealand <br>' +
        'When: ' + date + '<br>' +
        'Any other requirements: ' + message;

    alert("Customer details submitted");
    document.getElementById("codeInfo").innerHTML = details;
}

function hideDivs() {
    var div = document.getElementById('divInfo');
    div.style.display = 'none';
}

function validateForm() {
    var x = document.forms["confirm"]["code"].value;
    //You will add more code here later on in the guide (conditions)
    if (x == "1") {
        alert("Customer details submitted");
    }
	else if(x == "v"){
		alert("Version 2.0");
	}
    else {
        alert("Nope! You're wrong")
    }
}