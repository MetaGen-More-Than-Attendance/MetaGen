import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {

  const navigate = useNavigate();
  
  const handleClick =  () => {
    navigate("/home")
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '90vh', backgroundColor: 'black', marginTop: -14 }}>
      <h1 style={{ color: 'red', fontSize: 95 }}>404</h1>
      <h1 style={{ color: 'red', fontSize: 45 }}>Page Not Found !</h1>
      <h3 style={{ color: 'white', padding: 10 }} >Sorry we can't find what you are looking for 'cuz its so dark in here</h3>
      <Button variant="outline-danger" onClick={handleClick} >Home</Button>
    </div>
  )
}

export default NotFoundPage