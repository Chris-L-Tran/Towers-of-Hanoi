# Towers-of-Hanoi
Personal Project as a part of GA curriculum

# Description
Of all the projects to pick. I decided on choosing the one that would test my skills as a developer. I believe that Towers of Hanoi is a project that requires adequate skill in both JS and CSS to display it properly. Going into this project. I am not confident in my skills. I'm sure after it is complete; I will be. 

# Premise
Towers of Hanoi is a very simple puzzle game to test logic. Often used in IQ tests, the game involves three rods with at least three disks of varying size all stacked on one rod. The goal of the game is to move all of the disk onto another rod, with the simple constrait of not being able to put a larger disk on top of a smaller disk. How well a user does is scored based on the number of moves that user makes. Only one disk can be moved at a time and only the disk on top of a stack can be moved. The algorithm of the game's solution follows a 2^n - 1 rule. The game comes from a Hindu legend where a Brahmin temple in Kashi Vishwanath that contains a large room with three posts in it. The temple posts are surrounded with 64 golden disks. Legend states that when the puzzle is completed the world will end. According to the 2^n - 1 algorithm. Even if the priest of the temple could move the disks at a rate of one per second. 2^64 -1 would equate to roughly 585 billion years. Which would probably mean that the world has indeed ended when the puzzle is completed. If 3 disks are used, then by 2^3 -1, the puzzle can be completed in 7 steps. 

# Tech
Build with 
* Visual Studio Code

# Pseudocode
* Create board
* Add disk to post 1
* Have listeners on all three posts
* If post is empty. Do nothing.
* If post is not empty. Take the top disk and put it in the queue section (Not on any post)
* Second listener on posts, to check where the disk will go.
* Able to return disk back to same post.
* if user clicks on other two posts. Check to see if posts are empty.
* Check to compare sizes of disk in queue and disk on the top of the stack of the post.
* If valid move, move disk. 
* Check to see if tower is complete if not continue. 
* If tower is complete prompt victory screen

* Have reset button to reset board
* Have tracker to track number of moves, also timer to test time used.

# Coding Steps
Design board
Design Posts
Design Disks
Add buttons 
Add score tracker
Add listeners to each element
Create function to remove disk
create function to place disk
create function to check if valid move
create function to check if tower is complete
create function to prompt victory screen
