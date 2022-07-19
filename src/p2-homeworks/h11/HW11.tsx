import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {Slider} from "@mui/material";

function HW11() {
    const [value1, setValue1] = useState<number[]>([20, 37])
    const [value, setValue] = React.useState<number>(30);

    const onChangeRange = (value: number) => {
        setValue(value)
        setValue1([value, value1[1]])
    }

    const onChangeDoubleRange = (value: number[]) => {
        setValue1(value);
        setValue(value[0])
    }

    return (
        <div>
            <hr/>
            homeworks 11
            <div>
                <SuperRange value={value} onChangeRange={onChangeRange}/>
            </div>
            <div>

                <SuperDoubleRange
                    value1={value1}
                    setValue1={onChangeDoubleRange}
                />
            </div>
            <hr/>
        </div>
    )
}

export default HW11
