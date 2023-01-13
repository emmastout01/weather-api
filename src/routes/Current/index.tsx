import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';

const Current = () => {
    const { locale } = useParams();

    useEffect(() => {

    })

    return (
        <div>Current weather for {locale}</div>
    )
}

export default Current;
