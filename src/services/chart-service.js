import api from './api';


function obter(mesUser, anoUser) {
    const payload = {
      mes: mesUser,
      ano: anoUser
    };
  
    return new Promise((resolve, reject) => {
      return api.post(`/omie/oportunidade/cliente-conquistado`, payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

export default {
    obter
}