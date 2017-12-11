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

    var counter = parseInt($("#moves .moveNum").text())
    counter++
    $("#moves .moveNum").text(counter)
    

}

$("#test").click(test)
