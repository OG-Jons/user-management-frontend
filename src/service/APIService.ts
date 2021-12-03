import axios, { AxiosResponse } from "axios";
import { User } from "@/model/user/user.model";
import { UserLogin } from "@/model/user/userLogin.model";
import Vue from "vue";
import { UserSignUp } from "@/model/user/userSignUp.model";

const BASE_URL = "http://localhost:3000";

function getConfig() {
  return {
    headers: { Authorization: `Bearer ${Vue.$cookies.get("token")}` },
  };
}

export default {
  async signUp(user: UserSignUp): Promise<AxiosResponse> {
    return await axios.post(`${BASE_URL}/auth/signup`, user);
  },
  async signIn(user: UserLogin): Promise<AxiosResponse> {
    return await axios.post(`${BASE_URL}/auth/sign-in`, user);
  },

  async getUsers(): Promise<User[]> {
    return await axios
      .get(`${BASE_URL}/user`, getConfig())
      .then((res) => res.data);
  },

  async getOneUser(id: number): Promise<User> {
    return await axios
      .get(`${BASE_URL}/user/${id}`, getConfig())
      .then((res) => res.data);
  },

  async updateUser(id: number, user: User): Promise<AxiosResponse> {
    return await axios.patch(`${BASE_URL}/user/${id}`, user, getConfig());
  },

  async deleteUser(id: number): Promise<void> {
    await axios.delete(`${BASE_URL}/user/${id}`, getConfig());
  },
};
