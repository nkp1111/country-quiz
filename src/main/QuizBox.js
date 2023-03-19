import React from 'react'
import AdventureImage from '../assets/undraw_adventure_4hum 1.svg'
import ButtonHolder from '../components/buttonHolder'
import ImageHolder from '../components/imageHolder'
import useGlobalContext from '../context'
import OptionBox from './OptionBox'
import QuestionBox from './QuestionBox'

function QuizBox() {

  const { quizData } = useGlobalContext()

  return (
    <section className='question-box-section'>
      {/* question  */}
      <QuestionBox type={quizData.type}
        questionItem={quizData.questionItem} />
      {/* options  */}
      <OptionBox />
      {/* button holder next button  */}
      <ButtonHolder btnText="Next" />
      {/* image holder  */}
      <ImageHolder image={AdventureImage}
        altText="game on" />
    </section>
  )
}

export default QuizBox