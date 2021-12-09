<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h3 class="card-title text-center mb-5 fw-light fs-3">Edit user</h3>
            <div>
              <b-alert
                v-for="error in errors"
                :key="error.value"
                v-model="error.show"
                variant="danger"
              >
                {{ error.value }}
              </b-alert>
            </div>
            <b-button class="mb-3" @click="cancelEdit"> Cancel </b-button>
            <form @submit.prevent="updateUser">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="register_username"
                  placeholder="Username"
                  v-model="user.username"
                  :disabled="disabled"
                />
                <label for="register_username">Username</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="register_email"
                  placeholder="E-Mail"
                  v-model="user.email"
                />
                <label for="register_email">E-Mail</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="register_firstName"
                  placeholder="First name"
                  v-model="user.firstName"
                />
                <label for="register_firstName">First name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="register_lastName"
                  placeholder="Last name"
                  v-model="user.lastName"
                />
                <label for="register_lastName">Last name</label>
              </div>
              <div class="d-grid">
                <button class="btn btn-primary" type="submit">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./EditUser.ts"></script>
