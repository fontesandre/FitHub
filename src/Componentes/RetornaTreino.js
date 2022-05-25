import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

async function buscarTreino() {
  const res = await fetch('http://localhost:3000/ConfiguraTreino');
  const dados = await res.json();
  return dados.treinos;
};

function RetornaTreino(props) {
  const [treinos, setTreinos] = useState([]);


  useEffect(() => {
    setTreinos(props.treinos);
  }, [props.treinos]);

  return (
    <div id='fundo' className='p-4 card'>
    <h5 align="center" className="card-title">Seus Treinos</h5>
    <div className='container'>
      <div className="row">
        <div className="col-sm">
          <h6 className="tabela">Sequencia</h6>
        </div>
        <div className="col-sm">
          <h6 className="tabela">Equipamento</h6>
        </div>
        <div className="col-sm">
          <h6 className="tabela">Exercício</h6>
        </div>
        <div className="col-sm">
          <h6 className="tabela">Série</h6>
        </div>
        <div className="col-sm">
          <h6 className="tabela">Repetição</h6>
        </div>
        <div className="col-sm">
          <h6 className="tabela">Carga</h6>
        </div>
      </div>
    </div>

        
      {                 
          treinos.map((treino, i) => {
              return (
                  <div className="container" onClick={() => {
                    props.setSequencia(treino.sequencia);
                    props.setEquipamento(treino.equipamento);
                    props.setExercicio(treino.exercicio);
                    props.setSerie(treino.serie)
                    props.setRepeticao(treino.repeticao)
                    props.setCarga(treino.carga)
                    props.setId(treino._id);
                    }}>
                          <div className="row">
                                  <div className="col-sm">
                                  <p key={i} className="item">{treino.sequencia}</p>
                                  </div>
                                  <div className="col-sm">
                                  <p key={i} className="item">{treino.equipamento}</p>
                                  </div>
                                  <div className="col-sm">
                                  <p key={i} className="item">{treino.exercicio}</p>
                                  </div>
                                  <div className="col-sm">
                                  <p key={i} className="item">{treino.serie}</p>
                                  </div>
                                  <div className="col-sm">
                                  <p key={i} className="item">{treino.repeticao}</p>
                                  </div>
                                  <div className="col-sm">
                                  <p key={i} className="item">{treino.carga}</p>
                                  </div>
                              </div>
                              </div>
                          )
                          })}
                      </ div>
  )
}
export { RetornaTreino, buscarTreino };