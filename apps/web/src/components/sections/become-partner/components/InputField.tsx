type IInputField = {
    inputLabel: string;
    inputID: string;
    inputType: string;
    inputPlaceholder: string;
}

function InputField({ inputLabel, inputID, inputType, inputPlaceholder }:IInputField) {
    return (
        <div className="w-full">
            <label htmlFor={inputID} className="block text-sm font-medium text-gray-700 capitalize">{inputLabel}</label>
            <div className="mt-1 rounded-sm shadow-sm w-full">
                <input
                    type={inputType}
                    name={inputID}
                    id={inputID}
                    className="block w-full rounded-sm bg-gray-50 py-3 border-gray-300 px-4 focus:border-primary-400 focus:ring-primary-400 sm:text-sm"
                    placeholder={inputPlaceholder}
                />
            </div>
        </div>
    )
}

export default InputField