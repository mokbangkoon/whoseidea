import React from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Main () {
    return (
        <div>안녕하세요 메인입니다.</div>
    )
}