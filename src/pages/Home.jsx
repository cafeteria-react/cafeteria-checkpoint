import cafe1 from "../assets/cafe1.png"
import cafe3 from "../assets/cafe3.png"
import cafe4 from "../assets/cafe4.png"
import coxinha from "../assets/coxinha.png"



const Home = () => {

    const cafe = [
        { id: 1, titulo: "café expresso", preco: "R$ 2,00", imagem: cafe1 },
        { id: 2, titulo: "café gelado", preco: "R$ 10,00", imagem: cafe3 },
        { id: 3, titulo: "café com leite", preco: "R$ 4,00", imagem: cafe4 },
        { id: 4, titulo: "coxinha", preco: "R$ 5,00", imagem: coxinha },

    ]


    return (
        <main className="px-[5%] mt-10 mb-16 mb-grow">
            <h2 className="titulo text-3xl">PEDIDOS EM DESTAQUE</h2>
            <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
                {cafes.map((cafe) => (
                    <CafeCard
                        key={cafe.id}
                        titulo={cafe.titulo}
                        preco={cafe.preco}
                        imagem={cafe.imagem}
                    />
                ))}
            </section>


        </main>
    )
}

export default Home