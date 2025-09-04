# Subject: Front-End Internship Assignment Submission – Alpha

Hi Team,

Please find my submission for the **Front-End Internship** assignment. I’ve implemented all requested features using **React** and deployed the project on **Vercel**.

**Live Demo:** [https://alpha-car-six.vercel.app/](https://alpha-car-six.vercel.app/)
**GitHub Repository:** <https://github.com/DivyanshiGupta-18/alpha-car>

---

## ✅ What’s Implemented (A + B Combined)

**A. Spinny-style Car Detail Page (wireframe reference)**

* **Picture Scroll:** Image carousel with smooth navigation, custom previous/next controls, and disabled state at ends.
* **360° View Button:** Triggers a one-time auto-slide through all images (simulated 360°). At the end it **resets and stops on the first slide**.
* **Responsive Layout:** Desktop shows a two-column layout (left \~65% carousel, right \~35% info). Tablet/Mobile collapses into a stacked top-to-bottom layout.

**B. Dashboard/Calculator (from provided reference image)**

* **Price Calculator Form** with two inputs:

  1. **Number of Invites**
  2. **Duration of Event**
* Displays the **computed total** clearly on the page (demo formula for illustration).

**Car Overview Section**

* Shows **Model, Year, Mileage, Price** in a clean card with responsive typography.

---

## 🧩 Tech Stack & Libraries

* **React** (Create React App)
* **react-slick + slick-carousel** for the image slider
* **@mui/material** (for sliders in the calculator)
* Custom CSS for responsive layout and alignment

---

## 🔎 How to Use (Reviewer Guide)

1. Open the **Live Demo** link.
2. On desktop, you’ll see the **carousel on the left** and **info + calculator on the right**. On mobile, components stack vertically.
3. Click **“View 360°”** to trigger a **single auto-slide sequence** from the first image through the last; it then **returns to the first image and stops**.
4. Use the **◀ / ▶** buttons to navigate images manually; buttons become **light/disabled** when no further slides exist.
5. In the **Price Calculator**, adjust **Number of Invites** and **Duration** (hours) to see the **Total Price** update.

---

## 🛠️ Local Setup (if needed)

```bash
# clone
git clone https://github.com/DivyanshiGupta-18/alpha-car
cd cd alpha-car-app

# install deps
npm install

# run
npm start
```

---

## ✅ Compliance with Instructions

* **React used** (as requested; Next.js not required but accepted)
* **Spinny page used as a reference** (only for layout/UX)
* **Dashboard image logic integrated** within the same wireframe
* **Deployed on Vercel** and link provided
* **Project name does not use “HUBX”** (named **Alpha**)
* **Deadline:** Ready before **5 Sept 2025**

> **Disclaimer:** Spinny is used purely as a reference for layout inspiration, as per the assignment note.

---

## Notes

* The 360° interaction is simulated via controlled autoplay of the carousel (one pass only) and is intentionally non-looping to match the assignment’s requirement.
* Styling aims to closely mirror the reference while keeping the code straightforward and readable.

---
