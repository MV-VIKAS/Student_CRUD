<template>
  <div>
    <v-container>
      <v-form ref="form" @submit.prevent="submitForm" valid lazy-validation>
        <v-text-field
          v-model="formData.firstName"
          label="first name"
          required
        ></v-text-field>

        <v-text-field
          v-model="formData.LastName"
          label="last name"
          required
          
        ></v-text-field>

        <v-text-field
          v-model.number.lazy="formData.regNum"
          label="registration number"
          required
          type="number"
        ></v-text-field>

        <v-text-field
          v-model="formData.doj"
          
          required
          type="date"
        ></v-text-field>

       <v-radio-group
      v-model="formData.gender"
      row 
    > Gender
      <v-radio
        label="male"
        value="male"
      ></v-radio>
      <v-radio
        label="female"
        value="female"
      ></v-radio>
    </v-radio-group>

        <v-text-field
        
          v-model.number="formData.mobile"
          label="mobile number"
          required
          type="number"
        ></v-text-field>

        <v-select label="class" v-model="formData.standard" :items="items"
        >
        </v-select>

        <v-text-field
          v-model="formData.dob"
          label="date of birth"
          required
          type="date"
        ></v-text-field>

        <v-text-field
          v-model="formData.city"
          label="city"
          required
        ></v-text-field>

        <v-text-field
          v-model="formData.state"
          label="state"
          required
        ></v-text-field>

        <v-text-field
          v-model="formData.area"
          label="area"
          required
        ></v-text-field>

        <v-text-field
          v-model="formData.Houseno"
          label="House Number"
          required
          ></v-text-field>


        <v-btn color="success" class="mr-4" @click="submitForm" v-show="create"> Create </v-btn>
        <v-btn color="success" class="mr-4" @click="update" v-show="updatebtn"> update</v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import Axios from "axios"
import router from "../router"
export default {
  name: "RegistrationForm",
  data() {
    return {
      formData: {
        firstName: "",
        LastName: "",
        regNum: "",
        doj: "",
        gender: "",
        mobile: "",
        standard: "",
        image: "",
        dob: "",
        city: "",
        state: "",
        area: "",
        Houseno: "",
      },
       items: [1, 2, 3, 4,5,6,7,8,9,10,11,12],
       create: true,
       updatebtn :false
    };
  },
  methods: {
      async submitForm(){
          try {
              await Axios.post("http://localhost:5000/Students",this.formData)
               router.push("/")
          } catch (error) {
              console.log(error)
          }
      }
      ,
    reset() {
     this.$refs.form.reset()
    },
    update(){
         Axios.put(` http://localhost:5000/Students/${this.$route.params.id}`, this.formData )
              router.push("/")
    }
  },
  async mounted(){
      let {data} = await Axios.get(` http://localhost:5000/Students/${this.$route.params.id}`)
      this.formData=data;
      this.create=false;
      this.updatebtn = true;
  },
   
};
</script>

<style scoped></style>
