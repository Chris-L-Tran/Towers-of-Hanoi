

var status = 0
var time = 0
var moves = 0
var counter 
var postNum = 0
var timer

var post1 = [3,2,1]
var post2 = []
var post3 = []
var queue = []
var winArray = [3,2,1]

function startTimer(){
    time = 0;
    timer = setInterval(function(){
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
    
    clearInterval(timer)
    $("#score .timeUsed").text(time)
    $("#moves .moveNum").text(moves)
    $("#post1 .disks").empty()

    
}

function checkWin() {

    
    console.log(post3)
    if(post3[0] === winArray[0] && post3[1] === winArray[1] && post3[2] ===  winArray[2]){
        alert("You Win!")
        resetBoard()
    }
}

function post1Click(){


    if (queue.length == 0){
        
        queue.push(post1.pop())
        $("#post1 .disks").find('div').first().remove()
        
        
    } else {

        var postSize = post1.length

        if (queue[0] > post1[postSize-1]){
            alert("That is not a valid move. Please try again")

        } else{
            
            if(queue[0] === 1){
                $('<div/>', {class : 'disk3'}).prependTo($("#post1 .disks"))
            } else if(queue[0] === 2){
                $('<div/>', {class : 'disk2'}).prependTo($("#post1 .disks"))
            } else if (queue[0] === 3){
                $('<div/>', {class : 'disk1'}).prependTo($("#post1 .disks"))
            }
            
            post1.push(queue.pop())

            
            console.log("Post 1 click 2")
        }
        console.log(post1)
        console.log(queue)
        checkWin()
    }

    
}

function post2Click(){

    if (queue.length == 0){
        
        queue.push(post2.pop())
        $("#post2 .disks").find('div').first().remove()
        
    } else {

        var postSize = post2.length

        if (queue[0] > post2[postSize-1]){
            alert("That is not a valid move. Please try again")

        } else{
            if(queue[0] === 1){
                $('<div/>', {class : 'disk3'}).prependTo($("#post2 .disks"))
            } else if(queue[0] === 2){
                $('<div/>', {class : 'disk2'}).prependTo($("#post2 .disks"))
            } else if (queue[0] === 3){
                $('<div/>', {class : 'disk1'}).prependTo($("#post2 .disks"))
            }

            post2.push(queue.pop())
        }
        checkWin()
    }
}

function post3Click(){
    if (queue.length == 0){
        
        queue.push(post3.pop())
        $("#post3 .disks").find('div').first().remove()
        console.log("Post 3 click 0")
        
    } else {

        var postSize = post3.length

        if (queue[0] > post3[postSize-1]){
            alert("That is not a valid move. Please try again")

        } else{
            if(queue[0] === 1){
                $('<div/>', {class : 'disk3'}).prependTo($("#post3 .disks"))
            } else if(queue[0] === 2){
                $('<div/>', {class : 'disk2'}).prependTo($("#post3 .disks"))
            } else if (queue[0] === 3){
                $('<div/>', {class : 'disk1'}).prependTo($("#post3 .disks"))
            }
            post3.push(queue.pop())
            console.log("Post 3 click 3")
            checkWin()
        }
        
        
    }
}

function startGame() {
    startTimer()
    intBoard()

    
   
        $("#post1 .disks").click(post1Click)
        $("#post2 .disks").click(post2Click)
        $("#post3 .disks").click(post3Click)
    
}


$("#start").click(startGame)
$("#restart").click(resetBoard)

