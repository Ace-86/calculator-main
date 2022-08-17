# calculator
functional calculator for simple operations

How it Works:
Global variables are set for each button. Click counter for each math operation function is also set to 0.
for loop to cycle through 'all' buttons. when an numbered or decimal button is pressed, run function. display max character set to 10.
display will equal to value of button pressed; will concat with all buttons pressed until operator button is pressed.

Create storage function:  variable textToSave is equal to what is currently inside display.variable textToSave is saved to 'firstVar' inside session storage
variable textToSave is saved to 'secondVar' inside session storage.display is erased.

Each math operation is given a function that is called when button is pressed. In the equal sign function, each operation's click counter signals whether the operation is performed. After the answer is display, pressing another operation button will clear the screen and display the new input

Event listeners are given for each operation button on keydown press initializing the functions above