/* eslint-disable no-unused-vars */
import axios from "axios";
import useSWR, { mutate } from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

const url = `${import.meta.env.VITE_API_URL}/users`;

export const useUser = (id) => {
  const fetchURL = id ? `${url}/${id}` : `${url}`;
  const { data, error, isLoading } = useSWR(fetchURL, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};

export const addUser = async (data) => {
  await axios
    .post(url, data)
    .then((response) => {
      mutate(url);
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const updateUser = async (id, data) => {
  await axios
    .put(`${url}/${id}`, data)
    .then((response) => {
      mutate(url);
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const deleteUser = async (id) => {
  await axios
    .delete(`${url}/${id}`)
    .then((response) => {
      mutate(url);
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
