import Button from "@/components/ui/buttons/Button"
import UnderlineLink from "@/components/ui/links/UnderlineLink"
import UnstyledLink from "@/components/ui/links/UnstyledLink"
import InputField from "./components/InputField"
import { TextArea } from "./components/TextArea"

export const BecomePartner = () => {
    return (
        <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
            <div className='flex flex-col items-center justify-center gap-7 mb-7'>
                <h1 className='text-center'>Become a Partner</h1>
            </div>

            <div className="max-w-3xl w-full flex flex-col gap-7 items-center">
                <div className="w-4/5 flex flex-wrap sm:flex-nowrap gap-7">
                    <InputField inputType="text" inputLabel="first name" inputPlaceholder="First Name" inputID="first_name" />
                    <InputField inputType="text" inputLabel="last name" inputPlaceholder="Last Name" inputID="last_name" />
                </div>
                <div className="w-4/5 flex flex-wrap sm:flex-nowrap gap-7">
                    <InputField inputType="text" inputLabel="job title" inputPlaceholder="Job TTitle" inputID="job_title" />
                    <InputField inputType="email" inputLabel="email" inputPlaceholder="email@domain.com" inputID="email" />
                </div>
                <div className="w-4/5 flex flex-wrap sm:flex-nowrap gap-7">
                    <InputField inputType="text" inputLabel="phone number" inputPlaceholder="+1 444-444-4444" inputID="phone_number" />
                    <InputField inputType="text" inputLabel="website" inputPlaceholder="www.company.com" inputID="website" />
                </div>
                <div className="w-4/5 flex flex-wrap sm:flex-nowrap gap-7">
                    <InputField inputType="text" inputLabel="company" inputPlaceholder="Company" inputID="company" />
                    <InputField inputType="text" inputLabel="country" inputPlaceholder="Country" inputID="country" />
                </div>
                <div className="w-4/5 flex flex-wrap sm:flex-nowrap gap-7">
                    <TextArea inputLabel="Describe your needs" inputID="message" inputPlaceholder="Let's know your needs" />
                </div>
                <div className="w-4/5 flex flex-wrap sm:flex-nowrap items-center justify-between sm:mt-7 gap-3">
                    <span className="text-xs text-center sm:text-start">
                        By clicking Submit, you agree to our <UnstyledLink href="#" className="text-primary-600">Terms of Service</UnstyledLink> and give your permission to create an account.
                    </span>
                    <Button className="w-full sm:w-auto flex items-center justify-center text-sm rounded-sm bg-primary-400 border-none px-7 py-3">Submit</Button>
                </div>
            </div>
        </div>
    )
}
