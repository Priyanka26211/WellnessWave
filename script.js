document.addEventListener("DOMContentLoaded", function () {
    // Initialize the mental health tracker functionalities
    console.log("WellnessWave is ready to help you track your mental health!");

    // Example: Mood logging functionality
    const moodForm = document.getElementById('mood-form');
    moodForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const mood = document.getElementById('mood').value;
        const energy = document.getElementById('energy').value;
        const notes = document.getElementById('notes').value;

        // Log the mood, energy, and notes to the console (for now)
        console.log(`Mood: ${mood}, Energy: ${energy}, Notes: ${notes}`);

        // Clear the form
        moodForm.reset();
    });
});

// Function to add mood logging form dynamically
function createMoodForm() {
    const formContainer = document.getElementById('form-container');
    const form = `
        <form id="mood-form">
            <label for="mood">Mood:</label>
            <select id="mood">
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="anxious">Anxious</option>
                <option value="calm">Calm</option>
            </select>
            <label for="energy">Energy Level:</label>
            <input type="range" id="energy" min="1" max="10">
            <label for="notes">Notes:</label>
            <textarea id="notes"></textarea>
            <button type="submit">Log Mood</button>
        </form>
    `;
    formContainer.innerHTML = form;
}

// Create the mood logging form on page load
document.addEventListener("DOMContentLoaded", createMoodForm);
