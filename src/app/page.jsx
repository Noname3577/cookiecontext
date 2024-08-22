import CookieBanner from "./components/CookieBanner";

export default function Home() {
  return (
    <div className="bg_a">
      <div className="bg_b">
        <div>
          <h1 className="text_a">หน้าเว็บไซค์</h1>
          <div className="bg_c">
            <CookieBanner />
          </div>
        </div>
      </div>
    </div>
  );
}
