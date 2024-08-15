import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center flex-col text-white">
      <h1 className="font-bold text-6xl mb-4">
        <span className="">4</span>
        <span>0</span>
        <span className="">4</span>
      </h1>
      <h1 className="font-bold text-4x1 mb-4">Página não encontrada</h1>
      <p className="italic text-1xl mb-4">
        Voce caiu em uma página que não existe!
      </p>

      <Link className="bg-gray-50/20 py1 px-4 rounded-md" to="/">
        Voltar para Home
      </Link>
    </div>
  );
}
