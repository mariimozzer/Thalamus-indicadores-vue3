<template>
  
  <Line :data="data" :options="options" />
  <br><br><br>
  <Bar :data="data" :options="options" />
  <br><br><br>
  <Radar :data="data" :options="options" />
  <br><br><br>
  
  <router-view/>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  Title,
  Tooltip,
  BarElement,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { Bar } from 'vue-chartjs'
import { Radar } from 'vue-chartjs'
import axios from 'axios'




ChartJS.register(
  CategoryScale,
  RadialLinearScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)
export default {
 
  components: {
      Line,
      Bar,
      Radar,




  },
  data() {
      // return {
      //   data: {
      //     labels: ['January', 'February', 'March','April','May','June', 'July','August','September','October','November','December'],
      //     datasets: [{
      //       label: 'Legenda aqui',
      //       data: [100, 0, 12] 

      //     }]

      //   },
      //   options: {
      //     responsive: true
      //   }
      // }
      return {

          data: {
              labels: ['Catraca','SGP','Jira'],
              datasets: [{
                      label: 'Projeto One',
                      backgroundColor: '',
                      data: [9000, 300, 1000, 20000, 4000, 8000, 15000]
                  },
                  // {
                  //     label: 'Projeto Two',
                  //     backgroundColor: '#42b983',
                  //     data: [5000, 2000, 5000, 14000, 3000, 8000, 15000]
                  // },
                  // {
                  //     label: 'Projeto Three',
                  //     backgroundColor: 'red',
                  //     data: [20, 1, 100, 85, 90, 60, 0]
                  // },
              ]
          },

          options: {
              responsive: true,
          }
      }
  },
  methods: {
      getData() {
          axios.get('http://localhost:3000/data')
              .then(resposta => console.log(resposta.data))
      }
  },



  mounted() {
      this.getData()
  }



}
</script>

