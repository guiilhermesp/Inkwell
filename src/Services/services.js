import { PATH } from "../path";
import axios from "axios";

const services = {
  search: async (q, limit = 12) => {
    return axios
      .get(PATH.SEARCH, { params: { q, limit } })
      .then((data) => data)
      .catch((err) => console.log(err));
  },
  subject: async (subjectType) => {
    return axios
      .get(PATH.SUBJECT + subjectType + ".json")
      .then((data) => data)
      .catch((err) => console.log(err));
  },
  specificBook: async (bibkeys) => {
    return axios
      .get(PATH.BOOKS, { params: { bibkeys } })
      .then((data) => data)
      .catch((err) => console.log(err));
  },
};

export default services;
