<template >


     <v-card
    color="grey lighten-4"
    flat
    height="55px"
  >
    <v-app-bar app flat dense dark  >
        
      <v-app-bar-nav-icon @click="drawer=!drawer" ></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-app-bar-title >Student Portal</v-app-bar-title>

      <v-spacer></v-spacer>
 
    </v-app-bar>
 

<!-- Side Menu -->

 <v-navigation-drawer v-model="drawer" app >
     <v-layout column align-center>
         <v-flex class="mt-5">
             <v-responsive>
                 <v-avatar size=150 >
                <v-img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png">
                </v-img>
             </v-avatar>
             </v-responsive>
             
         </v-flex>

     </v-layout>
      <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
              <v-list-item-action>
                  <v-icon>{{link.icon}}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                  <v-list-item-title>
                      {{link.text}}
                  </v-list-item-title>
              </v-list-item-content>
          </v-list-item>
      </v-list>
  </v-navigation-drawer>


 </v-card>

 </template>

<script>


export default {
    components :{},
    data(){
        return{
           drawer: false, 
           links :[
           {icon:'home', text:'Home', route:'/'},
           {icon:'description', text:'Form', route:'/form'},
           {icon:'folder', text:'Dashboard', route:'/profile'},
          
           ],
        }
    }

}
</script>

