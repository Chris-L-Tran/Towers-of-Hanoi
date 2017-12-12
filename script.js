

var status = false
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

function startGame() {
    startTimer()
    intBoard()

    console.log(status)
    while (status === false){
        
        //check for first post 
        
        $("#post1 .disks").click(removeDisk)
        $("#post2 .disks").click(removeDisk)
        $("#post3 .disks").click(removeDisk)
        //move disk to queue
        //check for post to add to
        //remove disk from queue
        //add disk to desired post
        //check if game conditions are met

    }
}

$("#start").click(startGame)
$("#restart").click(resetBoard)
$("#post2 .disks").click(function(){removeDisk(2)})
