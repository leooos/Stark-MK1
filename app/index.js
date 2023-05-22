function minhaFuncao() {
    console.log('Função executada!'+i);
  }
  let i = 0
  function agendarTarefa() {
    const agora = new Date();
    const proximoHorario = new Date(agora.getTime() + 3 * 60 * 60 * 1000);
//    const proximoHorario = new Date(agora.getTime() + 1000);
    const tempoAteProximoHorario = proximoHorario - agora;
    
    if(i<8){
        setTimeout(() => {
            minhaFuncao();
            i++;
            agendarTarefa();
          }, tempoAteProximoHorario);
    } else{
        console.log("final");
    }
  }

//agendarTarefa();