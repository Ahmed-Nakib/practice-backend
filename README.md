# 📘 Practice Backend (Node.js + Express + TypeScript)

এই প্রজেক্টটি আমি Backend Practice করার জন্য তৈরি করেছি। এখানে আমি Node.js, Express এবং TypeScript ব্যবহার করছি। নিচে প্রতিটি কমান্ড ও সেটআপ সুন্দরভাবে ব্যাখ্যা করা হলো যাতে ভবিষ্যতে সহজে মনে করা যায়।

---

## 🚀 প্রজেক্ট শুরু করার ধাপ

### 🟢 1. `npm init -y`

```bash
npm init -y
```

👉 এটি একটি নতুন Node.js প্রজেক্ট তৈরি করে।
👉 `-y` ব্যবহার করার কারণে সব default সেটিংস দিয়ে `package.json` ফাইল তৈরি হয়।

📌 **কাজ কী?**

* প্রজেক্টের নাম, ভার্সন, স্ক্রিপ্ট ইত্যাদি ম্যানেজ করার জন্য `package.json` তৈরি করে।

---

### 🟢 2. Express ইনস্টল করা

```bash
npm install express --save
```

👉 Express একটি জনপ্রিয় Node.js framework, যেটা দিয়ে সহজে server বানানো যায়।

📌 **কাজ কী?**

* API তৈরি করা
* Routing handle করা
* Middleware ব্যবহার করা

---

### 🟢 3. TypeScript সেটআপ করা

```bash
tsc --init
```

👉 এটি একটি `tsconfig.json` ফাইল তৈরি করে।

📌 **কাজ কী?**

* TypeScript compiler কিভাবে কাজ করবে সেটার configuration দেয়
* যেমন: target, module, strict mode ইত্যাদি

---

### 🟢 4. TypeScript Watch Mode

```bash
tsc -w
```

👉 এটি TypeScript কে watch mode-এ চালায়।

📌 **কাজ কী?**

* তুমি যখন `.ts` ফাইল পরিবর্তন করবে, তখন এটি automatically `.js` এ convert করে
* Manual compile করার দরকার হয় না

---

### 🟢 5. Nodemon ইনস্টল করা

```bash
npm install -g nodemon
```

👉 Nodemon একটি development tool।

📌 **কাজ কী?**

* Server code change করলে auto restart করে
* বারবার manually server restart করতে হয় না

---

## 🛠️ Recommended Scripts (package.json এ যোগ করতে পারো)

```json
"scripts": {
  "start": "node dist/index.js",
  "dev": "nodemon dist/index.js",
  "build": "tsc"
}
```

📌 **ব্যাখ্যা:**

* `npm run build` → TypeScript compile করবে
* `npm run dev` → Nodemon দিয়ে server run করবে
* `npm start` → production run

---

## 📂 Basic Project Structure (Recommended)

```
practice-backend/
│
├── src/
│   └── index.ts
│
├── dist/        (compiled js files)
├── node_modules/
├── package.json
├── tsconfig.json
└── README.md
```

---

## 💡 Extra Tips

✅ সবসময় `.env` ব্যবহার করো sensitive data রাখার জন্য
✅ Middleware বুঝে ব্যবহার করো (express.json, cors, etc.)
✅ ছোট ছোট API বানিয়ে practice করো

---

## 🎯 Summary

| Tool       | কাজ                       |
| ---------- | ------------------------- |
| npm        | package manage করে        |
| express    | server বানাতে সাহায্য করে |
| typescript | type safety দেয়           |
| nodemon    | auto restart করে          |

---

✨ **এই README দেখে ভবিষ্যতে তুমি সহজেই সব কিছু মনে করতে পারবে।**
Happy Coding 🚀
