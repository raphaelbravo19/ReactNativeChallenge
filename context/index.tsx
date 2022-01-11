import React, {
  createContext,
  Dispatch,
  ReactNode,
  Reducer,
  useReducer,
} from "react";

interface IState {
  username: string | null;
}

const initialState: IState = {
  username: null,
};

type IAction = "SIGNIN";

type Action = {
  type: IAction;
  payload?: IState;
};

interface IContext {
  state: IState;
  dispatch: Dispatch<Action>;
}

export const Store = createContext({} as IContext);

const reducer = (state: IState, { type, payload }: Action) => {
  switch (type) {
    case "SIGNIN":
      return { ...state, ...payload };
    default:
      return state;
  }
};

interface StoreProps {
  children: ReactNode | ReactNode[];
}
export default function StoreProvider({ children }: StoreProps) {
  const [state, dispatch] = useReducer<Reducer<IState, Action>>(
    reducer,
    initialState
  );

  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}
