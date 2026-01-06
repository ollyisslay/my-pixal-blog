import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MyPixelBlog() {
  const [todos, setTodos] = useState(["Finish homework", "Make a new pixel animation", "Write a blog post"]);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    if (!newTodo.trim()) return;
    setTodos([...todos, newTodo.trim()]);
    setNewTodo("");
  }

  return (
    <div className="min-h-screen bg-emerald-50 text-slate-800 p-6 grid gap-6">
      <header className="grid gap-2">
        <h1 className="text-4xl font-bold">✨ My Pixel World</h1>
        <p className="text-slate-600">kawaii • fun • silly</p>
      </header>

      <section className="grid gap-4">
        <h2 className="text-2xl font-semibold">🎮 Pixel Dreams & Animations</h2>
        <Card className="rounded-2xl shadow-xl bg-slate-800">
          <CardContent className="p-4 grid gap-2 text-slate-700">
            <p>I love creating tiny worlds of color and glow. Pixels feel like little puzzle pieces that click into stories.</p>
            <div className="grid md:grid-cols-3 gap-3">
              <img src="https://placehold.co/300x200" alt="placeholder pixel art" className="rounded-2xl shadow" />
              <img src="https://placehold.co/300x200" alt="placeholder pixel scene" className="rounded-2xl shadow" />
              <img src="https://placehold.co/300x200" alt="placeholder animation" className="rounded-2xl shadow" />
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4">
        <h2 className="text-2xl font-semibold">💡 Advice I’m Learning</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Start simple first, then level up.",
            "Make mistakes fast so you can fix them.",
            "Save your work. Then save it again!"
          ].map((tip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="rounded-2xl shadow-xl bg-slate-800 h-full">
                <CardContent className="p-4">{tip}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid gap-4">
        <h2 className="text-2xl font-semibold">📋 My To‑Do List</h2>
        <div className="grid gap-3">
          <div className="grid gap-2 md:flex md:items-center">
            <input
              className="rounded-xl px-3 py-2 bg-slate-800 border border-slate-700 outline-none"
              placeholder="Add a new task..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <Button className="rounded-2xl mt-2 md:mt-0" onClick={addTodo}>Add</Button>
          </div>
          <ul className="grid gap-2">
            {todos.map((t, i) => (
              <li key={i} className="bg-slate-800 rounded-xl px-3 py-2 shadow">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-4">
        <h2 className="text-2xl font-semibold">📝 Blog</h2>
        <Card className="rounded-2xl shadow-xl bg-slate-800">
          <CardContent className="p-4 grid gap-2 text-slate-200">
            <p><strong>First Post:</strong> Welcome to my website!</p>
            <p>I want to share what I build, what I learn, and the funny ideas that pop into my brain. More posts coming soon!</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4">
        <h2 className="text-2xl font-semibold">✨ About Me</h2>
        <Card className="rounded-2xl shadow-xl bg-white">
          <CardContent className="p-4 grid gap-2 text-slate-700">
            <p>I like singing, dancing, going on adventures, and dreaming up Babymon ideas while eating ice‑cream.</p>
            <p>This site is where I share what I’m learning and the things that make me smile.</p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-sm text-slate-500 pt-4">Made by me 🪄</footer>
    </div>
  );
}
