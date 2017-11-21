// begin JS with images and counters
$(document).ready() {

    crystals = ['assets/img/red.jpg', 'assets/img/blue.jpg', 'assets/img/yellow.jpg', 'assets/img/green.jpg'];

    var counter = 0;
    var wins = 0;
    var losses = 0;

    function newFunction(wins, losses) {
            
            //updates counters 
            $('#wins').text(wins);
            $('#loss').text(losses);
           
            //generate new method from newCrystal method.
            function newCrystals() {
                var numbers = [];
                while (numbers.length < 4) {
                    var randomnumber = Math.ceil(Math.random() * 12);
                    var found = false;
                    for (var i = 0; i < numbers.length; i++) {
                        if (numbers[i] == randomnumber) {
                            found = true;
                            break;
                        }
                    }
                    if (!found)
                        numbers[numbers.length] = randomnumber;
                }
            }
        }

};
