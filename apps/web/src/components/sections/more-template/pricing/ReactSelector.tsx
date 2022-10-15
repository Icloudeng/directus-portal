import { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'Windows Svr 2019 Std X64', label: 'Windows Svr 2019 Std X64' },
    { value: 'Centos 8.3 X64', label: 'Centos 8.3 X64' },
    { value: 'Ubuntu 20.04 X64', label: 'Ubuntu 20.04 X64' },
    { value: 'Debian 10.7 X64', label: 'Debian 10.7 X64' },
    { value: 'Ubuntu 18.04 X64', label: 'Ubuntu 18.04 X64' },
    { value: 'FreeBSD 13.0 X64', label: 'FreeBSD 13.0 X64' },
    { value: 'Oracle 8.6 X64', label: 'Oracle 8.6 X64' },
];

export const ReactSelector = () => {
    const [selectedOption, setSelectedOption] = useState<any>(null);

    const handleChange = (selectedOption: any) => {
        setSelectedOption(selectedOption)
    }

    const customStyles = {
        container: (provided: any, state: any) => ({
            ...provided,
            // border: '1px solid green',
            // color: state.isSelected ? 'red' : 'blue',
            // padding: 20,
        }),
        control: (provided: any, state: any) => ({
            ...provided,
            width: "w-full",
            height: '2.9rem',
            borderRadius: '2px',
            border: state.isFocused && '1px solid var(--color-primary-400)',
            ":hover": {
                border: '1px solid var(--color-primary-500)',
            }
        }),
        singleValue: (provided: any, state: any) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        },
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isSelected && 'var(--color-primary-400)',
            cursor: 'pointer'
        }),
    }

    return (
        <div className="custom-select w-full">
            <Select value={selectedOption} onChange={handleChange} options={options} styles={customStyles} />
        </div>
    )
}
