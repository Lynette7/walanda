export const addexpense = (expense, navigate) => {
  return async function (dispatch) {
    dispatch({
      type: "expense/loading"
    })
    const response = await fetch("https://Walanda-server-production.up.railway.app/handymen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        expense
      )
    })

    const data = await response.json()

    if (response.ok) {
      dispatch({
        type: "add/expense",
        payload: data
      })
      localStorage.setItem("expense", data.jwt)
      navigate('/expense/alert');
    } else {
      dispatch({
        type: "error/expense",
        payload: data
      })
    }
  }
}

export const addlogin = (login, navigate) => {
  return async function (dispatch) {
    dispatch({
      type: "expense/loading",
    });
    const response = await fetch("https://Walanda-server-production.up.railway.app/expense/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });

    const data = await response.json();
    console.log(data)

    if (response.ok) {
      dispatch({
        type: "add/login",
        payload: data.expense,
      });
      localStorage.setItem("expense", data.token);
      localStorage.setItem("profileId", data.expense.id)
      navigate("/jobs");
    } else {
      dispatch({
        type: "error/expense",
        payload: data,
      });
    }
  };
};




const initialState = {
  status: "idle",
  errors: [],
  expense: {}
}
export default function expenseReducer(state = initialState, action) {

  switch (action.type) {
    case "add/expense": {
      return {
        ...state,
        expense: action.payload,
        errors: [],
        status: "idle"
      }
    }
    case "expense/loading": {
      return {
        ...state,
        status: "loading",
      }
    }
    case "add/login": {
      return {
        ...state,
        expense: action.payload,
        errors: [],
        status: "idle"
      };
    }

    case "error/expense": {
      return {
        ...state,
        errors: action.payload.errors,
        status: "idle"
      }

    }
    default:
      return state;
  }

}
