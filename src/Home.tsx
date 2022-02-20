import { useEffect, useMemo, useState, useCallback } from 'react';
import * as anchor from '@project-serum/anchor';
import styled from 'styled-components';
import { Container, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui';
import {
  awaitTransactionSignatureConfirmation,
  CandyMachineAccount,
  CANDY_MACHINE_PROGRAM,
  getCandyMachineState,
  mintOneToken,
} from './logic/candy-machine';
import { AlertState } from './utils';


import { MintButton } from './components/MintButton';
import { GatewayProvider } from '@civic/solana-gateway-react';


import "./App.css";

import { Header } from './components/Header';



const ConnectButton = styled(WalletDialogButton)`
font-family:${props => props.theme.fam.lulo};
height:45px;
width:100%;
font-size:10px;
border:none;
text-transform:uppercase;
border-radius:100px;
background:${props => props.theme.color.yellow};
:hover {
  background-color: ${props => props.theme.color.grey};
  .MuiButton-label {
    color: #fff !important;
  }
}
.MuiButton-label {
  color: #000 !important;
}
`;

const MintContainer = styled.div`


padding: 5%;
font-family: ${(props) => props.theme.fam.helvetica};
@media only screen and (max-width: 600px) {
  margin-top:20px;
}
.inner {
  margin: 0 auto;
  text-align: center;
  h2 {
    margin: 0 auto;
    display: block;
    margin-bottom: 20px;
  }
  p {
    color: #ffffff;
  }
  input {
    height: 50px;
    width: 100%;
    text-align: center;
    background: transparent;
    border: none;
    padding: 0 10px;
    font-size: 15px;
    border-bottom: 1px solid #ffffff;
    max-width: 500px;
    &::placeholder {
      color: #ffffff;
    }
  }
  .mint-inner {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
span {
  color: #ffffff;
}
.inner {
  button {
    width: 200px;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      margin-right: 10px;
    }
  }
}
.mint-item {
  .mint-span {
    p {
      font-size: 15px;
    }
    .mint-inner {
      height: 40px;
      width: 100%;
      margin: 0 auto;
      max-width: 350px;
      background: #333;
      display: flex;
      align-items: center;
      border-radius: 35px;
      padding: 5px 6px;

      span {
        font-size: 40px;
        margin:auto 0;
        border-radius: 50%;
        svg {
          color: ${(props) => props.theme.color.yellow};
        }
      }
      .number {
        background: transparent;
        color: #ffffff;
        font-size:20px;
      }
    }
  }
  .mint-span-t {
    p {
      font-ize: 20px;
    }
    .mint-inner {
      text-align: center;
      height: 50px;
      width: 90%;
      margin: 0 auto;
      max-width: 350px;
      background: #333;
      display: flex;
      align-items: center;
      border-radius: 15px;
      padding: 5px 12px;
      span {
        margin: 0 auto;
        display: block;
        width: max-content;
      }
    }
    .mint-info {
      text-align: center;
      height: 50px;
      width: 90%;
      margin: 0 auto;
      max-width: 350px;
      display: flex;
      align-items: center;
      border-radius: 15px;
      padding-top: 15px ;
      padding-bottom: 15px;
      span {
        margin: 0 auto;
        display: block;
        width: 100%;
      }
    }
  }
}
`; // add your owns styles here

export interface HomeProps {
  candyMachineId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  txTimeout: number;
  rpcHost: string;
}

const Home = (props: HomeProps) => {
  const [isUserMinting, setIsUserMinting] = useState(false);
  const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: '',
    severity: undefined,
  });

  const rpcUrl = props.rpcHost;
  const wallet = useWallet();

  const anchorWallet = useMemo(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      return;
    }

    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    } as anchor.Wallet;
  }, [wallet]);

  const refreshCandyMachineState = useCallback(async () => {
    if (!anchorWallet) {
      return;
    }

    if (props.candyMachineId) {
      try {
        const cndy = await getCandyMachineState(
          anchorWallet,
          props.candyMachineId,
          props.connection,
        );
        setCandyMachine(cndy);
      } catch (e) {
        console.log('There was a problem fetching Candy Machine state');
        console.log(e);
      }
    }
  }, [anchorWallet, props.candyMachineId, props.connection]);

  const onMint = async () => {
    try {
      setIsUserMinting(true);
      document.getElementById('#identity')?.click();
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = (
          await mintOneToken(candyMachine, wallet.publicKey)
        )[0];

        let status: any = { err: true };
        if (mintTxId) {
          status = await awaitTransactionSignatureConfirmation(
            mintTxId,
            props.txTimeout,
            props.connection,
            true,
          );
        }

        if (status && !status.err) {
          setAlertState({
            open: true,
            message: 'Congratulations! Mint succeeded!',
            severity: 'success',
          });
        } else {
          setAlertState({
            open: true,
            message: 'Mint failed! Please try again!',
            severity: 'error',
          });
        }
      }
    } catch (error: any) {
      let message = error.msg || 'Minting failed! Please try again!';
      if (!error.msg) {
        if (!error.message) {
          message = 'Transaction Timeout! Please try again.';
        } else if (error.message.indexOf('0x137')) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf('0x135')) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          window.location.reload();
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: 'error',
      });
    } finally {
      setIsUserMinting(false);
    }
  };

  useEffect(() => {
    refreshCandyMachineState();
  }, [
    anchorWallet,
    props.candyMachineId,
    props.connection,
    refreshCandyMachineState,
  ]);

  // eslint-disable-next-line
  const [number, setNumber] = useState(1);
  if (number === 0) {
    setNumber(1);
  } else if (number === 6) {
    setNumber(5)
  }

  return (
    <Container style={{ height: "10vh " }}>

        <MintContainer>
          <div className="inner">

            <div className="mint-item">

              <div className="mint-span">
             
              </div>
              <div className="mint-span-t">
                {
                  candyMachine ? <>
                    <div className="mint-info">
                      <span>
                        <Header candyMachine={candyMachine} />
                      </span>
                    </div>
                  </> : null
                }
              </div>
            </div>

            <div >
              {candyMachine?.state.isActive &&
                candyMachine?.state.gatekeeper &&
                wallet.publicKey &&
                wallet.signTransaction ? (
                <>
                  <GatewayProvider
                    wallet={{
                      publicKey:
                        wallet.publicKey ||
                        new PublicKey(CANDY_MACHINE_PROGRAM),
                      //@ts-ignore
                      signTransaction: wallet.signTransaction,
                    }}
                    gatekeeperNetwork={
                      candyMachine?.state?.gatekeeper?.gatekeeperNetwork
                    }
                    clusterUrl={rpcUrl}
                    options={{ autoShowModal: false }}
                  >
                    <MintButton
                      candyMachine={candyMachine}
                      isMinting={isUserMinting}
                      onMint={onMint}
                    />

                  </GatewayProvider>
                </>


              ) : (
                <div >
                  <ConnectButton>Connect Wallet</ConnectButton>
                  <MintButton
                    candyMachine={candyMachine}
                    isMinting={isUserMinting}
                    onMint={onMint}
                  />
                </div>
              )}


            </div>

          </div>

        </MintContainer>


      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>

    </Container>
  );
};

export default Home;