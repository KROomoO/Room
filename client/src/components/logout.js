import { GoogleLogout } from "react-google-login";

const clientId =
    "437582400190-8v5mkl7ae3eds254grr32386l55qu6mp.apps.googleusercontent.com";

function Logout() {
    const onSuccess = () => {
        console.log("Log out Success");
    };

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
}

export default Logout;
