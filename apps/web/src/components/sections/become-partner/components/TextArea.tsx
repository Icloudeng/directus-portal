type ITextArea = {
    inputLabel: string;
    inputID: string;
    inputPlaceholder: string;
}

export const TextArea = ({ inputLabel, inputID, inputPlaceholder }:ITextArea) => {
    return (
        <div className='w-full'>
            <label
                htmlFor={inputID}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{inputLabel}</label>
            <textarea
                id={inputID}
                rows={4}
                className="block p-2.5 px-4 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-primary-400 focus:border-primary-400"
                placeholder={inputPlaceholder}
            >
            </textarea>

        </div>
    )
}
