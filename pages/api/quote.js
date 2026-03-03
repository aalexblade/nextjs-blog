export default function handler(req, res) {
  const quotes = [
    {
      author: "Linus Torvalds",
      text: "Talk is cheap. Show me the code.",
      color: "#24292e",
    },
    {
      author: "Martin Fowler",
      text: "Any fool can write code that a computer can understand.",
      color: "#0052cc",
    },
    {
      author: "Bill Gates",
      text: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
      color: "#107c10",
    },
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const q = quotes[randomIndex];

  const html = `
    <div style="
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding: 30px;
      max-width: 400px;
      border-radius: 20px;
      background-color: ${q.color};
      color: white;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      margin: 20px auto;
    ">
      <span style="font-size: 50px; line-height: 1; opacity: 0.3;">&ldquo;</span>
      <p style="
        font-size: 20px;
        font-style: italic;
        margin-top: -20px;
        line-height: 1.4;
      ">${q.text}</p>
      <div style="
        text-align: right;
        font-weight: bold;
        margin-top: 20px;
        border-top: 1px solid rgba(255,255,255,0.2);
        padding-top: 10px;
      ">
        — ${q.author}
      </div>
    </div>
  `;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(html);
}
