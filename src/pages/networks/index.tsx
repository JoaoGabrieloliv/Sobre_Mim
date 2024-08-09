import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { FormEvent, useState, useEffect } from "react";
import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";

export function Networks() {
  const [Linkedin, setLinkedin] = useState("");
  const [GitHub, setGitHub] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setLinkedin(snapshot.data()?.linkedin);
          setGitHub(snapshot.data()?.github);
        }
      });
    }

    loadLinks();
  }, []);

  function handleRegister(e: FormEvent) {
    e.preventDefault();
    setDoc(doc(db, "social", "link"), {
      linkedin: Linkedin,
      github: GitHub,
    })
      .then(() => {
        console.log("CADASTRADO COM SUCESSO!");
      })
      .catch((error) => {
        console.log("Error ao cadastrar" + error);
      });
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2 ">
      <Header />

      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas redes sociais
      </h1>

      <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
        <label className="text-white font-medium mt-2 mb-2">
          Link do Linkedin
        </label>
        <Input
          type="url"
          placeholder="Digite a URL do Linkedin..."
          value={Linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">
          Link do GitHub
        </label>
        <Input
          type="url"
          placeholder="Digite a URL do GitHub..."
          value={GitHub}
          onChange={(e) => setGitHub(e.target.value)}
        />

        <button
          type="submit"
          className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mg-7 font-medium"
        >
          Salvar Links
        </button>
      </form>
    </div>
  );
}
