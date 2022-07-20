import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?:Array<string>
    onChangeOption?: (option: string) => void
}

const SuperRadioMemoized: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }
    const mappedOptions: ReactNode = options ? options.map((o, i) => (

        <label key={name + '-' + i}>
            <input
                type={'radio'}
                name={name}
                checked = {value === o}
                value={o}
                onChange={onChangeCallback}

            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}
const SuperRadio = React.memo(SuperRadioMemoized)

export default SuperRadio
