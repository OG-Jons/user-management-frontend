<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h3 class="card-title text-center mb-5 fw-light fs-3">Anmelden</h3>
            <b-alert
              v-model="showErrorAlert.show"
              variant="danger"
              style="white-space: pre-wrap"
            >
              {{ showErrorAlert.value }}
            </b-alert>
            <form @submit.prevent="signIn">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Benutzername"
                  v-model="username"
                />
                <label for="username">Benutzername</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Passwort"
                  v-model="password"
                />
                <label for="password">Password</label>
              </div>
              <div class="d-grid">
                <button
                  class="btn btn-primary btn-login text-uppercase fw-bold"
                  type="submit"
                >
                  Anmelden
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Login.ts"></script>
