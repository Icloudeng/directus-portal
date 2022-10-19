type ICheckCircle = {
    isChecked?: boolean
}
export const CheckCircle = ({ isChecked = false }: ICheckCircle) => {
    return (
        <div>
            {
                isChecked ?
                    <span className="px-[0.4rem] py-1 bg-primary-100 text-primary-500 text text-center rounded-full">✓</span>
                    :
                    <span className="px-[0.4rem] py-[0.20rem] bg-red-100 text-red-400 text text-center rounded-full">⨉</span>
            }
        </div>
    )
}
