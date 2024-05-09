export function fetchExpense(profileId, token) {
  return async function (dispatch) {
    dispatch({ type: "expense/loading" });
    const response = await fetch(
      `https://walanda-server-production.up.railway.app/handymen/${profileId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      dispatch({
        type: "expense/loaded",
        payload: data,
      });
    } else {
      dispatch({
        type: "expense/error",
        payload: data.errors,
      });
    }
  };
}

export function updateImage(profileId, token, image, setTrigger) {
  return async function (dispatch) {
    dispatch({ type: "expense/loading" });
    const response = await fetch(
      `https://walanda-server-production.up.railway.app/handymen/${profileId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(image),
      }
    );

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "expenseImage/update", payload: data });
      setTrigger(false);
    } else {
      dispatch({ type: "expense/error", payload: data.errors });
    }
  };
}
export function updateUserName(profileId, token, username, setTriggerName) {
  return async function (dispatch) {
    dispatch({ type: "expense/loading" });
    const response = await fetch(
      `https://walanda-server-production.up.railway.app/handymen/${profileId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(username),
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log(data);
      dispatch({ type: "expenseUsername/update", payload: data });
      setTriggerName(false);
    } else {
      dispatch({ type: "expense/error", payload: data.errors });
    }
  };
}
export function updateLocation(profileId, token, location, setTriggerLocation) {
  return async function (dispatch) {
    const response = await fetch(
      `https://walanda-server-production.up.railway.app/handymen/${profileId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(location),
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log(data);
      dispatch({ type: "expenseLocation/update", payload: data });
      setTriggerLocation(false);
    } else {
      dispatch({ type: "expense/error", payload: data.errors });
    }
  };
}
export function updateSpeciality(
  profileId,
  token,
  speciality,
  setTriggerSpeciality
) {
  return async function (dispatch) {
    const response = await fetch(
      `https://walanda-server-production.up.railway.app/handymen/${profileId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(speciality),
      }
    );

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "expenseSpeciality/update", payload: data });
      setTriggerSpeciality(false);
    } else {
      dispatch({ type: "expense/error", payload: data.errors });
    }
  };
}

export function updateRating(profileId, token, rating, setTriggerRating) {
  return async function (dispatch) {
    const response = await fetch(
      `https://walanda-server-production.up.railway.app/handymen/${profileId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(rating),
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log(data);
      dispatch({ type: "expenseRating/update", payload: data });
      setTriggerRating(false);
    } else {
      dispatch({ type: "expense/error", payload: data.errors });
    }
  };
}

export function updateDescription(
  profileId,
  token,
  description,
  setTriggerDescription
) {
  return async function (dispatch) {
    const response = await fetch(
      `https://walanda-server-production.up.railway.app/handymen/${profileId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(description),
      }
    );

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "expenseDescription/update", payload: data });
      setTriggerDescription(false);
    } else {
      dispatch({ type: "expense/error", payload: data.errors });
    }
  };
}

const initialState = {
  expense: {},
  errors: [],
  status: "idle",
};

export default function expenseProfileReducer(state = initialState, action) {
  switch (action.type) {
    case "expense/loading": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "expense/loaded":
      return {
        ...state,
        expense: action.payload,
        status: "idle",
      };

    case "expenseImage/update":
      return {
        ...state,
        expense: { ...state.expense, image: action.payload.image },
        status: "loading",
      };

    case "expenseUsername/update":
      return {
        ...state,
        expense: { ...state.expense, username: action.payload.username },
        status: "loading",
        errors: [],
      };

    case "expenseLocation/update":
      return {
        ...state,
        expense: { ...state.expense, location: action.payload.location },
      };

    case "expenseSpeciality/update":
      return {
        ...state,
        expense: { ...state.expense, speciality: action.payload.speciality },
      };

    case "expenseDescription/update":
      return {
        ...state,
        expense: {
          ...state.expense,
          description: action.payload.description,
        },
      };

    case "expenseRating/update":
      return {
        ...state,
        expense: { ...state.expense, rating: action.payload.rating },
        status: "idle",
      };

    case "expense/error":
      return {
        ...state,
        errors: action.payload,
        status: "idle",
      };

    default:
      return state;
  }
}
