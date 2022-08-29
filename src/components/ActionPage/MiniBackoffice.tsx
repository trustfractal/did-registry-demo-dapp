import React from "react";
import styled from "styled-components";

import { Button, Card as OriginalCard, Text } from "../ui";
import { TextSizes } from "../ui/Text";
import { CenteredElement, CenteredFlexElement } from "../ui/CenteredElement";
import { unreachable } from "../../lib/types";
import { Backoffice } from "../../hooks/miniBackoffice";

const Card = styled(OriginalCard)`
  color: white;
  background-color: black;
`;

const NewLine = () => <br />;

const CardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const SingleText = ({ children }: { children: string }) => (
  <>
    <Text>{children}</Text>
    <Text>&nbsp;</Text>
  </>
);

export const MiniBackoffice = ({ backoffice }: { backoffice: Backoffice }) => {
  let content;
  switch (backoffice.status) {
    case "Unconfigured":
      content = <SingleText>Please connect your wallet first.</SingleText>;
      break;
    case "UnregisteredUser":
      content = (
        <>
          <Text size={TextSizes.EXTRA_SMALL}>
            ❓ Wallet Address not found. Click the button to add your wallet
            address to the DID Registry. This is what would happen when your
            user onboards with Fractal with a <strong>uniqueness</strong>{" "}
            journey. Clicking the button will initiate a transaction from your
            wallet.
          </Text>
          <NewLine />
          <CenteredElement>
            <Button onClick={backoffice.registerUser as () => void}>
              Add Wallet Address
            </Button>
          </CenteredElement>
        </>
      );
      break;
    case "KYCAbsent":
      content = (
        <>
          <Text size={TextSizes.EXTRA_SMALL}>
            🚫 You are not in the KYC List. Click a button to either add your
            wallet address to the KYC list or remove it from the Registry.
            Clicking <strong>Add KYC</strong> is what would happen when your
            user onboards with Fractal with a KYC level like{" "}
            <strong>Plus</strong>. Clicking the button will initiate a
            transaction from your wallet.
          </Text>
          <NewLine />
          <CenteredFlexElement>
            {" "}
            <Button onClick={backoffice.approveUser as () => void}>
              Add KYC
            </Button>
            <Button onClick={backoffice.unRegisterUser as () => void}>
              Remove Wallet Address
            </Button>
          </CenteredFlexElement>
        </>
      );
      break;
    case "KYCApproved":
      content = (
        <>
          <Text size={TextSizes.EXTRA_SMALL}>
            ✅ You are KYC Approved! Clicking the button will remove you from
            the KYC List. Clicking the button will initiate a transaction from
            your wallet.
          </Text>
          <NewLine />
          <CenteredElement>
            <Button onClick={backoffice.disapproveUser as () => void}>
              Remove KYC
            </Button>
          </CenteredElement>
        </>
      );
      break;
    case "Loading":
      content = <SingleText>Updating the Registry...</SingleText>;
      break;
    case "Error":
      content = (
        <SingleText>
          Something went wrong! See the console got more information.
        </SingleText>
      );
      break;
    default:
      unreachable(backoffice);
  }

  return (
    <Card title="Actions performed by Fractal's servers" width="90%">
      <CardBodyContainer>
        <Text>
          This window shows you how Fractal updates the DID Registry. The user
          would not be asked to do these transactions but you can perform them
          for this demo.
        </Text>
        <Text />
        <CenteredElement>{content}</CenteredElement>
      </CardBodyContainer>
    </Card>
  );
};

export default MiniBackoffice;
