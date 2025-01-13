import React, { useState } from "react";
import "./style.css";

export default function Quiz() {
  const questions = [
    {
      question: "Do I play Dungeons and Dragons?",
      options: [
        "Yes",
        "No",
        "What is Dungeons and Dragons"
      ],
      correctAnswer: "Yes"
    },
    {
      question: "Would I love to help create mobile games?",
      options: ["No", "Yes"],
      correctAnswer: "Yes"
    },
    {
      question: "When ending a round of gaming, what is common, friendly comment?",
      options: ["Git Gud", "Rush B", "GG", "No scope!"],
      correctAnswer: "GG"
    },
    {
      question: "The hero of Half-Life was . . .",
      options: ["Gordon Ramsey", "Gordon Lightfoot", "Gordon Freeman", "Morgan Freeman"],
      correctAnswer: "Gordon Freeman"
    },  
    {
      question: "Magic-Users deserve at least a D6 for hit die",
      options: ["Yes, intelligence doesn't make you weak", "No, nuts to those casters!", "What is a magic-user?"],
      correctAnswer: "Yes, intelligence doesn't make you weak"
    },
    {
      question: "Do you want to contact me about a great job opportunity?",
      options: ["Yes", "Yes", "Yes", "Yes"],
      correctAnswer: "Yes"
    }

  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <section className="quiz-section">
      <h2>Test Your Knowledge!</h2>
      {showScore ? (
        <div className="score-section">
          <p>
            You scored {score} out of {questions.length}
          </p>
          <button onClick={resetQuiz}>Now, make me that offer!</button>
        </div>
      ) : (
        <div className="question-section">
          <p>{questions[currentQuestion].question}</p>
          <div className="options-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
