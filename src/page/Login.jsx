import ButtonLogin from "../component/ButtonLogin";
import ButtonSignin from "../component/ButtonSignin";
import { CiLock } from "react-icons/ci";



function Login () {
    
    return (
        <>
              
                <div className="boxlogin" >
                        <h1 className="textWelcom">Welcome</h1>
                        <section> 
                            <div className="forminput">
                                <input type = "text" placeholder=""/>
                                <label className="formlable">Username</label>
                            </div>
                            <div id="main-container">
                                <div className="forminput">
                                    <input type = "password" placeholder="" />
                                    <label className="formlable" for ="password">Password </label>
                                </div>
                                
                            </div>
                            <div className="clicklock">
                                <CiLock />
                            </div>
                        </section>
                            <ButtonLogin/>
                        <p className="textNewaccount">New Account </p>
                        <ButtonSignin/>
                </div>
                
           
       </>
    );
}
export default Login



