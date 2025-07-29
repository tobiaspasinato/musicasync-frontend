import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router";

function Home() {
    let navigate = useNavigate();

    return (
        <div className='flex flex-row items-center justify-center h-screen gap-60'>
            <Button  variant={'outline'} onClick={() => navigate('/musico')}>
                Musico
            </Button>
            <Button variant={'outline'} onClick={() => navigate('/multimedia')}>
                Multimedia
            </Button>
        </div>
    )
}

export default Home