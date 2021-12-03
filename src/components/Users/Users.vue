<template>
  <div>
    <h3>Benutzer Verwaltung</h3>
    <div class="container">
      <div class="row">
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
                    title="Löschen"
                    variant="danger"
                    @click="deleteUser(data.value)"
                  >
                    <b-icon icon="trash" aria-label="Löschen"></b-icon>
                  </b-button>
                </b-button-group>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Users.ts"></script>
