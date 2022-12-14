/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface FractalRegistryInterface extends utils.Interface {
  functions: {
    "addDelegate(address)": FunctionFragment;
    "addUserAddress(address,bytes32)": FunctionFragment;
    "addUserToList(bytes32,string)": FunctionFragment;
    "delegates(address)": FunctionFragment;
    "getFractalId(address)": FunctionFragment;
    "isUserInList(bytes32,string)": FunctionFragment;
    "removeDelegate(address)": FunctionFragment;
    "removeUserAddress(address)": FunctionFragment;
    "removeUserFromList(bytes32,string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addDelegate"
      | "addUserAddress"
      | "addUserToList"
      | "delegates"
      | "getFractalId"
      | "isUserInList"
      | "removeDelegate"
      | "removeUserAddress"
      | "removeUserFromList"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addDelegate",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addUserAddress",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "addUserToList",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "delegates",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getFractalId",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isUserInList",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeDelegate",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeUserAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeUserFromList",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addUserAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addUserToList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFractalId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isUserInList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeUserAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeUserFromList",
    data: BytesLike
  ): Result;

  events: {};
}

export interface FractalRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FractalRegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addDelegate(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addUserAddress(
      addr: PromiseOrValue<string>,
      fractalId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addUserToList(
      userId: PromiseOrValue<BytesLike>,
      listId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    delegates(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getFractalId(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isUserInList(
      userId: PromiseOrValue<BytesLike>,
      listId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    removeDelegate(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeUserAddress(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeUserFromList(
      userId: PromiseOrValue<BytesLike>,
      listId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addDelegate(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addUserAddress(
    addr: PromiseOrValue<string>,
    fractalId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addUserToList(
    userId: PromiseOrValue<BytesLike>,
    listId: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  delegates(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getFractalId(
    addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  isUserInList(
    userId: PromiseOrValue<BytesLike>,
    listId: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  removeDelegate(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeUserAddress(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeUserFromList(
    userId: PromiseOrValue<BytesLike>,
    listId: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addDelegate(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addUserAddress(
      addr: PromiseOrValue<string>,
      fractalId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    addUserToList(
      userId: PromiseOrValue<BytesLike>,
      listId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    delegates(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getFractalId(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    isUserInList(
      userId: PromiseOrValue<BytesLike>,
      listId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeDelegate(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeUserAddress(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeUserFromList(
      userId: PromiseOrValue<BytesLike>,
      listId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addDelegate(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addUserAddress(
      addr: PromiseOrValue<string>,
      fractalId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addUserToList(
      userId: PromiseOrValue<BytesLike>,
      listId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    delegates(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFractalId(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isUserInList(
      userId: PromiseOrValue<BytesLike>,
      listId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeDelegate(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeUserAddress(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeUserFromList(
      userId: PromiseOrValue<BytesLike>,
      listId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addDelegate(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addUserAddress(
      addr: PromiseOrValue<string>,
      fractalId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addUserToList(
      userId: PromiseOrValue<BytesLike>,
      listId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    delegates(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFractalId(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isUserInList(
      userId: PromiseOrValue<BytesLike>,
      listId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeDelegate(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeUserAddress(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeUserFromList(
      userId: PromiseOrValue<BytesLike>,
      listId: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
