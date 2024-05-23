import './App.css'
import MicrosoftLogin from 'react-microsoft-login'

function App() {

  const handleCallback = (data) => {
    console.log(data)
  }

  return (
    <MicrosoftLogin clientId={"a3a4079a-bf27-42d2-99c0-7a30e2739694"} authCallback={handleCallback} 
      tenantUrl='https://login.microsoftonline.com/4bc0e4bd-b054-4eb1-a4d3-ef13dc805095'
      redirectUri='https://navegadmin.vercel.app/redirect/'
    />
  );
}

export default App
