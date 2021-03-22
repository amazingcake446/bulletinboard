import React from 'react'
import ReactPost from './ReactPost'
import './BulletinBoard.css';
const BulletinBoard = () => {

    const faq = [
        {
            question: 'Vad är tre fördelar med att använda React?',
            answer: 'Snabbare rendering, SEO-vänligt, Garanterad stabil kod'
        },
        {
            question: 'Vad är tre nackdelar med att använda React?',
            answer: 'Svagt med dokumentation, förvirande jsx syntax, komplicerad seo optimering'
        },
        {
            question: 'Vad är tre skillnader mellan React och Angular?',
            answer: 'filstruktur, generate compenents, typescript'
        },
        {
            question: 'Vad är tre bibliotek man kan använda med React?',
            answer: 'redux, material ui, enzyme'
        }
]
    return (
        <div className="container">
            {faq.map((question, i ) => {
                return <ReactPost key={i} question={question.question} answer={question.answer}/> 
            })}
            
           
        </div>
    )
}

export default BulletinBoard
