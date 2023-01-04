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
      configureLogin = setInterval(() => {
        if (!!sdkRef.current?.provider) {
          setupSmartAccount();
          clearInterval(configureLogin);
        }
      }, 1000);
    }
  }, [interval]);

  const login = async () => {
    if (!sdkRef.current) {
      const socialLoginSDK = new SocialLogin();
      await socialLoginSDK.init(ethers.utils.hexValue(ChainId.POLYGON_MAINNET));
      sdkRef.current = socialLoginSDK;
    }
    if (!sdkRef.current.provider) {
      sdkRef.current.showContentModal();
      sdkRef.current.showWallet();
      enableInterval(true);
    } else {
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
          <button className="uk-button uk-button-primary">
            Iniciar Sesión
          </button>
        )}
        {isLoading && (
          <p>
            Cargando información... <div className="uk-spinner"></div>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
