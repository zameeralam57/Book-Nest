// import { useEffect } from "react";
// import "./App.css";
// export default function GoogleLogIn(){
    
//     function handlecallbackResponse(response){
//         ("Encoded JWT ID Token : "+ response.credential);
//     }
//     useEffect(()=>{
//         google.accounts.id.initialize({
//             client_id:"253200048380-kj5s3efrn407rl6tfuvuuafg014qp8vg.apps.googleusercontent.com",
//             callback: handlecallbackResponse
//         });

//         google.accounts.id.renderButton(
//             document.getElementById("signInDiv"),
//             {theme : "outline",size : "large"}
//         )
//     },[])
//     return<>
//         <div className="App">
//             <div id="signInDiv"></div>
//         </div>
//     </>
// }