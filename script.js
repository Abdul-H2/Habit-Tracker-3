const habitInput = document.getElementById('habit-input');
const addHabitBtn = document.getElementById('add-habit-btn');
const habitList = document.getElementById('habit-list');

// Add a new habit
addHabitBtn.addEventListener('click', () => {
    const habitText = habitInput.value.trim();
    if (habitText !== "") {
        addHabit(habitText);
        habitInput.value = "";
    }
});

// Function to add habit
function addHabit(text) {
    const li = document.createElement('li');
    li.innerHTML = `
        ${text}
        <div>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
    
    // Complete button functionality
    li.querySelector('.complete-btn').addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Delete button functionality
    li.querySelector('.delete-btn').addEventListener('click', () => {
        habitList.removeChild(li);
    });

    habitList.appendChild(li);
}
