<template>
    <div>
        <button @click="getAll()">GET ALL</button>
    
        <!-- {{ this.data }} -->
        {{ this.dados }}
    
    
        <div class="row">
            <div class="col-sm-16">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Semana </th>
                            <th>Reg Semana</th>
                        </tr>
                    </thead>
                    <tbody>
    
                        <tr v-for="item in dados" :key="item.id">
    
                            <td>{{ item.semana }}</td>
                            <td>{{ item.regSemana }}</td>
    
                        </tr>
                    </tbody>
    
                </table>
            </div>
        </div>
    
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            data: '',
            mes: '05',
            ano: '2023',
            dados: ''

        }
    },

    methods: {
        getAll() {
            axios.post('http://192.168.0.6:8000/api/omie/oportunidade/cliente-conquistado', {
                    mes: this.mes,
                    ano: this.ano,
                })
                .then((response) => {
                    this.dados = response.data;
                    console.log(this.dados)
                    console.log(response);
                })
                .catch((error) => {
                    console.error(error);
                });
        },



        mounted() {
            this.getAll()
        }

    }
}
</script>
