var screen = document.getElementById("screen");
var screenvalue = "";
buttons = document.querySelectorAll('button');
for (item of buttons)
{
    item.addEventListener('click', (e) =>
    {
        buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText == "X")
        {
            buttonText = '*';
            screenvalue += '*';
            screen.value = screenvalue;
            }
        else  if (buttonText == 'C')
        {
            screenvalue = '';
            screen.value = screenvalue;
            }
        else if (buttonText == '=')
            screen.value = eval(screenvalue);
        else {
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
     })
 }
