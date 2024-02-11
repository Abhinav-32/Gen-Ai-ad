"use client"

import { useEffect } from 'react';
import {Crisp} from "crisp-sdk-web";

export const CrispChat =()=>{
    useEffect(()=>{
     Crisp.configure("b3af6eae-2a5c-4cd9-b34d-96f4fd101ce7");
    },[]);

    return null;
}