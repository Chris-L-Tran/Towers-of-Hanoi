

var status = 0
var time = 0
var moves = 0
var counter 
var postNum = 0

var post1 = [3,2,1]
var post2 = []
var post3 = []
var queue = []


function startTimer(){
    time = 0;
    setInterval(function(){
        time++;
    $("#score .timeUsed").text(time)
    }, 1000)
}

function test(){
    startTimer()
    intBoard()
    counter = parseInt($("#moves .moveNum").text())
    counter++
    moves++
    $("#moves .moveNum").text(moves)
    
}

function addDisk() {

}

function removeDisk(postNum){
    $(this).find('.disk3').remove()

    console.log(postNum)
    console.log("removeDisk")
}

function intBoard() {
    
    $('<div/>', {class : 'disk1'}).prependTo($("#post1 .disks"))
    $('<div/>', {class : 'disk2'}).prependTo($("#post1 .disks"))
    $('<div/>', {class : 'disk3'}).prependTo($("#post1 .disks"))
    $("#start").off()
}

function resetBoard(){
    $("#start").click(test)

    moves = 0
    time = 0
    
    clearInterval(counter)
    $("#score .timeUsed").text(time)
    $("#moves .moveNum").text(moves)
    $("#post1 .disks").empty()

    
}

function checkWin() {
    if(post3 == [3, 2, 1]){
        alert("You Win!")
        resetBoard()
    }
}

function post1Click(){

    console.log(queue.length)
    if (queue.length == 0){
        console.log("equal to 0")
    } else {
        console.log("equal to 1")
        checkWin()
    }

    
}

function post2Click(){
    console.log("post 2")
}

function post3Click(){
    console.log("post 3")
}

function startGame() {
    startTimer()
    intBoard()

    
   
        $("#post1 .disks").click(post1Click)
        $("#post2 .disks").click(post2Click)
        $("#post3 .disks").click(post3Click)
    
        //move disk to queue
        //check for post to add to
        //remove disk from queue
        //add disk to desired post
        //check if game conditions are met

}


$("#start").click(startGame)
$("#restart").click(resetBoard)

