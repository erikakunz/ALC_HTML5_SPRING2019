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
            

// Start Game
Game();
}
function Game() {
     
    alert("Shipwrecked");
    
    var playerName = prompt("What is your name?");
    
    alert("Welcome to  the Isle of Life,"+ playerName);
    
    Beach();
    
    function Beach(){
        var beach = prompt("You awake to the sound of waves meeting the shoreline near by. You stand up, wobbly and unsteady at first, gaining strength as you move. Off in the distance you see a raft upturned, buried in the sand. You're memory starts to trickle back. You were on vacation, taking some time away from work. The cruise ship you were on was heading to the Bahamas, a warm, sunny, island vacation. The ship crossed into the Bermuda Triangle, being told it was only a myth that ships sunk under its command, you were worry free. Until it happened. You awoke to shouts of the crew trying to resolve the problem. Then you felt it. The ship was rocking violently to each side, throwing vacationers around. The ship felt as if it were spinning in a black abyss. You ran to the life rafts, jumping in one and making your way to the sea. As the raft was heading towards the water, you strapped yourself in, holding on for dear life. As the raft hit the water, you knocked your head on the bench, only to find yourself waking up on the beach. \n -look around \n - go back to sleep").toLowerCase();
        
        if(beach == "look around" || beach == "look"){
            
            var beachLook = prompt("You're back is the the west as you look east. You see a wall of trees lining an island forest, with a small opening you can see light shine through. To the north, you see the raft lying on the beach, which ends just after the raft. To the South, you see the beach continue until it meets large, sharp boulders as the waves crash violently against them. To the west is the ocean in which planted you here. \n -go to opening");
        }
        else if (beach == "go back to sleep" || beach == "sleep"){
            alert("You fall back asleep on the beach with nightmares about the shipwreck");
            var resume = confirm("Do you wish to continue the adventure?");
            
            if(resume){
                    Beach();
            }
            else{
                    alert("Game Over!");
            }
        }
        else{
                alert("I don't know what "+beach+" is!");
                Beach();
        if(beach == "go to opening" || beach == "go east"){
            
            var beachGotoopening = prompt("You walk through the opening in the trees, being greeted with an abandoned hut. To the east of the house, you see a mat at the door, with the word WELCOME written on it, begging you to come in. \n -walk to the door.")
            
            else if (beach == "walk to the door" || beach == "go inside"){
                alert("You walk to the door. As you step on the door mat, you fall, screaming as you descend. You fall for what seems like an eternity, hitting the dirt floor with a thud. Bruised and sore, you stand up")
            }
        }
        
        else if(beach == "hut"){
                Hut();
        }
        
        else{
                alert("I don't know what "+beach+" is.");
                Beach();
            }
        }
    }
    function Hut(){
            var hutEnv = prompt("You look around and realize that you are in the basement of the hut. It looks as though you are in a trap to catch intruders or unannounced visitors. As you take in your surroundings, you notice the first step of a staircase in to the west of the basement. \n -go upstairs");
        
            if(hutEnv == "go upstairs" || hutEnv == "go up"){
                var upstairsHut = prompt("You get to the stairs and start your ascent. When you reach the top of the stairs you see a dinner table littered with the remains of their last meal, which are moldy and green. You walk around the room, taking in your surroundings. To the east, you see another set of stairs leading upwards to what seems like an attic. On the North wall you see the door, boarded up with slats of wood. On the East wall, there is a sword, hanging from a mount on the wall. Upon taking a closer look at the table, which sits on the West wall, you notice a small knob, poking out of the side. - twist the knob - go upstairs - take sword" ).toLowerCase();}
                
            switch(upstairsHut){
                case "Upstairs" || "go upstairs":
                        var upstairs = prompt("You walk up the stairs, being greeted by a dusty, cobwebb ridden attic. There is no furniture or belongings up here; Only the cobwebbs and a large window to the south of the attic. Upon looking around the room, you realize that the window will be your only way out of the hut. You check to see if the window will open. The latch flips up with a bit of force and the window swings open. You look out of the window and see that a rope ladder leads from the top of the windowsill to the ground below. /n - go out of the window");
                    
                        Hut(); 
                break;
                case "twist knob":
                            alert("You twist the knob, hearing clicks with every millimeter it is moved. A minute passes and nothing has happened. You try to pull boards off of the table, trying to find the purpose of the knob. You turn back to the knob and twist it again, realizing it still had more to turn. You finish turing the knob as far as it would turn. The table started moving and twisting, the boards moving and finding new homes, forming a stand, leaving the old table non-existant. You look at the stand to see a pink jewel necklace resting in an indentation of the table, the perfect size for the jewel. You take the jewel necklace, stringing it around your neck for safe keeping.");
                    
                break;
                case "take sword":
                        alert("You take the sword off of the wall, finding that it comes with a holster in which you can strap around your waist. You look at the handle of the sword and notice picture engravings of eagles surrounding the handle. You put the holster on and fit the sword into it.");
                break;
                default:
                        alert("I don't know what "+insideHut+" is!");
                        hut();
                break;
                    
            if(upstairsHut == "go out of the window" || upstairsHut == "go out"){
                var outsideHut = prompt("You climb down the ladder, weighed down by the sword resting in the holster on your right side. When you reach the ground, you look around and take in your surroundings. A loud thump draws you out of your foccus on your surroundings. You whip around with your sword drawn, only to see the rope ladder had fallen, landing in a pile on the ground behind you. \n -look")
            }
                    else{
                        alert("I don't know what"+outsideHut+"is!");
                        outsideHut();
                    }
            if(outsideHut == "look" || outsideHut == "look around"){
                var pathway = prompt("You look to the South, seeing only a tightly knit forrest with no way of getting through. To the North, behind you, you are greeted with the pile of rope ladder. To the East, you are again, greeted with thick forrestry. To the West, you see your only way out, a pathway, made of stones and lined with tropical flowers and plants. /n -continue following the path")
            }
            }
            }
    function pathway(){
            if(pathway == "continue following path" || pathway == "follow path"){
                var pathway = prompt("You follow the rock pathway, taking in your surroundings as you go. As you walk along the pathway, you begin to hear the sounds of waves coming and going and the churning of the ocean. You follow the pathway South, the ocean sounds amplifying as you continue. You then come across a rocky platform. \n - look")
            }
            
            if(pathway == "look" || pathway == "look around"){
                var rocks = prompt("As you look around the rocky platform, greeted with a rock wall just taller than you, blocking your view of the beyond. At the base of the rock wall, you find a fishing pole, abandoned by those before you. \n - take fishing pole")
                if(pathway == "take fishing pole" || pathway == "take pole")
                    alert("You take the fishing pole and add it too your inventory.")
                    
            }
            else {
                alert("I dont know what"+pathway+"is!")
                pathway();
            }
    }
    function Rocks(){
        var rocks = prompt("After taking the fishing pole, you decide to climb the rocks in order to get a better view of your surroundings. As you reach the top of the rocks, you see a rope coil resting on the ground. You pick it up and sling it around your shoulder. \n - look")
        
            if(rocks == "look" || rocks == "look around"){
                var rocksEnv = prompt("To the South and West, you see the ocean. Waves crash at the base of the rocks with immense amounts of power and strength. To the east you see a pathway, lined with the forrest. And to the North is the pathway from which you came from. You look out on the waves with awe. You become entranced in its beauty and study the water's movements. Then you see a golden light, eminating from the middle of the waves \n - follow the light \n - follow the pathway")
                
                if(rocksEnv == "follow the light"){
                    alert("You follow the yellow light shining from the sea. At the edge of the rock's platform where earth meets the sea, a large wave comes barreling towards you. With no time to run, the wave grows closer, the yellow light growing in size with it. The wave greets you with open arms and takes you to the ocean where you are engulfed in the wicked waves of the sea.")
                    alert("Game Over.");
                }
                else if(rocksEnv == "follow the pathway" || rocksEnv == "follow path"){
                    var rocksEnv = prompt("You follow the tree lined path East, the trees and shrubbery thickening as you go. After a while of walking, you come across a cave, eanding the pathway. The opening of the cave is shaped and detailed in the shape of a large skull. You cannot enter the cave for the mouth is the entrance, but it is much too high for you to climb. You notice a golden handle at the base of jaw, and an idea hits you. \n - hook the handle with the fishing pole")
                }
                if(rocksEnv == "hook the handle with the fishing pole"){
                    alert("You throw the line out towards the handle on the jaw. You miss the first and second time, but third time's a charm! Upon hooking the line on the handle, you pull the line tight and reel with all of your strength. As you reel, the jaw of the skull begins to lower, opening the mouth. The skull creaks with the sudden movement after what looks like, ages of inactivity. Finally, the jaw bone reaches the ground and welcomes you in.");
                }
            }
                else{
                        alert("I don't understand what"+rocksEnv+"is!")
                }
            
            
    }
   function Skullcave(){
        var skullcaveEnv = prompt("You enter the mouth of the cave and look around. The cave path leads you towards to North where you are met with three different options. Three different doors appear; one with a blue gem painted on the door on the very west of the cave. The door in the middle is gold with a peep hole in which you can see into. You see a yellow light emminating through the peep hole that looks identical to the one from the ocean. Lastly, as you look to the door on the far east, you see that there are many padlocks on it, keeping you from entering. \n - go through the blue gem door \n - go through the gold door")
        
            if(skullcaveEnv == "go through the blue gem door" || skullcaveEnv == "go through the west door"){
                var skullcaveEnv = prompt("You twist the knob on the door with the blue gem painted on it. As you push the door open, it creaks with the sudden movement. You walk into the room, which is immediately lit up with torches lining the walls at the sense of your movement. As you look around the room, taking in your surroundings, you find an old, wooden table in the center of the room. Upon taking a closer look at the contents on the table, you find a gauntlet filled to the rim with pink shimmering liquid, an empty vile, and a blue jewel necklace, identical to the pink necklace you found in the beginning. You pour the pink liquid into the vile and stuff it in your pocket for safe keepimg. \n - take the blue necklace")
                
                if(skullcaveEnv == "take the blue necklace" || skullcaveEnv == "take the necklace"){
                    alert("You take the blue gem necklace and rest it around your neck next to the pink necklace. You then tuck them under your shirt so keep them out of the way and protected from scuffs and marks");
                }
                else if(skullcaveEnv == "go through the gold door" || skullcaveEnv == "go through the middle door")
            }
   } 
    
}
    
    
    