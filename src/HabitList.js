import React from "react";

function HabitList({ habits, markCompleted, deleteHabit }) {
  return (
    <div>
      {habits.length === 0 ? <p>No habits added yet!</p> : null}
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            <span>{habit.name} - Completed: {habit.completedDays} days</span>
            <button onClick={() => markCompleted(habit.id)}>✔ Mark Done</button>
            <button onClick={() => deleteHabit(habit.id)}>🗑 Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HabitList;
