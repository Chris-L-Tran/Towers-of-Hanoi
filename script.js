console.log("yay")

var status = false
var time = 0;
var moves = 0;
var counter 

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

function removeDisk(){
    $(this).find('.disk3').remove()
    console.log("yay2")
}
function intBoard() {
    //$("#post1 .disks").prepend($disk)
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
}

$("#start").click(test)
$("#restart").click(resetBoard)
$("#post1 .disks").click(removeDisk)
