 function submitVote() {
        var email = document.getElementById("email").value;
        var vote = document.getElementById("vote").value;

        // Check if the email has voted
        if (localStorage.getItem(email)) {
          alert("This email has already voted.");
        } else {
          // Store the vote
          localStorage.setItem(email, vote);
          alert("Your vote has been submitted successfully.");
          updateResults();
        }
      }

      function updateResults() {
        var counts = { Option1: 110, Option2: 80, Option3: 50 ,Option4: 40, Option5: 20};

        // Count the votes
        for (var i = 0; i < localStorage.length; i++) {
          var key = localStorage.key(i);
          var vote = localStorage.getItem(key);
          if (counts[vote] !== undefined) {
            counts[vote]++;
          }
        }

        // Update the display
        document.getElementById("option1Count").innerText = counts["Option1"];
        document.getElementById("option2Count").innerText = counts["Option2"];
        document.getElementById("option3Count").innerText = counts["Option3"];
		document.getElementById("option4Count").innerText = counts["Option4"];
        document.getElementById("option5Count").innerText = counts["Option5"];
      }

      // Update the results when the page loads
      updateResults();