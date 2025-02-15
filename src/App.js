import React, { useState } from "react";
import HabitForm from "./HabitForm";
import HabitList from "./HabitList";
import "./App.css";

function App() {
  const [habits, setHabits] = useState([]);

  // Add a new habit
  const addHabit = (name) => {
    setHabits([...habits, { id: Date.now(), name, completedDays: 0 }]);
  };

  // Mark a habit as done
  const markCompleted = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completedDays: habit.completedDays + 1 } : habit
      )
    );
  };

  // Delete a habit
  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <div className="app">
      <h1>Habit Tracker</h1>
      <HabitForm addHabit={addHabit} />
      <HabitList habits={habits} markCompleted={markCompleted} deleteHabit={deleteHabit} />
    </div>
  );
}

export default App;
