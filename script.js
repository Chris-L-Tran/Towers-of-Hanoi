console.log("yay")

function startTimer(){
    var time = 0;
    setInterval(function(){
        time++;
    $("#score .timeUsed").text(time)
    }, 1000)
}

function test(){
    startTimer()
    intBoard()
    var counter = parseInt($("#moves .moveNum").text())
    counter++
    $("#moves .moveNum").text(counter)
    

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
    
}

function startGame() {
    startTimer()
    intBoard()
}

$("#start").click(test)
$("#restart").click(removeDisk)
$("#post1 .disks").click(removeDisk)
