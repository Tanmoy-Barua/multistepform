import React, {useContext} from 'react'
import {StepperContext} from '../context/StepperContext'

const DepressionList = (props) => {
  const {userData, setUserData} = useContext(StepperContext) 

  const handlerChange = (e) =>{

    const {name, value} = e.target;
    setUserData({...userData, [name]: value});
  }
  console.log(userData);
  
  // console.log(userData)
 
  //  let keys = 
  // console.log(props.message);
  return (
    <div>
      <p className="py-2"> <span className="font-bold">Over the last 2 weeks</span>, how often have you been bothered by any of the following problems?</p>
      <p className="py-2 mb-5 text-red-400">Please note, all fields are required.</p>
      {props.message === true ? <div
    id="alert-2"
    className="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200"
    role="alert"
  >
    <svg
      aria-hidden="true"
      className="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clipRule="evenodd"
      />
    </svg>
    <span className="sr-only">Info</span>
    <div className="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
      All Feild are required. Please Select all feild
    </div>
    <button
      type="button"
      className="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300"
      data-dismiss-target="#alert-2"
      aria-label="Close"
    >
      <span className="sr-only">Close</span>
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>:''}
      <form>
        <ul className="list-decimal">
          {/* 1 */}
          <li className="py-5">
            <label htmlFor="1">Little interest or pleasure in doing things</label>
            <div>
              <ul className="my-5 flex">
                <li>
                  <input type="radio" name="question1" className="invisible input" id="notAtAll" onChange={handlerChange} value="0" />
                  <label htmlFor="notAtAll" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not at all</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="severalDays" onChange={handlerChange} value="1" name="question1"/>
                  <label htmlFor="severalDays" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Several Days</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="moreThanHalfTheDays" onChange={handlerChange} value="2" name="question1"/>
                  <label htmlFor="moreThanHalfTheDays" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">MORE THAN HALF THE DAYS</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="NearlyEveryDay" onChange={handlerChange} value="3" name="question1"/>
                  <label htmlFor="NearlyEveryDay" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Nearly Every Days</label>
                </li>
              </ul>
            </div>
          </li>
          {/* 2 */}
          <li className="py-5">
            <label htmlFor="2">Feeling down, depressed, or hopeless</label>
            <div>
              <ul className="my-5 flex">
                <li>
                  <input type="radio" name="question2" className="invisible input" id="notAtAll2" onChange={handlerChange} value="0" />
                  <label htmlFor="notAtAll2" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not at all</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="severalDays2" onChange={handlerChange} value="1" name="question2"/>
                  <label htmlFor="severalDays2" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Several Days</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="moreThanHalfTheDays2" onChange={handlerChange} value="2" name="question2"/>
                  <label htmlFor="moreThanHalfTheDays2" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">MORE THAN HALF THE DAYS</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="NearlyEveryDay2" onChange={handlerChange} value="3" name="question2"/>
                  <label htmlFor="NearlyEveryDay2" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Nearly Every Days</label>
                </li>
              </ul>
            </div>
          </li>
          {/* 3 */}
          <li className="py-5">
            <label htmlFor="3">Trouble falling or staying asleep, or sleeping too much
            </label>
            <div>
              <ul className="my-5 flex">
                <li>
                  <input type="radio" name="question3" className="invisible input" id="notAtAll3" onChange={handlerChange} value="0" />
                  <label htmlFor="notAtAll3" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not at all</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="severalDays3" onChange={handlerChange} value="1" name="question3"/>
                  <label htmlFor="severalDays3" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Several Days</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="moreThanHalfTheDays3" onChange={handlerChange} value="2" name="question3"/>
                  <label htmlFor="moreThanHalfTheDays3" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">MORE THAN HALF THE DAYS</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="NearlyEveryDay3" onChange={handlerChange} value="3" name="question3"/>
                  <label htmlFor="NearlyEveryDay3" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Nearly Every Days</label>
                </li>
              </ul>
            </div>
          </li>
          {/* 4 */}
          <li className="py-5">
            <label htmlFor="4">Feeling tired or having little energy</label>
            <div>
              <ul className="my-5 flex">
                <li>
                  <input type="radio" name="question4" className="invisible input" id="notAtAll4" onChange={handlerChange} value="0" />
                  <label htmlFor="notAtAll4" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not at all</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="severalDays4" onChange={handlerChange} value="1" name="question4"/>
                  <label htmlFor="severalDays4" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Several Days</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="moreThanHalfTheDays4" onChange={handlerChange} value="2" name="question4"/>
                  <label htmlFor="moreThanHalfTheDays4" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">MORE THAN HALF THE DAYS</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="NearlyEveryDay4" onChange={handlerChange} value="3" name="question4"/>
                  <label htmlFor="NearlyEveryDay4" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Nearly Every Days</label>
                </li>
              </ul>
            </div>
          </li>
          {/* 5 */}
          <li className="py-5">
            <label htmlFor="5">Poor appetite or overeating</label>
            <div>
              <ul className="my-5 flex">
                <li>
                  <input type="radio" name="question5" className="invisible input" id="notAtAll5" onChange={handlerChange} value="0" />
                  <label htmlFor="notAtAll5" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not at all</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="severalDays5" onChange={handlerChange} value="1" name="question5"/>
                  <label htmlFor="severalDays5" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Several Days</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="moreThanHalfTheDays5" onChange={handlerChange} value="2" name="question5"/>
                  <label htmlFor="moreThanHalfTheDays5" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">MORE THAN HALF THE DAYS</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="NearlyEveryDay5" onChange={handlerChange} value="3" name="question5"/>
                  <label htmlFor="NearlyEveryDay5" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Nearly Every Days</label>
                </li>
              </ul>
            </div>
          </li>
          {/* 6 */}
          <li className="py-5">
            <label htmlFor="6">Feeling bad about yourself - or that you are a failure or have let yourself or your family down</label>
            <div>
              <ul className="my-5 flex">
                <li>
                  <input type="radio" name="question6" className="invisible input" id="notAtAll6" onChange={handlerChange} value="0" />
                  <label htmlFor="notAtAll6" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not at all</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="severalDays6" onChange={handlerChange} value="1" name="question6"/>
                  <label htmlFor="severalDays6" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Several Days</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="moreThanHalfTheDays6" onChange={handlerChange} value="2" name="question6"/>
                  <label htmlFor="moreThanHalfTheDays6" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">MORE THAN HALF THE DAYS</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="NearlyEveryDay6" onChange={handlerChange} value="3" name="question6"/>
                  <label htmlFor="NearlyEveryDay6" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Nearly Every Days</label>
                </li>
              </ul>
            </div>
          </li>
          {/* 7 */}
          <li className="py-5">
            <label htmlFor="7">Trouble concentrating on things, such as reading the newspaper or watching television</label>
            <div>
              <ul className="my-5 flex">
                <li>
                  <input type="radio" name="question7" className="invisible input" id="notAtAll7" onChange={handlerChange} value="0" />
                  <label htmlFor="notAtAll7" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not at all</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="severalDays7" onChange={handlerChange} value="1" name="question7"/>
                  <label htmlFor="severalDays7" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Several Days</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="moreThanHalfTheDays7" onChange={handlerChange} value="2" name="question7"/>
                  <label htmlFor="moreThanHalfTheDays7" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">MORE THAN HALF THE DAYS</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="NearlyEveryDay7" onChange={handlerChange} value="3" name="question7"/>
                  <label htmlFor="NearlyEveryDay7" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Nearly Every Days</label>
                </li>
              </ul>
            </div>
          </li>
          {/* 8 */}
          <li className="py-5">
            <label htmlFor="8">Moving or speaking so slowly that other people could have noticed</label>
            <div>Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual</div>
            <div>
              <ul className="my-5 flex">
                <li>
                  <input type="radio" name="question8" className="invisible input" id="notAtAll8" onChange={handlerChange} value="0" />
                  <label htmlFor="notAtAll8" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not at all</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="severalDays8" value="several days" name="question8"/>
                  <label htmlFor="severalDays8" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Several Days</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="moreThanHalfTheDays8" value="more Than Half TheDays" name="question8"/>
                  <label htmlFor="moreThanHalfTheDays8" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">MORE THAN HALF THE DAYS</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="NearlyEveryDay8" value="NEARLY EVERY DAY" name="question8"/>
                  <label htmlFor="NearlyEveryDay8" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Nearly Every Days</label>
                </li>
              </ul>
            </div>
          </li>
          {/* 9 */}
          <li className="py-5">
            <label htmlFor="9">Thoughts that you would be better off dead, or of hurting yourself</label>
            <div>
              <ul className="my-5 flex">
                <li>
                  <input type="radio" name="question9" className="invisible input" id="notAtAll9" onChange={handlerChange} value="0" />
                  <label htmlFor="notAtAll9" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not at all</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="severalDays9" onChange={handlerChange} value="1" name="question9"/>
                  <label htmlFor="severalDays9" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Several Days</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="moreThanHalfTheDays9" onChange={handlerChange} value="2" name="question9"/>
                  <label htmlFor="moreThanHalfTheDays9" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">MORE THAN HALF THE DAYS</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="NearlyEveryDay9" onChange={handlerChange} value="3" name="question9"/>
                  <label htmlFor="NearlyEveryDay9" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Nearly Every Days</label>
                </li>
              </ul>
            </div>
          </li>
          {/* 10 */}
          <li className="py-5">
            <label htmlFor="10"> If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?</label>
            <div>
              <ul className="my-5 flex">
                <li>
                  <input type="radio" name="question10" className="invisible input" id="notdifficultatall" onChange={handlerChange} value="0" />
                  <label htmlFor="notdifficultatall" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not difficult at all</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="SomeWhatDifficult" onChange={handlerChange} value="1" name="question10"/>
                  <label htmlFor="SomeWhatDifficult" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">SomeWhat Difficult</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="VeryDifficult" onChange={handlerChange} value="2" name="question10"/>
                  <label htmlFor="VeryDifficult" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Very Difficult</label>
                </li>
                <li>
                  <input type="radio" className="invisible input" id="ExtermlyDifficult" onChange={handlerChange} value="3" name="question10"/>
                  <label htmlFor="ExtermlyDifficult" className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Extermly Difficult</label>
                </li>
              </ul>
            </div>
          </li>
        </ul>


        
      </form>
    </div>
  )
}

export default DepressionList