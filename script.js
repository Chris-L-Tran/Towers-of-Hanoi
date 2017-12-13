// initilize global variables
var status = 0
var time = 0
var moves = 0
var counter 
var postNum = 0
var timer

// intialize arrays
var post1 = [3,2,1]
var post2 = []
var post3 = []
var queue = []
var winArray = [3,2,1]

// function to start the timer
function startTimer(){

    // set timer to 0
    time = 0

    // create timer function
    timer = setInterval(function(){
        time++
        $("#score .timeUsed").text(time)
    }, 1000)
}

// function to intialize playing board
function intBoard() {
    

    // create 3 disks on the first post
    $('<div/>', {class : 'disk1'}).prependTo($("#post1 .disks"))
    $('<div/>', {class : 'disk2'}).prependTo($("#post1 .disks"))
    $('<div/>', {class : 'disk3'}).prependTo($("#post1 .disks"))

    // turn off start button
    //$("#start").off()
    
    // create listener for reset button
    //$("#restart").click(resetBoard)
}





// function to check for win
function checkWin() {

    
    //function to check if win condition has been met
    if(post3[0] === winArray[0] && post3[1] === winArray[1] && post3[2] ===  winArray[2]){

        // alert the player they have won
        alert("You Win!\nYou beat the game in: " + moves + " moves and " + time + " seconds")
        
        // restart time
        time = 0
        // clear timer
        clearInterval(timer)
    }

    
}

// function that controls post1 clicks
function post1Click(){

    
    // checks to see if there is a disk in the queue
    if (queue.length === 0){
        
        // checks to see if there is any disks in post 1
        if(post1.length > 0){
            
            //push the disk element from one to the queue
            queue.push(post1.pop())
            
            // remove the top div element from post 1
            $("#post1 .disks").find('div').first().remove()

            // check to make sure what disk is in the queue
            
            if(queue[0] == 1){
                
                    // if queue holds one. draw disk 3
                    $('<div/>', {class : 'disk3'}).prependTo($("#post1 .diskqueue"))
                } 
                // if queue holds two. draw disk 2
                else if(queue[0] == 2){
                    $('<div/>', {class : 'disk2'}).prependTo($("#post1 .diskqueue"))
                } 
                // if queue holds three. draw disk 1
                else if (queue[0] == 3){
                    $('<div/>', {class : 'disk1'}).prependTo($("#post1 .diskqueue"))
                
            }
        }        
        
    } 

    // else statement to check if there is something in the queue
    else if (queue.length == 1){
        
        // get the number of variables in the post array
        var postSize = post1.length

        // check to see that the element in the queue is not larger than the element in the post
        if (queue[0] > post1[postSize-1]){

            // alert the user that they have made an invalid move
            alert("That is not a valid move. Please try again")

        } 
        
        // else statement for when the user has made a correct choice
        else{
            
            // if statement to check the value of the element in the queue
            if(queue[0] == 1){

                // draw the element to post1
                $('<div/>', {class : 'disk3'}).prependTo($("#post1 .disks"))
            } 
            
            // draw the element to post 2
            else if(queue[0] == 2){
                $('<div/>', {class : 'disk2'}).prependTo($("#post1 .disks"))
            } 
            
            // draw the element to post 3
            else if (queue[0] == 3){
                $('<div/>', {class : 'disk1'}).prependTo($("#post1 .disks"))
            }
            
            // move the element from the queue array to the post1 array
            post1.push(queue.pop())

            // increment the moves variable
            moves++

            // update the number of moves made
            $("#moves .moveNum").text(moves)
            
            // remove all css elements from the diskqueue
            $("#post1 .diskqueue").find('div').first().remove()
            $("#post2 .diskqueue").find('div').first().remove()
            $("#post3 .diskqueue").find('div').first().remove()
        }

        // check to see if the user has won
        checkWin()
    }

    
}

// function that controls post2 clicks
function post2Click(){

    // function to check that there is no variable in queue array
    if (queue.length == 0){
        
        //check to see if post 2 is not empty
        if(post2.length > 0){

            // remove the top variable from post 2 array and push it to the queue array
            queue.push(post2.pop())

            // remove the top css element from post2
            $("#post2 .disks").find('div').first().remove()

            // check to see the current value of queue
            if(queue[0] == 1){

                // if value in queue is 1, draw disk 3 in post 2
                $('<div/>', {class : 'disk3'}).prependTo($("#post2 .diskqueue"))
            } 

            // if value in queue is 2, draw disk 2 in post 2
            else if(queue[0] == 2){
                $('<div/>', {class : 'disk2'}).prependTo($("#post2 .diskqueue"))
            } 

            // if value in queue is 3, draw disk 1 in post 2
            else if (queue[0] == 3){
                $('<div/>', {class : 'disk1'}).prependTo($("#post2 .diskqueue"))
            }
        }
    } 
    
    // to run there is a variable in the queue
    else {

        // get the size of post2 array
        var postSize = post2.length

        // check to see that the element in the queue is not bigger than the largest element in the array
        if (queue[0] > post2[postSize-1]){

            // warn the user that they have made an invalid move
            alert("That is not a valid move. Please try again")

        } 
        
        // else statement for when the correct choice has been made
        else{

            //if value in queue is 1, draw disk 3 in post2
            if(queue[0] == 1){
                $('<div/>', {class : 'disk3'}).prependTo($("#post2 .disks"))
            } 
            
            // if value in queue is 2, draw disk 2 in post 2
            else if(queue[0] == 2){
                $('<div/>', {class : 'disk2'}).prependTo($("#post2 .disks"))
            } 
            
            // if value in queue is 3, draw disk 1 in post2
            else if (queue[0] == 3){
                $('<div/>', {class : 'disk1'}).prependTo($("#post2 .disks"))
            }

            // move the value in queue into post2
            post2.push(queue.pop())

            // increment moves variable
            moves++

            // update the moves css
            $("#moves .moveNum").text(moves)

            // remove all css elements from diskqueue
            $("#post1 .diskqueue").find('div').first().remove()
            $("#post2 .diskqueue").find('div').first().remove()
            $("#post3 .diskqueue").find('div').first().remove()
        }
        
        // check to see if win conditions are met
        checkWin()
    }
}

//function that controls post3 listener
function post3Click(){

    // check to see queue is empty
    if (queue.length == 0){

        // check to see if post is not empty
        if(post3.length > 0){
        
            // push the top value in post3 to queue
            queue.push(post3.pop())

            // remove the top css element from the disks div
            $("#post3 .disks").find('div').first().remove()

            // if value in queue is 1, draw disk 3 in post3
            if(queue[0] == 1){
                $('<div/>', {class : 'disk3'}).prependTo($("#post3 .diskqueue"))
            } 
            
            // if value in queue is 2, draw disk 2 in post3
            else if(queue[0] == 2){
                $('<div/>', {class : 'disk2'}).prependTo($("#post3 .diskqueue"))
            } 
            
            // if value in queue is 3, draw disk 1 in post3
            else if (queue[0] == 3){
                $('<div/>', {class : 'disk1'}).prependTo($("#post3 .diskqueue"))
            }
        }

    } 
    
    // else statement for when there is a variable in the queue
    else {

        // get the size of the post array
        var postSize = post3.length

        // check to see if the element in the queue is larger than the top element in post3
        if (queue[0] > post3[postSize-1]){
            // alert to inform the user they made an incorrect move
            alert("That is not a valid move. Please try again")

        } 
        
        // else statement when valid response was made
        else{

            //if value in queue is 1, draw disk 3 in post3
            if(queue[0] == 1){
                $('<div/>', {class : 'disk3'}).prependTo($("#post3 .disks"))
            } 
            
            //if value in queue is 2, draw disk 2 in post3
            else if(queue[0] == 2){
                $('<div/>', {class : 'disk2'}).prependTo($("#post3 .disks"))
            } 
            
            //if value in queue is 3, draw disk 1 in post3
            else if (queue[0] == 3){
                $('<div/>', {class : 'disk1'}).prependTo($("#post3 .disks"))
            }

            // move value of queue to to the post3 array
            post3.push(queue.pop())

            // increment moves variable
            moves++

            // update moves in html
            $("#moves .moveNum").text(moves)

            // remove all elements from the diskqueue
            $("#post1 .diskqueue").find('div').first().remove()
            $("#post2 .diskqueue").find('div').first().remove()
            $("#post3 .diskqueue").find('div').first().remove()
        }
        
        // check to see if win condition has been met
        checkWin()
    }
}

// function to clear board and reset variables
function resetBoard(){

    // reset variables
    moves = 0
    time = 0
    postNum = 0

    queue = []
    post1 = [3,2,1]
    post2 = []
    post3 = []
    

    
    // stop timer function
    clearInterval(timer)

    // set time element to 0
    $("#score .timeUsed").text(time)
    // set moves element to 0
    $("#moves .moveNum").text(moves)

    // clear all disks from the disks div
    //$("#post1 .disks").find('.div').empty()
    //$("#post2 .disks").find('.div').empty()
    //$("#post3 .disks").find('.div').empty()
    
    $("#post1 .disks").find(".disk1").remove()
    $("#post1 .disks").find(".disk2").remove()
    $("#post1 .disks").find(".disk3").remove()    
    $("#post2 .disks").find(".disk1").remove()
    $("#post2 .disks").find(".disk2").remove()
    $("#post2 .disks").find(".disk3").remove()    
    $("#post3 .disks").find(".disk1").remove()
    $("#post3 .disks").find(".disk2").remove()
    $("#post3 .disks").find(".disk3").remove()    

    // clear all disks from the diskqueue div
    $("#post1 .diskqueue").find('div').first().remove()
    $("#post2 .diskqueue").find('div').first().remove()
    $("#post3 .diskqueue").find('div').first().remove()
    
    //set up start button listener
    //$("#start").click(startGame)
    $('.disks').off()
    // turn off restart button listener
    // $("#restart").off()

    $("#start").on("click", startGame)
    $("#restart").off
    
}

// function to start the game
function startGame() {
    
    // maybe // resetBoard()

    // start listening for the reset button
    //$("#restart").click(resetBoard)

    // start the timer
    startTimer()

    // intialize the board
    intBoard()
   
    // intalize listeners for posts    
    $("#post1 .disks").click(post1Click)
    $("#post2 .disks").click(post2Click)
    $("#post3 .disks").click(post3Click)
    
    $("#start").off()
    $("#restart").on("click", resetBoard)
    
}



// create listener for start button
$("#start").on('click', startGame)


