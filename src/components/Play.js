import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Play() {

    const questions = [
        {
            questionText: 'Which planet has the most moons?',
            answerOptions: [
                { answerText: 'Earth', isCorrect: false },
                { answerText: 'Venus', isCorrect: false },
                { answerText: 'Saturn', isCorrect: true },
                { answerText: 'Jupiter', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is the Founder of Microsoft?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Bill Gates', isCorrect: true },
                { answerText: 'Elon Musk', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'In what country is the Chernobyl nuclear plant located?',
            answerOptions: [
                { answerText: 'Ukraine', isCorrect: true },
                { answerText: 'India', isCorrect: false },
                { answerText: 'US', isCorrect: false },
                { answerText: 'UK', isCorrect: false },
            ],
        },
        {
            questionText: 'What country has the highest life expectancy?',
            answerOptions: [
                { answerText: 'Malaysia', isCorrect: false },
                { answerText: 'Ukraine', isCorrect: false },
                { answerText: 'Russia', isCorrect: false },
                { answerText: 'Hong Kong', isCorrect: true },
            ],
        },
        {
            questionText: 'When did India win its first World Cup?',
            answerOptions: [
                { answerText: '1980', isCorrect: false },
                { answerText: '2011', isCorrect: false },
                { answerText: '1947', isCorrect: false },
                { answerText: '1983', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <Fragment>
            <Helmet><title>Quiz App - Play</title></Helmet>
            <div className='play'>
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                        <Link to = "/">Play Again</Link>
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </Fragment>

    );
}