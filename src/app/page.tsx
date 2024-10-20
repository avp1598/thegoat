import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/thegoat.jpeg"
        alt="The GOAT"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <a
          href="https://memecoin.new/coin/0x3f3919942cbada01f6064dd3fe69a67ab27ddad2"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-3 text-xl font-bold text-black bg-[#39FF14] hover:bg-[#2BFF00] transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Buy
        </a>
      </div>
    </div>
  );
}
