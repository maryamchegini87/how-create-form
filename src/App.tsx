import { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
const questions = [
  { id: 1, question: "What is your name?", type: "text" },
  {
    id: 2,
    question: "What is your gender?",
    type: "radio",
    options: [
      { key: "FEMALE", text: "Female" },
      { key: "MALE", text: "Male" },
      { key: "OTHER", text: "Other" },
    ],
  },
  { id: 3, question: "What is your the date of your birth?", type: "date" },
  {
    id: 4,
    question: "What insurances do you have?",
    type: "checkbox",
    options: [
      { key: "HEALTH", text: "Health" },
      { key: "LIABILITY", text: "Liability" },
      { key: "LEGAL", text: "Legal" },
      { key: "CAR", text: "Car" },
    ],
  },
  {
    id: 5,
    question: "What is your employment status?",
    type: "select",
    options: [
      { key: "EMPLOYEE", text: "Employee" },
      { key: "BUSINESS_OWNER", text: "Business Owner" },
      { key: "HOUSE_SPOUSE", text: "Housewife / Househusband" },
      { key: "RETIREE", text: "Retiree" },
      { key: "STUDENT", text: "Student" },
      { key: "SELF_EMPLOYED", text: "Self-Employed" },
      { key: "UNEMPLOYED", text: "Unemployed" },
    ],
  },
  { id: 6, question: "What is your phone number?", type: "text" },
];
function App() {
  const [openId, setOpenId] = useState(null);
  const [userAnswers,setUserAnswers]=useState({})

  function handleToggle(id) {
    setOpenId((prevId) => (prevId === id ? null : id));
  }

  function handeleAnswerChange(questionId,answer){
    setUserAnswers((prev)=>({
      ...prev,
      [questionId]:answer
    }))
  }

  function handeleSubmit(e){
    e.preventDefault();
    console.log(userAnswers)
  }


  return (
    <>
      <form onClick={handeleSubmit}>
        {questions.map((question) => (
          <div key={question.id}>
            <hr />
            <Accordion
              showContent={openId===question.id}
              question={question}
              onToggle={()=>handleToggle(question.id)}
              value={userAnswers[question.id]}
              onChange={(answer)=>handeleAnswerChange(question.id,answer)}
            />
          </div>
        ))}
        <hr />
      </form>
    </>
  );
}

export default App;
