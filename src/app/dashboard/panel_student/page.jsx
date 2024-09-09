"use client"
import { useState } from 'react';

export default function UserPanel() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    grade: '',
    address: ''
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ارسال یا پردازش داده‌های کاربر
    console.log(userData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 my-32 bg-white rounded">
      <h1 className="text-2xl font-bold mb-4">پنل کاربری</h1>
      <form onSubmit={handleSubmit}>
        {/* فیلدهای نام و نام خانوادگی */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="نام"
            className="p-2 border rounded w-full"
            value={userData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="نام خانوادگی"
            className="p-2 border rounded w-full"
            value={userData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* فیلدهای پایه تحصیلی و آدرس */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="grade"
            placeholder="پایه تحصیلی"
            className="p-2 border rounded w-full"
            value={userData.grade}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="آدرس"
            className="p-2 border rounded w-full"
            value={userData.address}
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
