import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {Box, Slider} from "@mui/material";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type SuperRangePropsType = DefaultInputPropsType & {
    onChangeRange: (value: number) => void
    value: number
};

const SuperRange: React.FC<SuperRangePropsType> = ({ onChangeRange, value }) => {

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange(newValue as number);
    };

    return (
        <>
            <Box sx={{width: 200, margin: '0 auto'}}>
                <Slider
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    value={value}
                    onChange={handleChange}
                    getAriaValueText={valuetext}
                />
            </Box>
        </>
    )
}

function valuetext(value: number) {
    return `${value}`;
}

export default SuperRange
