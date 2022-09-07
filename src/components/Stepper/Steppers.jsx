import React, {useEffect, useState, useRef} from 'react'


const Steppers = ({steps, currentStep}) => {
    const  [newStep, setNewStep] = useState([]);
    
    const setRef = useRef();
    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps]
        let count = 0;

        while(count < newSteps.length) {
            if(count === stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true
                };
                count++;
            }
            else if(count < stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true
                };
                count++;
            }
            else{
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false
                };
                count++;
            }
        }
        return newSteps;
    }
    useEffect(()=>{
        const stepsState = steps.map((step, index)=>
            Object.assign(
                {},
                {
                description: step,
                completed: false,
                highlighted: index === 0 ? true : false,
                selected: index === 0 ? true : false
            }
            )
        )
        setRef.current = stepsState;
        const current = updateStep(currentStep -1, setRef.current);
        setNewStep(current)
    },[steps, currentStep])


    const displaySteps = newStep.map((step, index) => {
        return  (
            <div key={index} className={index !== newStep.length -1? "w-full flex items-center" : "flex items-center"}>
                <div className="relative flex flex-col items-center text-teal-600">
                    <div className={`rounded-full transition duration-500 ease-in-out border-8 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${step.selected ? "border-blue-900 text-white font-bold border-8 bg-emerald-400": ""}`}>
                    {/* Display Numbers */}
                {step.completed ? (
                    <span className="text-white font-bold text-xl"></span>
                ) : ""}
                    </div>
                    <div className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${step.highlighted ?"text-gray-900":"text-gray-400"}`}>
                    {/* Display Descriptions */}
                        {step.description}
                    </div>
                </div>
                <div className={`flex-auto border-t-8 transition duration-500 ease-in-out ${step.completed ? "border-blue-900" : "border-gray-300"}`}>
                {/* Display lines */}
                </div>
            </div>
        )
    });
   



  return (
    <div className="mx-4 p-4 flex justify-between items-center">
        {displaySteps}
    </div>
  )
}

export default Steppers