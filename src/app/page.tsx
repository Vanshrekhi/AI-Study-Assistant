import TamboChat from "@/components/TamboChat";
import { ApiKeyCheck } from "@/components/ApiKeyCheck";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <main className="max-w-3xl w-full space-y-10">

        {/* HERO SECTION */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/Octo-Icon.svg"
            alt="StudentIQ Logo"
            width={90}
            height={90}
            className="mb-4"
          />

          <h1 className="text-4xl font-bold">studentiqAgent — AI Study Assistant</h1>

          <p className="text-gray-600 mt-4 max-w-xl">
            Your personal AI companion that helps you understand concepts,
            revise faster, practice quizzes, and plan your studies — all through
            natural conversation.
          </p>

          {/* TRY PROMPTS */}
          <div className="bg-yellow-50 border rounded-xl p-5 mt-6 text-sm w-full text-left">
            <p className="font-semibold mb-2">Try asking:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Explain Operating System deadlock in simple words</li>
              <li>Make revision notes for DBMS normalization</li>
              <li>Create a quiz on Computer Networks</li>
              <li>Plan my study schedule for 5 days (OS, DBMS, CN)</li>
            </ul>
          </div>
        </div>

        {/* LAUNCH BUTTON */}
        <div className="bg-white px-8 py-6 rounded-xl shadow-sm text-center">
          <h2 className="text-xl font-semibold mb-4">Start Using StudentIQ</h2>
          <ApiKeyCheck>
            <a
              href="/chat"
              className="inline-block px-8 py-3 rounded-lg font-medium text-lg bg-[#7FFFC3] hover:bg-[#72e6b0] text-gray-800 transition"
            >
              Launch AI Assistant →
            </a>
          </ApiKeyCheck>
        </div>

        {/* FEATURES SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="border rounded-xl p-5 shadow-sm bg-white">
            <h3 className="font-semibold text-lg mb-2">📚 Doubt Solver</h3>
            <p className="text-gray-600 text-sm">
              Ask any academic question and get clear, simple explanations instantly.
            </p>
          </div>

          <div className="border rounded-xl p-5 shadow-sm bg-white">
            <h3 className="font-semibold text-lg mb-2">📝 Revision Notes</h3>
            <p className="text-gray-600 text-sm">
              Generate quick revision notes before exams from any topic.
            </p>
          </div>

          <div className="border rounded-xl p-5 shadow-sm bg-white">
            <h3 className="font-semibold text-lg mb-2">❓ Quiz Generator</h3>
            <p className="text-gray-600 text-sm">
              Practice with automatically generated quizzes to test your knowledge.
            </p>
          </div>

          <div className="border rounded-xl p-5 shadow-sm bg-white">
            <h3 className="font-semibold text-lg mb-2">📅 Study Planner</h3>
            <p className="text-gray-600 text-sm">
              Create a personalized study timetable based on your subjects and available time.
            </p>
          </div>

        </div>

      </main>

      {/* Tambo AI (must stay at bottom) */}
      
    </div>
  );
}
