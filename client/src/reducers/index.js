import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { truckList, truckListHasErrored, truckListIsLoading } from './truckListReducers.js';
import { truckInfo, truckInfoHasErrored, truckInfoIsLoading } from './truckInfoReducers.js';
import { truckLoc, truckLocHasErrored, truckLocIsLoading } from './truckLocReducers.js';
import { mapCenter, mapMarkerSelected, mapDate } from './mapReducers.js';
import { truckSelected } from './truckSelectedReducers.js';
import { vendorSignupError, signupError, signupLoading, signupSuccess, setUsername, setUserID, loginError, loginSuccess, loginLoading, vendorLoginSuccess } from './signupReducers.js';
import { vendorIncomingOrder, vendorIncomingOrderHasErrored, vendorIncomingOrderIsLoading, foundOrders } from './vendorIncomingOrderReducers.js';
import { addedToCart, cartTotal } from './cartReducers';
import { submittedOrder, submitOrderError, submitOrderProcessing } from './checkoutReducers.js';

export default combineReducers({
  truckList,
  truckListHasErrored,
  truckListIsLoading,
  truckInfo,
  truckInfoHasErrored,
  truckInfoIsLoading,
  truckSelected,
  mapCenter,
  mapMarkerSelected,
  mapDate,
  truckLoc,
  truckLocHasErrored,
  truckLocIsLoading,
  signupSuccess,
  signupError,
  signupLoading,
  loginError,
  loginLoading,
  loginSuccess,
  vendorLoginSuccess,
  vendorSignupError,
  vendorIncomingOrder,
  vendorIncomingOrderHasErrored,
  vendorIncomingOrderIsLoading,
  foundOrders,
  addedToCart,
  cartTotal,
  submittedOrder,
  setUserID,
  setUsername,
  submitOrderError,
  submitOrderProcessing,
  router: routerReducer
});

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))
