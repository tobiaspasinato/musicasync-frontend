import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router";

function Musico() {
  let navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1>Musico</h1>
      <Button variant={'outline'} onClick={() => navigate('/')}>
        Go to home
      </Button>
    </div>
  )
}

export default Musico