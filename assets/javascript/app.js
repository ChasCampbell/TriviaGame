// window.onload = function() {
$(document).ready(function() {

    var timerId;
    var right = 0;
    var wrong = 0;
    var unanswered = 0;
    var timeLeft = 4;
    var groupNo = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10"];
    var corrAns = [3, 2, 2, 2, 4, 2, 4, 4, 4, 1];
    var loadDiv = $("#insert");
    var target = $("<h2>");

    $(loadDiv).append(target);
    $("h2").text("60");

    //On start - bring on the run screen.
    // Later, at end bring on the results screen.
    // Watch for the start button.
    $(".starter").click(function() {
        // These did not work - neither did getElementById
        //    $(".start").attr("display", "none");
        //    $(".run").attr("display", "block");
        //   $.start.prop("display", "none"); nope
        //    $.start.prop(display);   prop not recognied
        //      $.start.attr(display);  attr "  "


        run();

    }) // end of button click watcher
    // Tried these - no success.
    //    $(".starter").on("click", function() {
    //   $(".run").html(attr(display: block));}

    // Set an interval and run the decrement function once per second.
    function run() {
        timerId = setInterval(decrement, 1000);

        //  The decrement function.
        function decrement() {
            //  Decrease timeLeft by one.
            timeLeft--;

            //  Show the number in the #timeLeft tag.
            $("h2").html(timeLeft);

            //  Once number hits zero...
            if (timeLeft === 0) {
                //  ...run the stop function.
                stop();
            }
            //  Alert the user that time is up.

            //    $("div id = 'run'").attr("display", "none");
            //    $("div id = 'end'").attr("display", "block");
        } //end of decrement function

        //  The stop function
        function stop() {
            //  Clears the interval timer.
            clearInterval(timerId);
            alert("Time's Up!");
            checkAnswers()
        } // end of stop function
    } //end of run function
    // Check the inputs for each answer for right, wrong, unanswered.
    // First, if no answer;
    // Update that count.
    // Else if it was the right answer, update that count.
    // Else update the wrong count.
    // First, get the input from each group:

    // Tried to use an object in an object to make this simple - 
    // JS did not like 
    // $('input[name=answers[i].groups.correctAnswer:checked')
    // Then tried to use an array so I could use a for loop.
    // Finally did it the long way to have something to turn in.

    function checkAnswers() {
        var val;
        var groupVal = $('input[name=a1]:checked').val();

        if (typeof groupVal === "undefined") {
            unanswered = unanswered + 1;
        } //end of if portion   
        else if (val != "3") {
            wrong = wrong++;
        } //end of first else
        else {
            right = right++;
        } //end of else

        var val;
        var groupVal = $('input[name=a2]:checked').val();
        if (typeof groupVal === "undefined") {
            unanswered = unanswered++;
        } //end of if portion   
        else if (val != 2) {
            wrong = wrong++;
        } //end of first else
        else {
            right = right++;
        } //end of else

        groupVal = $('input[name=a3]:checked').val();
        if (typeof groupVal === "undefined") {
            unanswered = unanswered++;
        }
        else if (val != 2) {
            wrong = wrong++;
        }
        else {
            right = right++;
        }

        groupVal = $('input[name=a4]:checked').val();
        if (typeof groupVal === "undefined") {
            unanswered = unanswered++;
        }
        else if (val != 2) {
            wrong = wrong++;
        }
        else {
            right = right++;
        }

        groupVal = $('input[name=a5]:checked').val();
        if (typeof groupVal === "undefined") {
            unanswered = unanswered++;
        }
        else if (val != 4) {
            wrong = wrong++;
        }
        else {
            right = right++;
        }

        groupVal = $('input[name=a6]:checked').val();
        if (typeof groupVal === "undefined") {
            unanswered = unanswered++;
        }
        else if (val != 3) {
            wrong = wrong++;
        }
        else {
            right = right++;
        }

        groupVal = $('input[name=a7]:checked').val();
        if (typeof groupVal === "undefined") {
            unanswered = unanswered++;
        }
        else if (val != 4) {
            wrong = wrong++;
        }
        else {
            right = right++;
        }

        groupVal = $('input[name=a8]:checked').val();
        if (typeof groupVal === "undefined") {
            unanswered = unanswered++;
        }
        else if (val != 4) {
            wrong = wrong++;
        }
        else {
            right = right++;
        }

        groupVal = $('input[name=a9]:checked').val();
        if (typeof groupVal === "undefined") {
            unanswered = unanswered++;
        }
        else if (val != 4) {
            wrong = wrong++;
        }
        else {
            right = right++;
        }

        groupVal = $('input[name=10]:checked').val();
        if (typeof groupVal === "undefined") {
            unanswered = unanswered++;
        }
        else if (val != 4) {
            wrong = wrong++;
        }
        else {
            right = right++;
        }
        // Put the totals into the display.
        $("#rightCount").text(right);
        $("#wrongCount").text(wrong);
        $("#unansweredCount").text(unanswered);
        console.log(right)
        console.log(wrong)
        console.log(unanswered)


    } //end of checkAnswers function



}) //end of document ready



// }) // end of window onload



//} //end of else
//} //end of checkAnswers function

/*

for (i = 0; i < answerCheck.length; i++) {
    function checkAnswers(qNumber, btnGrp, corrAns) {

        var val = $('input[name=btnGrp]:checked').val();
        alert(val);
        if (val != 1 || 2 || 3 || 4) {
            unanswered = unanswered++;
        } //end of if function
        else if (val != answerCheck(qNumber[i], qObj[name], qObj[corrAns])) {
            wrong = wrong++;
        } //end of else
        else {
            right - right++;
            var qNumber = qNumber++;
        } //end of else
    } //end of checkAnswers function
} // end of for
    
    function checkAnswers() {

    var val = $('input[name=a1]:checked').val();
    alert(val);
    if (val != "" && val != "checked" && val != "checked" && val != "checked") {
        unanswered = unanswered++;
    } //end of if portion
    else if (val != answers.q1.corrAns) {
        wrong = wrong++;
    } //end of first else
    else {
        right = right++;
        var qNumber = qNumber++;
    var groupVal = $('input["groupNo[i]"]:checked').val();    
         var answerCheck = {
    q1: qObj = {
        btnGrp: "a1",
        corrAns: 3
    },
    q2: qObj = {
        btnGrp: "a2",
        corrAns: 2
    },
    q3: qObj = {
        btnGrp: "a3",
        corrAns: 2
    },
    q4: qObj = {
        btnGrp: "a4",
        corrAns: 2
    },
    q5: qObj = {
        btnGrp: "a5",
        corrAns: 4
    },
    q6: qObj = {
        btnGrp: "a6",
        corrAns: 2
    },
    q7: qObj = {
        btnGrp: "a7",
        corrAns: 4
    },
    q8: qObj = {
        btnGrp: "a8",
        corrAns: 4
    },
    q9: qObj = {
        btnGrp: "a9",
        corrAns: 4
    },
    q10: qObj = {
        btnGrp: "a10",
        corrAns: 1
    }
};
*/
