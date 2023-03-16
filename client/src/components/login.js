import { GoogleLogin } from "react-google-login";
const clientId =
    "437582400190-8v5mkl7ae3eds254grr32386l55qu6mp.apps.googleusercontent.com";

function Login() {
    const onSuccess = (res) => {
        console.log("Login Success! current user: ", res.profileObj);
    };
    const onFailure = (res) => {
        console.log("login Failed! res: ", res);
    };
    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;
