

export function listarAlunos(listaDeAlunos){
    for(let i = 0; i < listaDeAlunos.length; ++i){
 
        console.log("-------------------")
        console.log(`nome: ${listaDeAlunos[i].nome}`)
        console.log(`numero de chamada: ${listaDeAlunos[i].numeroChamada}`)

    }
}

export function buscarAlunoPeloNumeroDaChamada(listaDeAlunos, numeroChamada){
    console.log("-------------------")
    for(let i = 0; i < listaDeAlunos.length; i++){
        if(numeroChamada === listaDeAlunos[i].numeroChamada){
            console.log(` Aluno Encontrado:`)
            console.log(listaDeAlunos[i])
            return
        }
    }
}

export function listarAlunosAprovados(listaDeAlunos){
    console.log("---Alunos aprovados---")

    listaDeAlunos.forEach(aluno => {
        if(alunoEstaAprovado(aluno)) {
            console.log(`${aluno.nome} esta aprovado`);
        }
    })
}

export function listarAlunosReprovados(listaDeAlunos){
    console.log("---Alunos reprovados---")

    listaDeAlunos.forEach(aluno => {
        if(!alunoEstaAprovado(aluno)) {
            console.log(`${aluno.nome} esta reprovado`);
        }
    })
}

export function listarAlunoPorMesMatricula(listaDeAlunos, mes, ano){
    console.log("---Alunos cadastrados em Fevereiro de 2024---")
    
    for(let i = 0; i < listaDeAlunos.length; i++){
        let AnoMatriculaAluno = listaDeAlunos[i].matriculadoEm.split("/")

        if(AnoMatriculaAluno[0] == ano && AnoMatriculaAluno[1] == mes){
            console.log(`${listaDeAlunos[i].nome}`)        
        }
    }
}


function alunoEstaAprovado(aluno) {
    const materiasAprovadas = aluno.materias.map(materia => alunoAprovadoNaMateria(materia))
    if(materiasAprovadas.some(aprovadoNaMateria => aprovadoNaMateria == false)) {
        return false
    }
    return true
}

function alunoAprovadoNaMateria(materia) {
    if(materia.nota >= 6 && materia.presenca >= 75) {
        return true
    } 
    return false
}
