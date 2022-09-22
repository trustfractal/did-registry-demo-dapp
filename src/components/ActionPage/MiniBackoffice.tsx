import React from "react";
import styled from "styled-components";

import { Button, Card as OriginalCard, Text } from "../ui";
import Collapsible from "../ui/Collapsible";
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

const addKYC = async (
  addUserToRegistry: () => Promise<void>
): Promise<void> => {
  await addUserToRegistry();
};

const removeKYC = async (
  removeUserFromRegistry: () => Promise<void>
): Promise<void> => {
  await removeUserFromRegistry();
};

export const MiniBackoffice = ({ backoffice }: { backoffice: Backoffice }) => {
  let content;
  switch (backoffice.status) {
    case "Unconfigured":
      content = <SingleText>Please connect your wallet first.</SingleText>;
      break;
    case "UnregisteredUser":
      content = (
        <>
          <Text size={TextSizes.SMALL}>
            You are not in the Registry. Click the button to add yourself.
          </Text>
          <Collapsible fill={"white"}>
            <>
              Normally, you would need to onboard with a KYC level like{" "}
              <strong>Plus</strong>. Then, once your information is approved you
              would be added to Registry by Fractal. Clicking the{" "}
              <strong>Add ME to Registry</strong> button{" "}
              <strong>simulates</strong> that process.{" "}
            </>
          </Collapsible>
          <NewLine />
          <CenteredElement>
            <Button onClick={() => void addKYC(backoffice.addUserToRegistry)}>
              Add ME to Registry
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
          <Text size={TextSizes.SMALL}>
            You are KYC Approved! Clicking the button will remove you from the
            KYC List.
          </Text>
          <NewLine />
          <CenteredElement>
            <Button
              onClick={() => void removeKYC(backoffice.removeUserFromRegistry)}
            >
              Remove ME from Registry
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
        {content}
      </CardBodyContainer>
    </Card>
  );
};

export default MiniBackoffice;
