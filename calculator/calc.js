
let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');


let string = "";


buttons.forEach(button => {
      button.addEventListener('click', (e) => {
           const buttonValue = e.target.innerHTML;

           console.log(`Button clicked: ${buttonValue}`);

        if (buttonValue === "=") {
          
            try   {
                string = eval(string); 
                    input.value = string; 
            } catch (error) {
                  console.error("Invalid expression", error); 
                
                
                  input.value = "Error";  
                     string = "";  
            }
        } else if (buttonValue === "AC") {
           
            string = "";  
             
            
            input.value = string;
        } 
        else if (buttonValue === "DEL") 
            {
           
            string = string.slice(0, -1); 
            input.value = string;  
        } else
         {
            


            string += buttonValue;

            input.value = string; 
        }
    }
);
}
);
