import { useState } from "react";

import api from "../services/api";

import AskButton from "./AskButton";

import ResponseCard from "./ResponseCard";

export default function QuestionBox() {

    const [question, setQuestion] = useState("");

    const [response, setResponse] = useState("");

    const [loading, setLoading] = useState(false);

    async function askQuestion() {

        if (!question.trim()) return;

        try {

            setLoading(true);

            const res = await api.post("/chat", {

                question

            });

            setResponse(res.data.answer);

        }

        catch (err) {

            setResponse("Unable to connect to server.");

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <section className="mt-12">

            <h2 className="text-2xl font-bold">

                Ask your DSA Question

            </h2>

            <textarea

                rows="8"

                value={question}

                onChange={(e) => setQuestion(e.target.value)}

                placeholder="Explain Binary Search..."

                className="mt-5 w-full rounded-2xl border border-slate-800 bg-slate-900 p-5 outline-none focus:border-violet-500 resize-none"

            />

            <AskButton

                onClick={askQuestion}

                loading={loading}

            />

            <ResponseCard

                response={response}

            />

        </section>

    );

}