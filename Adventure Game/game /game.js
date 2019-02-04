<!DOCTYPE html>
<html lang="en"
    <head>
        <title>Adventure Game</title> 
    <head>
    <body>
        <h1>Adventure Game v1.0</h1>
        <p>Made by: Erika Kunz</p>
        <script>
            // javasript Object for an inventory
            var inventory = {
                coins: 0,
                sword: 0,
                map: 0,
                jewels: 0,
                fishingpole: 0,
                vile: 0,
                pinkliquid: 0,
                riddle: 0,
                compass: 0,
                outfits: 0, 
                foods: 0
            }


Game();

function Game() {
     
    alert("Shipwrecked");
    
    var playerName = prompt("What is your name?");
    
    alert("Welcome to  the Isle of Life"+ playerName);
    
    Beach();
    
    function Beach(){
        var beach = prompt("You awake to the sound of waves meeting the shoreline near by. You stand up, wobbly and unsteady at first, gaining strength as you move. Off in the distance you see a raft upturned, buried in the sand. You're memory starts to trickle back. You were on vacation, taking some time away from work. The cruise ship you were on was heading to the Bahamas, a warm, sunny, island vacation. The ship crossed into the Bermuda Triangle, being told it was only a myth that ships sunk under its command, you were worry free. Until it happened. You awoke to shouts of the crew trying to resolve the problem. Then you felt it. The ship was rocking violently to each side, throwing vacationers around. The ship felt as if it were spinning in a black abyss. You ran to the life rafts, jumping in one and making your way to the sea. As the raft was heading towards the water, you strapped yourself in, holding on for dear life. As the raft hit the water, you knocked your head on the bench, only to find yourself waking up on the beach")
    }
    
    