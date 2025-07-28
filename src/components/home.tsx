import React from 'react'
import { Button } from "@/components/ui/button"

function Home() {
    return (
        <div className='flex flex-row items-center justify-center h-screen gap-60'>
            <Button 
                className='w-32 h-32 bg-cover bg-center bg-no-repeat text-white font-bold shadow-lg backdrop-blur-sm'
                variant={'outline'}
                style={{backgroundImage: "url('https://www.mendoza.gov.ar/wp-content/uploads/sites/5/2020/09/M%C3%BAsica-en-vivo.jpg')"}}>
                Musico
            </Button>

            <Button 
                className='w-32 h-32 bg-cover bg-center bg-no-repeat text-white font-bold shadow-lg backdrop-blur-sm'
                variant={'outline'}
                style={{backgroundImage: "url('https://media.istockphoto.com/id/1398898810/es/foto/un-hombre-compositor-productor-arreglista-compositor-m%C3%BAsico-manos-arreglando-m%C3%BAsica.jpg?s=612x612&w=0&k=20&c=4FFXb4p6MwnIrTlSScXRMVOtaUDDqw0uviB0FsybXtc=')"}}>
                Home
            </Button>
        </div>
    )
}

export default Home