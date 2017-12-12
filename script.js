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

function intBoard() {
    $("#post1 .disks").append("<div class='disk'></div>")
}

function startGame() {
    startTimer()
    intBoard()
}

$("#start").click(test)
