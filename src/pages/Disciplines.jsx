import React from 'react'
import Header from '../components/Header'

const Disciplines = () => {
  const disciplinas = [
    {
      nome: 'Front-end',
      professor: 'PROF. MARCO SILVA',
      status: 'Em curso',
      statusAtivo: true,
      tipoPorcentagem: 'Progresso',
      porcentagem: 75
    },
    {
      nome: 'UX Design',
      professor: 'DRA. ANA LÚCIA',
      status: 'Próximo semestre',
      statusAtivo: false,
      tipoPorcentagem: 'Disponibilidade',
      porcentagem: 0
    }
  ]

  return (
    <div className="content">
      <Header />

      <div className="content__container">
        <section className="disciplines">
          <h2 className="disciplines__title">Minhas Disciplinas</h2>

          <div className="disciplines__grid">
            {disciplinas.map((disciplina, index) => (
              <div className="discipline-card" key={index}>
                <div className="discipline-card__header">
                  <div>
                    <h3 className="discipline-card__title">
                      {disciplina.nome}
                    </h3>

                    <p className="discipline-card__teacher">
                      {disciplina.professor}
                    </p>
                  </div>

                  <span
                    className={
                      disciplina.statusAtivo
                        ? 'discipline-card__badge discipline-card__badge--active'
                        : 'discipline-card__badge'
                    }
                  >
                    {disciplina.status}
                  </span>
                </div>

                <div className="discipline-card__info">
                  <span>{disciplina.tipoPorcentagem}</span>
                  <strong>{disciplina.porcentagem}%</strong>
                </div>

                <div className="discipline-card__progress">
                  <div style={{ width: `${disciplina.porcentagem}%` }}></div>
                </div>

                <button className="discipline-card__button">
                  Acessar Disciplina
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Disciplines