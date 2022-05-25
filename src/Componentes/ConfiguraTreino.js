import { useState, useEffect} from 'react';
import '../App';
import 'bootstrap/dist/css/bootstrap.css';
import { buscarTreino, RetornaTreino } from './RetornaTreino';

function ConfiguraTreino() {

/*
 "sequencia" : "A" ,
  "equipamento" : "-" ,
  "exercicio" : "Agachamento livre (solo)",
  "serie" : "3" ,
  "repeticão ": "10-12" ,
  "carga" : "-"            

*/



  const [treinos, setTreinos] = useState([]);
  const [_id, setId] = useState('');
  const [sequencia, setSequencia] = useState('');
  const [equipamento, setEquipamento] = useState('');
  const [exercicio, setExercicio] = useState('');
  const [serie, setSerie] = useState('');
  const [repeticao, setRepeticao] = useState('');
  const [carga, setCarga] = useState('');
 
  useEffect(() => {
    async function definirTreinos(){
        let treinos = await buscarTreino();
        setTreinos(treinos);
    }
    definirTreinos();
}, []);



  const inserirTreino = async () => {
    const res = await fetch(
      'http://localhost:3000/ConfiguraTreino',
      {
        method: 'POST',
        body: JSON.stringify({
          id: _id,
          sequencia: sequencia,
          equipamento: equipamento,
          exercicio: exercicio,
          serie: serie,
          repeticao: repeticao,
          carga:carga
        }),
          
          
        headers: {'Content-Type': 'application/json'}
      }
    );

    const dados = await res.json();
    

    if(res.status === 201){
      let treinos = await buscarTreino();
      setTreinos(treinos);
    }


    if (res.status === 400) {
      alert(dados.msg);
    } else {
      alert(dados.msg);
    }
  };


  //Delete
  const deletarTreino = async () => {
    const res = await fetch(
      `http://localhost:3000/ConfiguraTreino/${_id}`,
      {
        method: 'DELETE',         
      }
    );

    const dados = await res.json();

    if(res.status === 200){
      let treinos = await buscarTreino();
      setTreinos(treinos);
    }


    if (res.status === 400) {
      alert(dados.msg);
    } else {
      alert(dados.msg);
    }

    };

  	//Editar
	const editaTreino = async () => {
		const res = await fetch(
      `http://localhost:3000/ConfiguraTreino/${_id}`,
			{
				method: 'PUT',
				body: JSON.stringify({
          sequencia: sequencia,
          equipamento: equipamento,
          exercicio: exercicio,
          serie: serie,
          repeticao: repeticao,
          carga:carga
        }),

				headers: { 'Content-Type': 'application/json' }
			}
		);

    const dados = await res.json();

		if(res.status === 200){
      let treinos = await buscarTreino();
     
      setTreinos(treinos);
    }


    if (res.status === 400) {
      alert(dados.msg);
    } else {
      alert(dados.msg);
    }
  
  };

      

  return (
    <div className='container'>
       <div className='row'>
        <div className='mt-4 d-flex justify-content-center'>
          <div className='p-4 card'>
            <h5 className="card-title" align="Center">Seu Treino</h5>
            <div className='card-body'>

              <div className='mb-2'>
                <label>Sequencia</label>
                <input className='form-control' value={sequencia} onChange={(e) => setSequencia(e.target.value)}></input>
              </div>

              <div className='mb-2'>
                <label>Nº Equipamento</label>
                <input className='form-control' type='number' value={equipamento} onChange={(e) => setEquipamento(e.target.value)}></input>
              </div>

              <div className='mb-2'>
                <label>Exercício</label>
                <input className='form-control' value={exercicio} onChange={(e) => setExercicio(e.target.value)}></input>
              </div>

              <div className='mb-2'>
                <label>Série</label>
                <input className='form-control'  value={serie} onChange={(e) => setSerie(e.target.value)}></input>
              </div>

              <div className='mb-2'>
                <label>Repetição</label>
                <input className='form-control' type='number' value={repeticao} onChange={(e) => setRepeticao(e.target.value)}></input>
              </div>
              
              <div className='mb-2'>
                <label>Carga</label>
                <input className='form-control' type='number' value={carga} onChange={(e) => setCarga(e.target.value)}></input>
              </div>
            </div>

            <div className='p-4 card'>
            <button className='btn btn-primary' onClick={inserirTreino} >Coisa Nova</button>  <br /> 
            <button className='btn btn-primary' onClick={editaTreino} >Mudei</button>  <br /> 
            <button className='btn btn-primary' onClick={deletarTreino} >Esquece</button>
            </div>
          </div>
           <RetornaTreino setTreinos={setTreinos} treinos={treinos} setSequencia={setSequencia} setEquipamento={setEquipamento} setExercicio={setExercicio} setSerie={setSerie} setRepeticao={setRepeticao} setCarga={setCarga} setId={setId}></RetornaTreino>
        </div>
      </div>
    </div>
  );
}
export default  ConfiguraTreino;