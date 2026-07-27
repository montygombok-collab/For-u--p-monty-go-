// js/firebase-config.js
// استيراد الدوال الأساسية من SDKs الخاصة بـ Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

// إعدادات مشروع For-U
const firebaseConfig = {
  apiKey: "AIzaSyACLchq_aV7AT4wqznXIOv395Nbkeemc_c",
  authDomain: "ai-sales-a92b9.firebaseapp.com",
  projectId: "ai-sales-a92b9",
  storageBucket: "ai-sales-a92b9.firebasestorage.app",
  messagingSenderId: "100700395015",
  appId: "1:100700395015:web:79760bc1425b693d3a3ca2",
  measurementId: "G-KN8CS68W7Q"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// تصدير الخدمات لربطها ببقية ملفات المشروع
export { auth, db, analytics };
