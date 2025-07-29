import React from 'react'
import { Button } from './ui/button'
import { useNavigate } from "react-router";

function Multimedia() {
    let navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h1>Multimedia</h1>
            <Button variant={'outline'} onClick={() => navigate('/')}>
                Go to home
            </Button>
        </div>
    )
}


export default Multimedia