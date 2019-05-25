import axios from "axios";
import * as helpers from "./serviceHelpers";

const addSubscriber = payload => {
  const config = {
    method: "POST",
    url: helpers.API_HOST_PREFIX + "/api/subscriptions",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

export { addSubscriber };
