import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen p-8 md:p-16 bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Völuspá
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            Hljóðs bið ek allar<br />
            helgar kindir,<br />
            meiri ok minni<br />
            mögu Heimdallar;<br />
            vildu at ek, Valföðr,<br />
            vel fyr telja<br />
            forn spjöll fira,<br />
            þau er fremst of man.
          </p>
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 mt-8">
            I ask for a hearing<br />
            of all the holy races<br />
            greater and lesser<br />
            kinsmen of Heimdall;<br />
            you will, Valfather,<br />
            that I well set forth<br />
            the ancient histories<br />
            of men long ago.
          </p>
        </div>
      </main>
    </div>
  );
}
