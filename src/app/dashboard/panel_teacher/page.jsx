// ./pages/teacher_panel.js
"use client"
import { useState } from 'react';

export default function TeacherPanel() {
  const [teacherData, setTeacherData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    experience: ''
  });

  const handleChange = (e) => {
    setTeacherData({
      ...teacherData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ارسال یا پردازش داده‌های معلم
    console.log(teacherData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 my-32 bg-white rounded">
      <h1 className="text-2xl font-bold mb-4">پنل کاربری معلم</h1>
      <form onSubmit={handleSubmit}>
        {/* فیلدهای نام و نام خانوادگی */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="نام"
            className="p-2 border rounded w-full"
            value={teacherData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="نام خانوادگی"
            className="p-2 border rounded w-full"
            value={teacherData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* فیلدهای شهر و سابقه تدریس */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="city"
            placeholder="شهر"
            className="p-2 border rounded w-full"
            value={teacherData.city}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="experience"
            placeholder="سابقه تدریس (توضیحات)"
            className="p-2 border rounded w-full"
            value={teacherData.experience}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#729C33] hover:bg-[#4d6824] text-white px-4 py-2 rounded transition-colors"
        >
          ثبت اطلاعات
        </button>
      </form>
    </div>
  );
}
