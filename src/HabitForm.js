import React, { useState } from "react";

function HabitForm({ addHabit }) {
  const [habit, setHabit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habit.trim() !== "") {
      addHabit(habit);
      setHabit("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a habit..."
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default HabitForm;
