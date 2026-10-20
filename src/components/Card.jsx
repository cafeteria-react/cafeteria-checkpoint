


const Card = ({ titulo, preco, imagem }) => {
    return (
        <div className="bg-black rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover: border-4 hover:border-[#46220f]">


            <img src={imagem} alt={titulo} className="w-full h-[260px] object-cover" />
            <article className="p-4 text-center">
                <h2 className="text-xl text-[#46220f] uppercase mb-3 font-bold">{titulo}</h2>
                <p className="text-[#aa7444] text-2xl font-bold mb-4">{preco}</p>

                <button className="bg-gradiente-to-r from bg-[#46220f] to-[#aa7444] w-[-50%] py-4 px-4 text-white rounded-2xl border-none cursor-pointer hover:scale-105">
                    comprar
                </button>
            </article>

        </div>
    )

}

export default Card