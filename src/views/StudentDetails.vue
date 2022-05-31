<template>
  <div>
    <v-container>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-container>

    <v-container>
      <router-link to="/form" style="text-decoration: none; color: inherit">
        <v-btn class="mr-5">
          <v-icon left> add </v-icon>
          Add new
        </v-btn>
      </router-link>
    </v-container>

    <v-data-table :headers="headers" :items="studentData" :search="search">
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.firstName }}</td>
          <td>{{ row.item.LastName }}</td>
          <td>{{ row.item.regNum }}</td>
          <td>{{ row.item.gender }}</td>
          <td>{{ row.item.mobile }}</td>
          <td>{{ row.item.standard }}</td>
          <td>{{ row.item.city }}</td>
          <td>{{ row.item.state }}</td>
          <td>{{ row.item.area }}</td>
          <td>{{ row.item.Houseno }}</td>
          <td>
            <v-btn small class="success" @click="editRoute(row.item.id)"
              >edit</v-btn
            >
          </td>
          <td>
            <v-btn small class="success" @click="editPath(row.item.id)"
              >Show</v-btn
            >
          </td>
          <td><v-icon></v-icon></td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import Axios from "axios";
import router from "../router";
export default {
  data() {
    return {
      search: "",
      studentData: [],
      headers: [    
        { text: "firstName", align: "start", filterable: false, value: "firstName" },
        {
          text: "LastName",
          value: "LastName",
        },
        {
          text: "RegNum",
          value: "regNum",
        },
        {
          text: "Gender",
          value: "gender",
        },
        {
          text: "Mobile",
          value: "mobile",
        },
        {
          text: "Standard",
          value: "standard",
        },
        {
          text: "City",
          value: "city",
        },
        {
          text: "State",
          value: "state",
        },
        {
          text: "Area",
          value: "area",
        },
        {
          text: "HouseNo.",
          value: "Houseno",
        },
      ],
    };
  },
  methods: {
    async getStudentData() {
      let a = await Axios.get("http://localhost:5000/Students");
      this.studentData = a.data;
      console.log(this.studentData);
    },
    editRoute(id) {
      //redirect to edit page based on that id
      router.push(`/edit/${id}`);
    },
    editPath(id) {
      //redirect to profile page based on that id
      router.push(`/profile/${id}`);
    },
  },
  created() {
    this.getStudentData();
  },
};
</script>

<style scoped></style>
