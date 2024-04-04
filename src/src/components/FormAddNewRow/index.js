import { Button } from 'semantic-ui-react';

export function FormAddNewRow(props) {
  const submitFunction = props.submitFunction;
  const showSubmittingMessage = props.showSubmittingMessage;

  return (
    <div class=" p-20 h-[30%] w-[50%] items-center justify-center bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 border-gray-200 rounded-3xl shadow-lg ">
      <p class="font-black text-2xl text-white drop-shadow-lg">
        {' '}
        Adding New Row{' '}
      </p>
      <form
        id="myForm"
        class=" flex flex-col items-center justify-center border w-[50%]"
        className="Form"
        onSubmit={(e) => submitFunction(e)}
      >
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class=" text-lg block uppercase tracking-wide text-black  font-bold mb-2"
              for="grid-first-name"
            >
              ID
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              required
              placeholder="ID"
            />
            <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="  text-lg block uppercase tracking-wide  text-black  font-bold mb-2"
              for="grid-last-name"
            >
              Performance Score
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              required
              type="number"
              placeholder="Performance Score"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class=" text-lg   block uppercase tracking-wide text-black    font-bold mb-2"
              for="grid-password"
            >
              Avatar Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              required
              type="text"
              placeholder="Avatar Name"
            />
          </div>
        </div>

        <div class="flex flex-row items-center justify-center relative ">
          {showSubmittingMessage ? (
            <p class=" text-3xl text-white p-2  absolute top-0 mt-4">
              Submitting...
            </p>
          ) : (
            <Button primary>
              <input type="submit" name="Submit" />
            </Button>
          )}
        </div>
        {/* onClick={ SyncButtonFun} */}
      </form>
    </div>
  );
}
