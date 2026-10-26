import { Metadata } from "next";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Camera, MessageCircle, Heart, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Ready Guide | How to Prepare for a Family Recording Session | Nottingham",
  description: "Everything you need to prepare for your family keepsake recording session in Nottingham. What photos to bring, what to wear, and 34 interview questions to ask your grandparents, parents, or partner.",
  alternates: { canonical: "/keepsakes/guide" },
};

const questionSets = [
  {
    title: "Questions for grandparents and parents",
    questions: [
      "What is your earliest memory?",
      "How did you meet your partner?",
      "What was your wedding day actually like?",
      "What values did your parents pass on to you?",
      "What was your first job and how did you get it?",
      "Tell us about the house you grew up in.",
      "What is the hardest thing you ever got through?",
      "What are you most proud of in your life?",
      "What advice would you give your 20-year-old self?",
      "What do you want your grandchildren to remember about you?",
    ],
  },
  {
    title: "Questions for couples and partners",
    questions: [
      "What was your first impression of each other?",
      "What is your favourite memory together?",
      "What has been your biggest adventure?",
      "How do you show love differently?",
      "What song reminds you of each other?",
      "What is something the other person does that always makes you laugh?",
      "What are your dreams for the next ten years?",
      "What has marriage or partnership taught you?",
    ],
  },
  {
    title: "Questions for siblings and friends",
    questions: [
      "What is your funniest shared memory?",
      "What trouble did you get into together?",
      "How has your relationship changed over the years?",
      "What is something only the two of you understand?",
      "What do you admire most about each other?",
      "If you could relive one day together, which would it be?",
    ],
  },
  {
    title: "Questions for parents and children",
    questions: [
      "What was the day I was born like for you?",
      "What is your favourite story about me as a child?",
      "What did you hope for me before I was born?",
      "What have I taught you?",
      "What family tradition do you want to keep alive?",
      "What is your favourite thing we have done together?",
    ],
  },
];

export default function GuidePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            Family Keepsakes — Nottingham
          </span>
          <h1 className="text-4xl lg:text-5xl font-black mb-6">
            Get Ready Guide
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            A little prep goes a long way. Here is everything you need to know before you walk through the door at 20 Fletcher Gate.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-12 h-12 bg-red-100 flex items-center justify-center mb-6">
                <Camera className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-black mb-4">What to bring</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">1.</span>
                  <span className="text-gray-600">
                    <strong>Physical photographs</strong> you want in the film. 
                    We will scan or photograph them in the studio and weave them into the edit. 
                    Old prints, Polaroids, photo albums — all welcome. Even the battered ones.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">2.</span>
                  <span className="text-gray-600">
                    <strong>Digital photos</strong> on a phone, USB stick or cloud link. 
                    Send them ahead or just bring the device. We can pull them in on the day.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">3.</span>
                  <span className="text-gray-600">
                    <strong>Yourself, relaxed.</strong> Wear whatever feels like you. 
                    Avoid thin stripes or busy patterns on camera — they moiré. Solid colours work best. 
                    Layers are good for temperature control.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">4.</span>
                  <span className="text-gray-600">
                    <strong>An open mind.</strong> You do not need to be a performer. 
                    We guide the conversation so it feels natural. Some of the best moments come from the questions you didn't plan.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8">
              <div className="w-12 h-12 bg-red-100 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-black mb-4">What to expect on the day</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-600">
                    Arrive 10 minutes early to settle in. We provide water and tea. 
                    The studio is at 20 Fletcher Gate, right in the Lace Market.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-600">
                    Your engineer will chat through your photos and any specific stories 
                    you want to make sure we capture. This takes 5–10 minutes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-600">
                    Recording is conversational. We prompt gently and let the conversation flow. 
                    If someone goes quiet, we wait. Silence is fine.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-600">
                    You can pause, restart, or retake anything. There is no pressure. 
                    We have had people cry, laugh, and forget what they were saying. All of it is good.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-600">
                    Your edited film arrives within 7 days via a private download link. 
                    You can share it, back it up, watch it on your TV.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-12 h-12 bg-red-100 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black mb-4">34 questions to ask each other</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              You do not have to use these. But they help when the conversation needs a nudge. 
              Pick a few that feel right. Skip the ones that don't.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {questionSets.map((set) => (
              <div key={set.title} className="bg-white p-8">
                <h3 className="text-xl font-bold mb-6">{set.title}</h3>
                <ul className="space-y-3">
                  {set.questions.map((q, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className="text-red-600 font-bold text-sm mt-0.5">{i + 1}.</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black text-white p-8 lg:p-12">
            <div className="w-12 h-12 bg-red-600 flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-black mb-6">Tips for the best recording</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2 text-red-400">Before you arrive</h4>
                <p className="text-gray-400 text-sm">
                  Talk through the questions loosely as a group. Decide who will be the 
                  main storyteller and who will ask the questions. It helps to have one 
                  person steering so the conversation doesn't fragment.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-red-400">During the session</h4>
                <p className="text-gray-400 text-sm">
                  Try not to talk over each other. Pause before answering 
                  — it makes editing cleaner and gives the film room to breathe. 
                  And don't perform. Just be present.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-red-400">Photos</h4>
                <p className="text-gray-400 text-sm">
                  Lay your photos out in the order you want them to appear. Think of it 
                  like a timeline. Childhood, teens, marriage, kids, now. The engineer will handle the scanning.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-red-400">Emotion is good</h4>
                <p className="text-gray-400 text-sm">
                  Laughs, pauses, tears — these are the moments that make a keepsake 
                  film powerful. The best recordings are the ones where people forget the camera is there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-6">
            Ready to book?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Choose your package and pick a date that works for your family. 
            We are based at 20 Fletcher Gate, Nottingham Lace Market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest transition-all text-center rounded-sm"
            >
              Book Your Session
            </Link>
            <Link
              href="/keepsakes"
              className="px-8 py-4 bg-black hover:bg-gray-800 text-white font-black uppercase tracking-widest transition-all text-center rounded-sm"
            >
              Back to Keepsakes
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
