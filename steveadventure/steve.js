$(function(){
    
   question1();
    
});

var question1 = function(){
    
    //UPDATING GRAPHICS
    $("div.narrative, span.q1").html("Welcome to the world! If you want to survive longer, you'll need a weapon to defend yourself! Which one will it be?");
    $(".q1").show();
    $(".buttons").html("<button class='btn btn-success q1-sword'>Iron Sword</button>");
    $(".buttons").append("<button class='btn btn-danger q1-axe'>Iron Axe</button>");
    
    //MAKE IT WORK
    $(".q1-sword").click(function(){
        
       //Update Sidebar
       $(".q1-choice").html("<img src='ironsword.png'>").show();
       //Run Question 2
       question2();
    });
    $(".q1-axe").click(function(){
    
        //Update Sidebar
       $(".q1-choice").html("<img src='ironaxe.png'>").show();
       //Run Question 5
       question5();
    });
    
};

var question2 = function(){
    //UPDATING GRAPHICS
    $("div.narrative, span.q2").html("The Iron Sword, a great choice of weapon! Now which way will you go? Will you explore the cave to find some hidden treasure? Or will you explore the village to see what they have for sale?");
    $(".q2").show();
    $(".buttons").html("<button class='btn btn-success q2-cave'>Explore the cave!</button>");
    $(".buttons").append("<button class='btn btn-danger q2-village'>Explore the village!</button>");
    
    //MAKE IT WORK
    $(".q2-cave").click(function(){
        
       //Update Sidebar
       $(".q2-choice").html("<img src='cave.jpg'>").show();
       //Run Question 3
       question3();
    });
    $(".q2-village").click(function(){
    
        //Update Sidebar
       $(".q2-choice").html("<img src='village.jpg'>").show();
       //Run Death 1
       $(".narrative").html("You explore the village to find that it was a village full of witches! Before you had a chance to run, the witches bombard you with potions, eventually ending the existence you once had. GAME OVER, Hit F5 to restart!");
       $(".buttons").hide();
       $(".imageC").show();
    });
};

var question3 = function(){
    //UPDATING GRAPHICS
    $("div.narrative, span.q3").html("You decide to explore the cave. Upon your arrival you come across a Creeper! Do you run away like a wuss? Or do you fight the Creeper head on?");
    $(".q3").show();
    $(".buttons").html("<button class='btn btn-success q3-run'>Run Away!</button>");
    $(".buttons").append("<button class='btn btn-danger q3-fight'>Fight!</button>");
    
    //MAKE IT WORK
    $(".q3-run").click(function(){
        
       //Update Sidebar
       $(".q3-choice").html("<img src='running.jpg'>").show();
       //Run Question 4
       question4();
    });
    $(".q3-fight").click(function(){
    
    //Update Sidebar
       $(".q3-choice").html("<img src='fighting.jpg'>").show();
    
    //Run Death 2
       $(".narrative").html("You fight the Creeper head on! Just then you remember, you don't have any combat experience at the slightest! You slide right into the Creeper and it explodes on contact, only leaving gunpowder and your inventory in it's place. GAME OVER, Hit F5 to restart!");
       $(".buttons").hide();
       $(".imageC").show();
       });
};

var question4 = function(){
    //UPDATING GRAPHICS
    $("div.narrative, span.q4").html("You decide to make like a drum and beat it! The Creeper watches as you run away, terrified. It doesn't decide to chase you and walks off. After you think you outran the Creeper, you come across a ravine! However, it seems that it isn't close enough to diamond level. Do you explore the ravine anyways? Or do you dig down for a chance at finding diamonds?");
    $(".q4").show();
    $(".buttons").html("<button class='btn btn-success q4-ravine'>Explore The Ravine!</button>");
    $(".buttons").append("<button class='btn btn-danger q4-dig'>Dig Down!</button>");
    
    //MAKE IT WORK
    $(".q4-ravine").click(function(){
        
       //Update Sidebar
       $(".q4-choice").html("<img src='ravine.jpg'>").show();

       //Run Ending 1
       $(".narrative").html("You explore the ravine ahead, hoping to find anything worthwhile. Fortunately for you, luck was on your side! You find many useful materials and hit the treasure motherload! You collect all of the treasure you find and leave the cave happy with your results. YOU WIN, THANKS FOR PLAYING! Restart the page and take the Iron Axe to find another ending!");
       $(".buttons").hide();
       $(".imageA").show();
    });
    
    $(".q4-dig").click(function(){
    
    //Update Sidebar
       $(".q4-choice").html("<img src='dig.jpg'>").show();
    
    //Run Death 3
       $(".narrative").html("You decide to dig down for more diamonds. You think that the resources are probably lackluster and not worth it and go for something bigger. Unfortunately, you never learned to never dig straight down! You dig out one more block, and fall straight into the lava pit below, wondering if you should've went into the ravine. GAME OVER, Hit F5 to restart!");
       $(".buttons").hide();
       $(".imageC").show();
       });
};

var question5 = function(){
    
    //UPDATING GRAPHICS
    $("div.narrative, span.q5").html("The Iron Axe, a great choice of weapon! Now you have two options. Will you explore the temple to find a hidden artifact lost for generations? Or will you explore the jungle to find cocoa beans for cookies?");
    $(".q5").show();
    $(".buttons").html("<button class='btn btn-success q5-temple'>Explore the temple!</button>");
    $(".buttons").append("<button class='btn btn-danger q5-jungle'>Explore the jungle!</button>");
    
    //MAKE IT WORK
    $(".q5-temple").click(function(){
        
       //Update Sidebar
       $(".q5-choice").html("<img src='temple.jpg'>").show();
       //Run Question 6
       question6();
    });
    $(".q5-jungle").click(function(){
    
        //Update Sidebar
       $(".q5-choice").html("<img src='jungle.jpg'>").show();
       //Run Death 4
       $(".narrative").html("You explore the jungle to find some cocoa beans because you are hungry for something, even though you don't know what for. While you were thinking about that snaack, you fall into a hole, but not just any hole...a hole filled with Spiders! You try to scream, but you can't because the Spiders jump on you as you slowly go numb from their poison venom. You fall into unconciousness, but you never recover. GAME OVER, Hit F5 to restart!");
       $(".buttons").hide();
       $(".imageC").show();
       });
};

var question6 = function(){
    //UPDATING GRAPHICS
    $("div.narrative, span.q6").html("You decide to explore the temple. As you enter the temple, you see that you can either go left or go right. Which way will you go?");
    $(".q6").show();
    $(".buttons").html("<button class='btn btn-success q6-left'>Go Left!</button>");
    $(".buttons").append("<button class='btn btn-danger q6-right'>Go Right!</button>");
    
    //MAKE IT WORK
    $(".q6-right").click(function(){
        
       //Update Sidebar
       $(".q6-choice").html("<img src='right.jpg'>").show();
       //Run Question 7
       question7();
    });
    $(".q6-left").click(function(){
    
    //Update Sidebar
       $(".q6-choice").html("<img src='left.jpg'>").show();
    
    //Run Death 5
       $(".narrative").html("You decide to go left and see a long hallway. You take a few steps and realize that your feet slowly sink every step you take. You look down and see that you were stepping on pressure plates! Before you had a chance to get off of them, you feel a sharp pain in your arm. You realize that it was an arrow tipped with some green substance. While you ponder it, you get hit with more arrows and eventually find out that it was poisoned arrows! Your body slowly goes numb and you fall down getting filled with more of the deadly arrows. GAME OVER, Hit F5 to restart!");
       $(".buttons").hide();
       $(".imageC").show();
       });
};

var question7 = function(){
    //UPDATING GRAPHICS
    $("div.narrative, span.q7").html("You decide to go to the right and see a long hallway that leads towards light. You go towards it to find a room that holds two chests. The chest on the left has a demonic eye in the center of it. The chest on the right looks completely normal, but is it too normal? Do you take the chest on the left or do you take the chest on the right?");
    $(".q7").show();
    $(".buttons").html("<button class='btn btn-success q7-left'>Open the left chest!</button>");
    $(".buttons").append("<button class='btn btn-danger q7-right'>Open the right chest!</button>");
    
    //MAKE IT WORK
    $(".q7-left").click(function(){
        
       //Update Sidebar
       $(".q7-choice").html("<img src='leftchest.jpg'>").show();

       //Run Ending 2
       $(".narrative").html("You decide to check the chest on the left, praying that it doesn't involve anything deadly. You open the chest and discover that it was filled to the brim with diamonds, emeralds, gold, and many other materials! You collect everything (even the chest) and walk out of the temple with your prize. YOU WIN, THANKS FOR PLAYING! Restart the page and take the Iron Sword to find another ending!");
       $(".buttons").hide();
       $(".imageB").show();
       
    });
    
    $(".q7-right").click(function(){
    
    //Update Sidebar
       $(".q7-choice").html("<img src='rightchest.jpg'>").show();
    
    //Run Death 6
       $(".narrative").html("You decide to check the chest on your right. As soon as you open it, you hear a hissing sound. You look around and see a red line going into a hidden hole you can't go into. You turn back to the chest and see that it was rigged with TNT! You try to make a run for it, but the TNT explodes before you can escape the room, leaving nothing but a crater at where the temple once standed. GAME OVER, Hit F5 to restart!");
       $(".buttons").hide();
       $(".imageC").show();
       });
};