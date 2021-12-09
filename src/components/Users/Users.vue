<template>
  <div>
    <h3>User management</h3>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <b-button variant="primary" v-b-modal.new-user-modal>
            New User
          </b-button>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="card border-0 shadow rounded-3 my-5">
            <b-table striped hover :items="users" :fields="fields" responsive>
              <template #cell(username)="data">
                {{ data.value }}
              </template>
              <template #cell(firstName)="data">
                {{ data.value }}
              </template>
              <template #cell(lastName)="data">
                {{ data.value }}
              </template>
              <template #cell(email)="data">
                {{ data.value }}
              </template>
              <template #cell(id)="data">
                <b-button-group>
                  <b-button
                    title="Edit"
                    variant="primary"
                    @click="goToEdit(data.value)"
                  >
                    <b-icon icon="pen" aria-label="Edit"></b-icon>
                  </b-button>
                  <b-button
                    title="Delete"
                    variant="danger"
                    @click="setUserToBeDeleted(data.value)"
                    v-b-modal.delete-user-confirmation
                  >
                    <b-icon icon="trash" aria-label="Delete"></b-icon>
                  </b-button>
                </b-button-group>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      ref="delete-user-confirmation"
      id="delete-user-confirmation"
      title="Delete user"
      @ok="deleteUser"
    >
      <h6>Are you sure you want to delete this user?</h6>
    </b-modal>
    <b-modal
      ref="new-user-modal"
      id="new-user-modal"
      title="Create new user"
      hide-footer
    >
      <NewUser @created="updateUserTable" />
    </b-modal>
  </div>
</template>
<script lang="ts" src="./Users.ts"></script>
