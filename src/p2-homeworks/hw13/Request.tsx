import React, {useState} from 'react';
import {Button} from "@mui/material";
import axios from "axios";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";

const Request = () => {

    const [state, setState] = useState(false);

    const onClickHandler = async () => {

        await axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, {success: state})
            .then((response) => console.log(response))
            .catch(error => {
                console.log(...error)
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }

    return (
        <div>
            <SuperCheckbox onChange={() => setState(!state)}/>
            <Button onClick={onClickHandler}>btn</Button>
        </div>
    );
};

export default Request;
