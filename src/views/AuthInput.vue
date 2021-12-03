<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="card border-0 shadow rounded-3 my-5">
            <b-tabs
              content-class="mt-3"
              fill
              align="center"
              active-nav-item-class="active"
            >
              <b-tab title="Anmelden" active><Login /></b-tab>
              <b-tab title="Registrieren"><SignUp /></b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login/Login.vue";
import SignUp from "@/components/SignUp/SignUp.vue";
export default {
  name: "AuthInput",
  components: {
    Login,
    SignUp,
  },
};
</script>

<style scoped></style>
