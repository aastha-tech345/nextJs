import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-center font-bold fs-2">Discover & Share</h1>
          <p className="text-center">
            Easily manage and promote your business and products to millions of
            shoppers across Google with Merchant Center.
          </p>
          <br />
          <center>
            <Link href="/create">
              <button className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded">
                Record Create
              </button>
            </Link>
          </center>
        </div>
        <div className="col-md-6"></div>
      </div>
    </main>
  );
}
