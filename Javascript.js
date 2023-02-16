const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('clave');
const password2 = document.getElementById('confirmarclave');




function showError(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function showSucces(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}


//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSucces(input)
    }else {
        showError(input,'El email no es valido');
    }
}


//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,"Añadir texto")
        }else {
            showSucces(input);
        }
    });
}

//check text
function allLetter(input)
  {
   var letters = /^[A-Za-z]+$/;
   if(input.value.match(letters))
     {
      showSucces(input);
      return true;
     }
   else
     {
      showError(input,"El nombre No debe tener numeros");
     return false;
     }
  }


//check input Length
function checkLength(password, min ,max) {
    if(password.value.length < min) {
        showError(password, "Debe tener maximo 8 caracteres");
    
        
    }else {
        showSucces(password);
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check passwords match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Claves no son iguales');
    }
 
}


//Event Listeners
form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(password,8);
    checkEmail(email);
    checkPasswordMatch(password, password2);
    allLetter(username);
},

);

