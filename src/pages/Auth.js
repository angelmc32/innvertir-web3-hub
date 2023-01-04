import { useEffect, useState, useRef } from "react";
import SocialLogin from "@biconomy/web3-auth";
import { ChainId } from "@biconomy/core-types";
import SmartAccount from "@biconomy/smart-account";
import { ethers } from "ethers";
import styled from "styled-components";

const Auth = () => {
  const [smartAccount, setSmartAccount] = useState(null);
  const [interval, enableInterval] = useState(null);
  const sdkRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let configureLogin;
    if (interval) {
      console.log("F) Ya no sé qué pedo");
      configureLogin = setInterval(() => {
        if (!!sdkRef.current?.provider) {
          console.log("Z) ah chinga");
          setupSmartAccount();
          clearInterval(configureLogin);
        }
      }, 1000);
    }
  }, [interval]);

  const login = async () => {
    if (!sdkRef.current) {
      // console.log("A) No está vivo el sdkRef");
      // console.log("sdkRef: ", sdkRef);
      const socialLoginSDK = new SocialLogin();
      // const signature1 = await socialLoginSDK.whitelistUrl('http://localhost:3000/auth');
      await socialLoginSDK.init();
      sdkRef.current = socialLoginSDK;
      console.log(sdkRef);
    }
    if (!sdkRef.current.provider) {
      // console.log("B) No hay provider en el sdkRef");
      // console.log("sdkRef: ", sdkRef);
      // console.log("sdkRef.current: ", sdkRef.current);
      sdkRef.current.showWallet();
      enableInterval(true);
    } else {
      // console.log("C) Vamos a ejecutar setupSmartAccount ->");
      setupSmartAccount();
    }
  };

  const setupSmartAccount = async () => {
    if (!sdkRef?.current?.provider) return;
    setIsLoading(true);
    sdkRef.current.hideWallet();
    const web3Provider = new ethers.providers.Web3Provider(
      sdkRef.current.provider
    );
    try {
      const smartAccount = new SmartAccount(web3Provider, {
        activeNetworkId: ChainId.POLYGON_MAINNET,
        supportedNetworksIds: [ChainId.POLYGON_MAINNET],
      });
      await smartAccount.init();
      setSmartAccount(smartAccount);
      setIsLoading(false);
    } catch (err) {
      console.log("error setting up smart account", err);
    }
  };

  const logout = async () => {
    if (!sdkRef.current) {
      console.error("Web3Modal not initalized.");
      return;
    }
    await sdkRef.current.logout();
    sdkRef.current.hideWallet();
    setSmartAccount(null);
    enableInterval(false);
  };

  return (
    <div className="page-container uk-container">
      <h2>Auth</h2>
      <div className="uk-container">
        {!smartAccount && !isLoading && (
          <button className="uk-button uk-button-primary" onClick={login}>
            Iniciar Sesión
          </button>
        )}
        {isLoading && (
          <p>
            Cargando información... <span className="uk-spinner" />
          </p>
        )}
        {!!smartAccount && (
          <div className="uk-container">
            <h3>Smart account address:</h3>
            <p>{smartAccount.address}</p>
            <button className="uk-button uk-button-secondary" onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
