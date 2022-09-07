import React, {useState} from 'react'
import {StepperContext} from './context/StepperContext'
import Steppers from './Stepper/Steppers'
import NavigationControl from './Navigations/NavigationControl'
import DepressionList from './steps/DepressionList'
import PersonalDetails from './steps/PersonalDetails'
import Final from './steps/Final' 


const CheckupForm = () => {
  const [message , setMessage] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  

  const steps = [
    "Test Question",
    "Demographic Information",
    "Your Results",
  ]

  const displaySteps = (step) => {
    switch(step){
      case 1:
        return <DepressionList message={message} />
      case 2: 
        return <PersonalDetails />
      case 3: 
        return <Final />
      default:
    }
  }

  const handleClickDirection = (direction) =>{
    if(userData!==''){
      setMessage(false);
      let newStep = currentStep;
  
      direction === "next" ? newStep++ : newStep--;
  
      newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
    }else{
      setMessage(true);
    }
  }
  return (
    <div className="md:w-3/5 mx-auto rounded-2xl pb-2">
      {/* Steppers */}
      <div className="container horizantal mt-5">
        <h3 className="text-cyan-600 text-5xl	font-bold	mb-4">Depression Test</h3>
        <p>There was a problem with your submission. Please review the fields below.</p>
      <Steppers steps={steps} currentStep={currentStep}/>
    {/* Display Components */}
    <div className="my-10 p-10">
      <StepperContext.Provider value={{
        userData,
        setUserData,
        finalData,
        setFinalData,
      }}>
      {displaySteps(currentStep)}
      </StepperContext.Provider>
    </div>
      </div>


      {/* Navigation Control */}
      <NavigationControl handleClick={handleClickDirection} currentStep={currentStep} steps={steps}/>
    </div>
  )
}

export default CheckupForm