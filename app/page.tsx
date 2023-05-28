"use client";

export default function Home() {
  const makeApiCall = async () => {
    await fetch("/api/pdf", { method: "GET" });
  };
  return (
    <main>
      <button
        className="bg-red-300 px-5 py-3 rounded-full"
        onClick={makeApiCall}
      >
        Create PDF
      </button>
    </main>
  );
}
