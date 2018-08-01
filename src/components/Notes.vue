<template>
<div class="hello">
<div class="holder">
<form @submit.prevent='addNotes'>
<input type="text" placeholder="Enter your To Do List" v-model="note" v-validate="'min:5'" name="note">
{{note}}
<transition name="alert-in" enter-active-class="animated flipInx" leave-active-class="animated flipOutx">
<p class="alert" v-if="errors.has('note')">{{ errors.first('note') }}</p>
</transition>
</form>
<ul>
  <transition-group name="alert-in" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
  <li v-for="(data, index) in notes" :key="index">{{data.notes}}
    <i class="fas fa-trash-alt" v-on:click="remove(index)"></i>
  </li>
</transition-group>
</ul>
  <p> These are your's To Do List </p>
</div>
</div>
</template>

<script>
export default {
  name: 'Notes',
  data () {
    return{
      note:'',
      notes: [
        {'notes':'Product Launch'},
        {'notes':'Meeting with Business Partners'}
    ],

    }
  },
  methods : {
    addNotes(){
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.notes.push({notes: this.note});
          this.note='';
        }

      })

    },
    remove(id){
      this.notes.splice(id, 1);
  }

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://use.fontawesome.com/releases/v5.2.0/css/all.css";
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 25px;
  font-size: 1.1em;
  font-weight: bold;
  background-color: #E0EDF4;
  border-left: 5px solid #40407a;
  margin-bottom: 2px;
  color: #3E5252;
}

p {
  text-align:center;
  padding: 30px 0;
  color: black;
  font-weight: bolder;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
   width: calc(100% - 40px);
   border: 0;
   padding: 20px;
   font-size: 1.3em;
   background-color: #323333;
   color: #687F7F;
  }

  .alert {
   background: #fdf2ce;
   font-weight: bold;
   display: inline-block;
   padding: 5px;
   margin-top: -20px;
 }

 /* CSS Animation */
 .alert-in-enter-active {
  animation: bounce-in .5s;
}
.alert-in-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
i{
  cursor:pointer;
}
</style>
