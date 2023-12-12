export default function HomePage() {
  return (
    <>
      <>
        <meta charSet="UTF-8" />
        <title>Landing Page dengan Tailwind CSS dan DaisyUI</title>
        {/* Tambahkan link CDN untuk Tailwind CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        {/* Tambahkan link CDN untuk DaisyUI */}
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@1.12.16/dist/full.min.css"
          rel="stylesheet"
        />
        <header className="bg-gray-800 text-white text-center py-8">
          <h1 className="text-4xl font-bold">Selamat Datang di IP-65</h1>
        </header>
        <div className="container mx-auto py-12 bg-gray-800">
          <div className="max-w-2xl mx-auto p-8 rounded shadow-lg bg-gray-800">
            <h2 className="text-2xl font-bold mb-4">Tawaran Menarik untuk Anda!</h2>
            <p className="text-lg mb-4">
              Nikmati pengalaman yang luar biasa dengan produk atau layanan kami.
              Dapatkan manfaat yang tidak akan Anda dapatkan di tempat lain.
            </p>
            <img
              src="gambar-produk.jpg"
              alt="Gambar Produk"
              className="w-full mb-4 rounded-lg"
            />
            <a href="https://www.tautan-anda.com" className="btn btn-primary">
              Dapatkan Sekarang
            </a>
          </div>
        </div>
      </>

    </>
  )
}