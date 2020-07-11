export const NEW_FORM = 'NEW_FORM';

const INITIAL_LISTATE = [];

const INITIAL_FORMSTATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  home_type: '',
  resume: '',
  role: '',
  role_description: '',
};

// Da aula 17.2
// A ação, por convenção, deve ser um objeto e possuir a key type. É essa key que define como o reducer vai manipular o estado.
export const listReducer = (state = INITIAL_LISTATE, action) => {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value];
    default:
      return state;
  }
}

// Do peer programming do bloco 17.3
export const formReducer = (state = INITIAL_FORMSTATE, action) => {
  switch (action.type) {
    case NEW_FORM:
      return {
        name: action.name,
        email: action.email,
        cpf: action.cpf,
        address: action.address,
        city: action.city,
        state: action.state,
        home_type: action.home_type,
        resume: action.resume,
        role: action.role,
        role_description: action.description,
      };
    default:
      return state;
  }
};
