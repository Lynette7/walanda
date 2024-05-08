import { combineReducers } from "redux";
// import customerReducer from "./Components/customer/customerSlice";
import profilesReducer from "./Components/expense/expenseContainers/profilesSlice";
import expenseReducer from "./Components/expense/LoginExpSlice";
import expenseProfileReducer from "./Components/expenseSplit/ExpenseSpliitSlice";
// import jobReducer from "./Components/job/jobslice";
// import reviewReducer from "./Components/review/ReviewSlice";

export default combineReducers({
  // customers: customerReducer,
  expense: expenseReducer,
  // reviews: reviewReducer,
  // jobs: jobReducer,
  profiles: profilesReducer,
  expenseProfile: expenseProfileReducer,
});
