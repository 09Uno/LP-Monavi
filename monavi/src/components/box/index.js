import "./index.css"



export default function Box({ tituloItem1, descricaoItem1, tituloItem2, descricaoItem2 }) {

    return (


        <div className="Box2">


            <div className="conteiner" >
                <span className="tituloItem">{tituloItem1}</span>

                <div className="indexBox">

                </div>

                <p className="descricaoItem">{descricaoItem1}</p>
            </div>


            <div className="conteiner" >
                <span className="tituloItem">{tituloItem2}</span>

                <div className="indexBox">
                    
                </div>

                <p className="descricaoItem">{descricaoItem2}</p>
            </div>

        </div>
    )

}


