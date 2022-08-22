import React, {useState} from 'react';
import {Button} from "@mui/material";
import axios from "axios";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";

const Request = () => {

    const [state, setState] = useState<boolean>(false);
    const [resultText, setResultText] = useState<string>('')

    const onClickHandler = async () => {
        await axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, {success: state})
            .then((response) => setResultText(response.data.info))
            .catch(error => {
                console.log({...error})
                console.log(error.response ? error.response.data.errorText : error.message);
                setResultText(error.response.data.errorText)
            })


    }

    return (
        <div>
            <SuperCheckbox onChange={() => setState(!state)}/>
            <Button onClick={onClickHandler}>btn</Button>
            <span>{resultText}</span>
        </div>
    );
};

export default Request;
