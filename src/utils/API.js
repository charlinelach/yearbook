import axios from "axios";

const API = {
  getEmployee: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};

export default API;

// import axios from "axios";

// export default {
//   getEmployee: function() {
//     return axios.get("https://randomuser.me/api/?results=200&nat=us");
//   }
// };