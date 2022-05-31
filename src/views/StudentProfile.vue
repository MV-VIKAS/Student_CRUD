<template>
  <v-container lg6 md4>
    <v-card>
    <v-flex class="mt-5">
      <v-responsive class="pa-5">
        <v-avatar size="150">
          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNo-cKIvk2Kn5Fr4oOimNLxMh1dn3f0lgf0g&usqp=CAU"
          >
          </v-img>
        </v-avatar>

        <h1>Name : {{ student.firstName }} {{ student.LastName }}</h1>
        <h2>Registration Number : {{student.regNum}}</h2>
        <h2>Date of birth : {{student.doj}}</h2>
        <h2>Mobile Number : {{student.mobile}}</h2>
        <h2>Address : {{student.Houseno}}, {{student.area}}, {{student.city}}, {{student.state}}</h2>

      </v-responsive >
      
    </v-flex>

    <v-card-title> </v-card-title>
  </v-card>
  </v-container>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      student: [{}],
    };
  },
  created() {
    this.studentProfile();
  },
  methods: {
    async studentProfile() {
      let data = await Axios.get(
        `http://localhost:5000/Students/${this.$route.params.id}`
      );
      this.student = data.data;
    },
  },
};
</script>

<style scoped></style>
