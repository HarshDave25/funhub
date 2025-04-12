import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const questions = [
  {
    q: "What’s the capital of France?",
    options: ["Paris", "Rome", "Madrid", "Berlin"],
    answer: "Paris"
  },
  {
    q: "Who painted the Mona Lisa?",
    options: ["Da Vinci", "Picasso", "Van Gogh", "Michelangelo"],
    answer: "Da Vinci"
  },
  {
    q: "How many legs does a spider have?",
    options: ["6", "8", "10", "12"],
    answer: "8"
  }
];

export default function TriviaPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (opt) => {
    setSelected(opt);
    if (opt === questions[current].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  return (
    <div>
      <Navbar />
      <div className="p-8 max-w-xl mx-auto">
        {!showResult ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">{questions[current].q}</h2>
            <div className="grid grid-cols-1 gap-4">
              {questions[current].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className={`p-4 rounded-xl ${selected === opt ? "bg-green-500" : "bg-gray-700 hover:bg-gray-600"}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">🎉 You scored {score}/{questions.length}!</h2>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
