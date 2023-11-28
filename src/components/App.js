import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import React, { useState, useEffect } from "react";
import "whatwg-fetch";

const App = () => {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    const response = await fetch("/api/questions");
    const data = await response.json();
    setQuestions(data);
  };

  useEffect(() => {
    fetchQuestions();
  }, []); // Fetch questions on component mount

  const handleCreateQuestion = async (question) => {
   
    await fetch("/api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    });

    fetchQuestions(); 
  };

  const handleDeleteQuestion = async (questionId) => {
    // Assuming there's an API endpoint to delete a question
    await fetch(`/api/questions/${questionId}`, {
      method: "DELETE",
    });

    fetchQuestions(); 
  };

  const handleUpdateCorrectAnswer = async (questionId, newCorrectAnswer) => {
   
    await fetch(`/api/questions/${questionId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctAnswer: newCorrectAnswer }),
    });

    fetchQuestions(); 
  };

  return (
    <div>
      {/* Your component rendering logic here */}
    </div>
  );
};

export default App;

