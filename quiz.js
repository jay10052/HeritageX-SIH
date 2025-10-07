const questions = [
    {q:"Where is the Taj Mahal located?", a:"Agra"},
    {q:"Bhangra is a dance form of which state?", a:"Punjab"},
    {q:"Which festival is known as the festival of lights?", a:"Diwali"},
    {q:"Kathakali dance originated from which state?", a:"Kerala"},
    {q:"Ajanta caves are famous for?", a:"Paintings"},
    {q:"Amer Fort is located in which city?", a:"Jaipur"},
    {q:"Ladakh is famous for which type of landscape?", a:"Mountains"},
    {q:"Katra is the base for which famous temple?", a:"Vaishno Devi"},
    {q:"Which lake in Kashmir is famous for houseboats?", a:"Dal Lake"},
    {q:"Which fruit is Kashmir most famous for?", a:"Apple"}
];

// Image paths are updated to include the 'image/' subdirectory for better file organization
const bgImages = [
    "url('image/taj2.jpeg')",
    "url('image/bhangra2.jpeg')",
    "url('image/diwali.jpeg')",
    "url('image/kathakali.jpeg')",
    "url('image/ajanta.jpeg')",
    "url('image/amer3.jpeg')",
    "url('image/laddakh.jpeg')",
    "url('image/smvd.jpeg')",
    "url('image/dal.jpeg')",
    "url('image/apple.jpeg')"
];

// Function to display the current question and background image
function showQuestion(idx) {
    document.body.style.backgroundImage = bgImages[idx];
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    
    // Update quiz content
    quizDiv.innerHTML = `
        <p>
            <span class="quiz-q">${idx+1}. ${questions[idx].q}</span><br>
            <input type='text' id='userAns' autocomplete="off" />
        </p>
        <div id="progress">Question ${idx+1} of ${questions.length}</div>
    `;
    
    // Update button text for the last question
    submitBtn.textContent = idx === questions.length - 1 ? "Finish Quiz" : "Next";
    resultDiv.innerHTML = ""; // Clear previous results/messages
}

// Initialization
let current = 0;
let userAnswers = [];
let quizDiv = document.getElementById('quiz');
let submitBtn = document.getElementById('submitBtn');
let resultDiv = document.getElementById('result');

// Start the quiz
showQuestion(current);

// Submit button click handler
submitBtn.onclick = function() {
    let ans = document.getElementById('userAns').value.trim();
    userAnswers[current] = ans; // Store the user's answer
    current++; // Move to the next question
    
    if (current < questions.length) {
        showQuestion(current);
    } else {
        showScorecard(); // End of quiz
    }
};

// Function to display the final scorecard and results
function showScorecard() {
    let score = 0;
    let scorecard = `<h2>Scorecard</h2><table style="width:100%;border-collapse:collapse;">
        <tr>
            <th style="border-bottom:1px solid #FFD700;padding:8px;">Q.No.</th>
            <th style="border-bottom:1px solid #FFD700;padding:8px;">Question</th>
            <th style="border-bottom:1px solid #FFD700;padding:8px;">Your Answer</th>
            <th style="border-bottom:1px solid #FFD700;padding:8px;">Correct Answer</th>
            <th style="border-bottom:1px solid #FFD700;padding:8px;">Result</th>
        </tr>`;
        
    questions.forEach((item, i) => {
        // Case-insensitive comparison
        let correct = userAnswers[i] && userAnswers[i].toLowerCase() === item.a.toLowerCase();
        if (correct) score++;
        
        scorecard += `<tr>
            <td style="padding:8px;">${i+1}</td>
            <td style="padding:8px;">${item.q}</td>
            <td style="padding:8px;">${userAnswers[i] || ""}</td>
            <td style="padding:8px;">${item.a}</td>
            <td style="padding:8px;color:${correct ? '#00FF00' : '#DC143C'};">${correct ? "✔" : "✖"}</td>
        </tr>`;
    });
    
    scorecard += `</table>
        <div style="margin-top:18px;font-size:22px;">
            Your Score: <b>${score}/${questions.length}</b> <br>
            ${score >= 7 ? "🎉 <span style='color:#00FF00;'>You earned a cultural badge!</span>" : "<span style='color:#DC143C;'>Keep learning!</span>"}
        </div>`;
        
    quizDiv.innerHTML = scorecard; // Display scorecard
    submitBtn.style.display = "none"; // Hide the submit button
    resultDiv.innerHTML = ""; // Clear any lingering messages
}