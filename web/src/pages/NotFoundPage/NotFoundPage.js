import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {

  const navigate = useNavigate();
  
  const handleClick =  () => {
    navigate("/home")
  }

  return (
    <div style={{ position:'absolute', top:0, right: 0, left:0, width:'"100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black',}}>
      <h1 style={{ color: 'red', fontSize: 95 }}>404</h1>
      <h1 style={{ color: 'red', fontSize: 55 }}>Page Not Found !</h1>
      <h3 style={{ color: 'white', padding:10 }} >Sorry we can't find what you are looking for 'cuz its so dark in here</h3>
      <Button variant="outline-danger" onClick={handleClick} >Home</Button>
    </div>
  )
}

export default NotFoundPage