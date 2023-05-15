
export type InitialState = {
  selectedId: number;
  message: string;
}

export const initialState: InitialState = {
  selectedId: 0,
  message: 'Hello',
};

export type Action = {
  type: string;
  contactId: number;
  message: string;
}

export function messengerReducer(state: InitialState, action: Action): InitialState {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
        message: '',
      };
    }
    case 'edited_message': {
      return {
        ...state,
        message: action.message,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

