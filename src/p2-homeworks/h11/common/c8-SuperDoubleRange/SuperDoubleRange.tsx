import React, {FC} from 'react'

import {Box, Slider} from "@mui/material";

type SuperDoubleRangeType = {
    value1: number | number[]
    setValue1: (value: number[]) => void


}

const SuperDoubleRange: FC<SuperDoubleRangeType> = ({value1, setValue1}) => {

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue1(newValue as number[]);
    };

    return (
        <Box sx={{width: 200, margin: '0 auto'}}>
            <Slider getAriaLabel={() => "Minimum distance shift"}
                    value={value1}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap/>
        </Box>
    )
}

function valuetext(value: number) {
    return `${value}`;
}

export default SuperDoubleRange
