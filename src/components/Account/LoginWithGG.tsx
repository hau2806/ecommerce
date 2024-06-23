import React, { Fragment } from "react";
import { CredentialResponse, GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const LoginWithGG = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="w-25 mx-auto mt-5 pt-5">
        <GoogleOAuthProvider clientId="846149742047-ejle7gbl04nb33s2kfb97p6om7oibfto.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse: CredentialResponse) => {
              const decoded = jwtDecode(credentialResponse.credential);
              window.sessionStorage.setItem("usernameGG", decoded.name);
              navigate("/");
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </div>
    </Fragment>
  );
};

export default LoginWithGG;
