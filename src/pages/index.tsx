import style from "@/styles/Home.module.scss";
import Navbar from "@/components/navbar";
import Start from "@/components/start";

export default function Home() {
  return (
    <main className={style.main}>
      <Navbar />
      <Start />
    </main>
  );
}
