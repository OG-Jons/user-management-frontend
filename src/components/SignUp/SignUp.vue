<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h3 class="card-title text-center mb-5 fw-light fs-3">Sign Up</h3>
            <div>
              <b-alert
                v-for="error in errors"
                :key="error.value"
                v-model="error.show"
                variant="danger"
              >
                {{ error.value }}
              </b-alert>
              <b-alert v-model="arePasswordsSame" variant="danger">
                Your passwords don't match!
              </b-alert>
            </div>
            <form @submit.prevent="signUp">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="register_username"
                  placeholder="Username"
                  v-model="newUser.username"
                />
                <label for="register_username">Username</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="register_email"
                  placeholder="E-Mail"
                  v-model="newUser.email"
                />
                <label for="register_email">E-Mail</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="register_firstName"
                  placeholder="First name"
                  v-model="newUser.firstName"
                />
                <label for="register_password">First Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="register_lastName"
                  placeholder="Last Name"
                  v-model="newUser.lastName"
                />
                <label for="register_lastName">Last Name</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="register_password"
                  placeholder="Password"
                  v-model="newUser.password"
                />
                <label for="register_password">Password</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="register_confirm_password"
                  placeholder="Confirm Password"
                  v-model="confirmPassword"
                />
                <label for="register_confirm_password">
                  Confirm Password
                </label>
              </div>
              <div class="d-grid">
                <button
                  class="btn btn-primary btn-login text-uppercase fw-bold"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./SignUp.ts"></script>

<style scoped></style>
