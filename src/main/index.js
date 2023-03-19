import React from 'react'
import QuestionBox from './QuestionBox'
import ResultPage from './ResultPage'
import "./main.css"

function index() {
  return (
    <main>
      <h1>Country Quiz</h1>
      <QuestionBox />
      {/* <ResultPage /> */}
    </main>
  )
}

export default index