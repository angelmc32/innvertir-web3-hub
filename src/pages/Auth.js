import { useEffect, useState, useRef } from "react";
import SocialLogin from "@biconomy/web3-auth";
import { ChainId } from "@biconomy/core-types";
import SmartAccount from "@biconomy/smart-account";
import { BalancesDto } from "@biconomy/node-client";
import { ethers } from "ethers";
import styled from "styled-components";

const Auth = () => {
  const [smartAccount, setSmartAccount] = useState(null);
  const [interval, enableInterval] = useState(null);
  const sdkRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [balances, setBalances] = useState([]);
  const [usdBalance, setUsdBalance] = useState(null);

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
  }, [interval, usdBalance]);

  const login = async () => {
    if (!sdkRef.current) {
      // console.log("A) No está vivo el sdkRef");
      // console.log("sdkRef: ", sdkRef);
      const socialLoginSDK = new SocialLogin();
      const signature1 = await socialLoginSDK.whitelistUrl(
        "https://feature-biconomy-login-wallet--musical-meringue-5a5af7.netlify.app/auth"
      );
      const signature2 = await socialLoginSDK.whitelistUrl(
        "https://feature-biconomy-login-wallet--musical-meringue-5a5af7.netlify.app"
      );
      await socialLoginSDK.init({
        whitelistUrls: {
          "https://feature-biconomy-login-wallet--musical-meringue-5a5af7.netlify.app/auth":
            signature1,
          "https://feature-biconomy-login-wallet--musical-meringue-5a5af7.netlify.app":
            signature2,
        },
      });
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
    setBalances(null);
  };

  const getBalances = async () => {
    const balanceParams = {
      chainId: ChainId.POLYGON_MAINNET, // chainId of your choice
      eoaAddress: smartAccount.address,
      tokenAddresses: [],
    };
    try {
      const balFromSdk = await smartAccount.getAlltokenBalances(balanceParams);
      console.log(balFromSdk);
      setBalances(balFromSdk.data);

      const usdBalFromSdk = await smartAccount.getTotalBalanceInUsd(
        balanceParams
      );
      setUsdBalance(usdBalFromSdk.data.totalBalance);
      console.log(usdBalFromSdk.data.totalBalance);
    } catch (err) {
      console.error(err);
    }
    //data[0].contract_ticker_symbol
  };

  return (
    <div className="page-container uk-container uk-width-1-1">
      <h2>{!smartAccount ? "Iniciar Sesión" : "Mi Wallet"}</h2>
      <h4>{usdBalance}</h4>
      <div className="uk-container uk-width-2-5 uk-flex uk-flex-center">
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
          <div className="uk-container uk-width-4-5 uk-flex uk-flex-column uk-flex-center">
            <div className="uk-container uk-margin">
              <a
                href={`https://polygonscan.com/address/${smartAccount.address}`}
              >
                Ver en Explorador de Bloques
              </a>
            </div>
            <div className="uk-width-1-1 uk-flex uk-flex-around">
              <button
                className="uk-button uk-button-primary"
                onClick={getBalances}
              >
                Get Balances
              </button>
              <button
                className="uk-button uk-button-secondary"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
