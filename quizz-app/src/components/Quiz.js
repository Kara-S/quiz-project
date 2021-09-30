import '../App.css'
import React, {useState} from "react";


const Quiz = () => {


    const questionsData = [

        {
            "question": "Which stage of the software development lifecycle (SDLC) would include the  following activities; Consideration of the potential risks involved in developing software, Determining whether the project outcome will be worth the costs involved.",
            "answers": [
                "Implementation / Deployment",
                "Requirements Analysis",
                "Testing",
                "Feasibility Study"

            ],
            "correct_answers": "Feasibility Study"
        },
        {
            "question": "Which of the following is a purpose of the software development lifecycle (SDLC)?",
            "answers": [
                "To provide a suitable framework for planning a software development project",
                "To provide a set of steps to create a software end-product",
                "To create a methodology for developing software code",
                "To provide a consistent set of coding standards"

            ],
            "correct_answers": "To provide a set of steps to create a software end-product"
        },

        {
            "question": "Which sequence puts the following stages in the SDLC in the CORRECT chronological order? a. testing, b. requirements analysis, c. maintenance, d. design",
            "answers": [
                "b, d, a, c",
                "b, d, c, a",
                "d, b, a, c",
                "d, b, c, a"

            ],
            "correct_answers": "b, d, a, c"
        }, {
            "question": "Which of the following is NOT an iterative methodology?",
            "answers": [
                "Waterfall",
                "UP / RUP",
                "Scrum",
                "Spiral"

            ],
            "correct_answers": "Waterfall"
        },

        {
            "question": "Which software development method allows software to be deployed for client use  after each iteration?",
            "answers": [
                "Agile",
                "Unified Process (UP)",
                "V-Model",
                "Waterfall"

            ],
            "correct_answers": "Agile"
        },

        {
            "question": "Which of the following is a role of a domain expert?",
            "answers": [
                "To provide insight into business products and processes",
                "To specify functional requirements on behalf of the customer",
                "To identify non-functional requirements",
                "To assess project risks and constraints"

            ],
            "correct_answers": "To provide insight into business products and processes"
        },

        {
            "question": "A software application used by the general public has been found to have a security  weakness. The problem has been diagnosed and a development project initiated to  correct the security weakness. The project team will include security domain  experts. At which stages in the development will it be the MOST important to involve the  domain experts?",
            "answers": [
                "Feasibility study, code development",
                "Design, testing",
                "Requirements analysis, maintenance",
                "Initiation, implementation / deployment"

            ],
            "correct_answers": "Design, testing"
        },

        {
            "question": "During the design stage of the SDLC, which of the following would be developed?",
            "answers": [
                "Software specification",
                "Software code",
                "Use cases",
                "Test plans"

            ],
            "correct_answers": "Software specification"
        },

        {
            "question": "Which of the following is a purpose of applying traceability and cross-referencing between software development deliverables?",
            "answers": [
                "To identify requirements which have not been met",
                "To determine which deliverables might be affected by a change request",
                "To assist in tracking project management issues",
                "To ensure that deliverables are delivered in priority sequence"

            ],
            "correct_answers": "To identify requirements which have not been met"
        },

        {
            "question": "Interaction diagrams are a deliverable of which stage of the SDLC?",
            "answers": [
                "Design",
                "Analysis",
                "Code Development",
                "Implementation (Deployment)"

            ],
            "correct_answers": "Design"
        },
        {
            "question": "Which of the following factors would be a potential candidate reason for choosing an Agile method for a software development project?",
            "answers": [
                "The development project consists of a large distributed team",
                "The customer has very few formally documented requirements",
                "There are strict safety critical requirements",
                "The customer has a range of complicated contractual commitments that are linked  to the planned development"

            ],
            "correct_answers": "The customer has very few formally documented requirement"
        },

        {
            "question": "Which of the following would be responsibilities of the product owner in a software  development project using an agile method of scrum? a. Prioritising items on the backlog, b. Accepting stories as done, c. Managing the execution stage of the project, d. Representing the customer to the Agile team",
            "answers": [
                "b, c and d only",
                "a, b and d only",
                "a, b and c only",
                "a, c and d only"

            ],
            "correct_answers": "a, b and d only"
        },

        {
            "question": "A company is developing application software for use by the general public using  the Scrum Methodology. Which of the following will NOT be a responsibility of the  Scrum Master?",
            "answers": [
                "Help the development team to achieve their goals",
                "Remove impediments from the team",
                "Shield the team from interruptions during the sprint",
                "Lead the development team"

            ],
            "correct_answers": "Lead the development team"
        },

        {
            "question": "Which of the following are objectives of the maintenance stage of the SDLC? a. Identify and fix bugs before software is implemented (deployed) so that they do  not cause operational failures, b. Adapt and modify the software as users' needs change through time after implementation (deployment), c. Complete any testing that could not be finished before implementation  (deployment), d. Fix bugs identified during live operation of the software.",
            "answers": [
                "a and b only",
                "a and d only",
                "b and c only",
                "b and d only"

            ],
            "correct_answers": "a and b only"
        },

        {
            "question": "Which of the following describes 'first-line support'?",
            "answers": [
                "Correcting bugs in operational software",
                "Providing support to a software service in the first few weeks when it goes live",
                "Providing support for the underlying infrastructure",
                "Dealing with incidents in order to restore service as quickly as possible"

            ],
            "correct_answers": "Dealing with incidents in order to restore service as quickly as possible"
        },

        {
            "question": "Which of the following is a TRUE statement about the software development  lifecycle (SDLC)?",
            "answers": [
                "The SDLC should be used only with sequential development methodologies",
                "The SDLC contains detailed instructions that should be followed to develop any IT  system",
                "The SDLC can be used to solve any business problem",
                "The SDLC is independent of the software development methodology used"

            ],
            "correct_answers": "The SDLC is independent of the software development methodology used"
        },

        {
            "question": "Which statement describes the use of the V-Model software development method in  the software development lifecycle (SDLC)?",
            "answers": [
                "All seven stages of SDLC are performed for each iteration, with verification and  validation performed in the final stage",
                "Each of the seven stages are performed iteratively before moving onto the next  stage with verification and validation performed in the testing stage",
                "The first three stages are performed once then verified and validated. The following  four stages are iterative",
                "Each stage of the SDLC has a corresponding verification and validation stage"

            ],
            "correct_answers": "Each stage of the SDLC has a corresponding verification and validation stage"
        },

        {
            "question": "A software development project is being initiated, and the project manager has set  the following broad objectives for the software development team [ Focus on the customers, Energise the team, Eliminate waste, Learn quickly, Keep improving ] Which of the following methodologies has a focus on eliminating waste?",
            "answers": [
                "Unified Process (UP)",
                "Lean",
                "Scrum",
                "XP"

            ],
            "correct_answers": "Lean"
        },

        {
            "question": "A software development team includes application planners, software designers, coders, and technical architects and follows an agile approach to development. The  team is involved in testing, implementation (deployment) and maintenance of  software as needed.  Which of the following would be required by all the software development team members? a. communication skills, b. leadership skills, c. coding skills, d. shared responsibility ethos for the team's work",
            "answers": [
                "a and b only",
                "a and c only",
                "a and d only",
                "b and c only"

            ],
            "correct_answers": "a and d only"
        },

        {
            "question": "When using Agile methodologies, it is common to have daily and / or weekly  progress meetings. Which of the following questions SHOULD NOT be asked to team members during  these daily / weekly progress meetings?",
            "answers": [
                "Are there any impediments that prevent the team from meeting the goals of the  iteration?",
                "What will you do next to help the team achieve the goals of the iteration?",
                "What did you do over the last day / week to help the team achieve its goals of the  iteration?",
                "Which team member is preventing the team from achieving the goals of the  iteration?"

            ],
            "correct_answers": "Which team member is preventing the team from achieving the goals of the  iteration?"
        },

        {
            "question": "Which of the following would be used by a code developer?",
            "answers": [
                "Business case",
                "Test strategy",
                "Functional requirements specification",
                "Technical design document"

            ],
            "correct_answers": "Technical design document"
        },

        {
            "question": "Software is being developed for a set of users who are only available to collaborate  during the analysis and acceptance testing parts of the project. They will also be  available to be trained on the new software before it goes live. Which of the following development approaches would be MOST appropriate given  the limited availability of the users?",
            "answers": [
                "Kanban",
                "Extreme Programming (XP)",
                "Sequential",
                "Test Driven Development (TDD)"

            ],
            "correct_answers": "Sequential"
        },

        {
            "question": "Which of the following is a (type of) functional requirement?",
            "answers": [
                "Supportability requirement",
                "User interface requirement",
                "Security requirement",
                "Availability requirement"

            ],
            "correct_answers": "User interface requirement"
        }


    ]
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [points, setPoints] = useState(0);
    const [quiz, setQuiz] = useState([])

    //
    // questionsData.map(({question, answers, correct_answers})=>{
    //
    //     setQuiz({question_1:questionsData.question,options:questionsData.answers})
    //     console.log(`${question_1} with quantity ${options}`)
    //
    // });
    // const [questionsData, setQuestions] = React.useState (questions)
    // questions.map((question, val) => console.log(question.question, val));
    function handleAnswer(e) {
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion)
    let userAnswer = e.target.innerHTML;
        if(userAnswer===questionsData[currentQuestion].correct_answers){
          setPoints(points+1)
        }
    }

// console.log(ques)
    return (

        <div className="quizz-page">
<div className="progress">{currentQuestion+1}/{questionsData.length} completed</div>            <h1>Q{currentQuestion + 1}</h1>
            <h3>{questionsData[currentQuestion].question}</h3>
            <div className="choice-group">

                {questionsData[currentQuestion].answers.map((answerOption, index) => (
                    <button onClick={handleAnswer} className="choice">{answerOption}</button>
                ))}

            </div>
            <h3>{points}</h3>
        </div>
        
    )
}

export default Quiz