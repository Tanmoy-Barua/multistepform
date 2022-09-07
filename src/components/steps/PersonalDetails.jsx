import React from 'react'

const PersonalDetails = () => {
  return (
    <div>
      <p className="mb-2">Please take a moment to answer the following optional questions. Your answers are totally anonymous—we won't be able to identify you based on this information. Your answers help us provide better information and support for people like you.</p>

      <p className="pb-5">You can answer as many or as few questions as you would like. When you are done, scroll to the bottom of the survey and click "submit" to receive your screening results.</p>
      <hr />

      <div>
        <form className="mt-5">
        <label>Are you taking this test for yourself or for someone else?</label>
        <div className="mt-4">
        <input type="radio" className="invisible input" id="severalDays" value="myself"
          name="question1" />
        <label htmlFor="severalDays"
          className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Several
          Days</label>
        </div>
        </form>
      </div>
    </div>
  )
}

export default PersonalDetails