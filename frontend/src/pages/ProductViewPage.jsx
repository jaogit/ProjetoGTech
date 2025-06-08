import Buybox from "../components/Buybox";

const imagemPrincipal = "https://exemplo.com/destaque.jpg";

const imagens = [
  "https://exemplo.com/imagem1.jpg",
  "https://exemplo.com/imagem2.jpg",
];

export default function ProductViewPage() {
  return (
   <div className="bg-[#F9F8FE] w-full h-full flex justify-center items-center">
  <Buybox imagemDestaque={imagemPrincipal} imagens={imagens} />
</div>
  );
}