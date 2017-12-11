console.log("yay")

function test(){
    var counter = parseInt($("#moves .moveNum").text())
    counter++
    $("#moves .moveNum").text(counter)
}

$("#test").click(test)
