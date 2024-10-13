import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaAddressCard, FaFlag, FaGlobe, FaTools } from "react-icons/fa"; // Additional icons

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        username: "",
        phone: "",
        gender: "",
        address: "",
        pincode: "",
        country: "",
        skills: "",
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
            if (existingUsers.some((user) => user.username === formData.username)) {
                alert("⚠️ Username already exists");
            } else {
                localStorage.setItem("users", JSON.stringify([...existingUsers, formData]));
                alert("🎉 Registration successful!");
                navigate("/login");
            }
        }
    };

    const validateForm = () => {
        if (!formData.name.match(/^[a-zA-Z ]+$/)) {
            alert("⚠️ Name cannot contain special characters");
            return false;
        }
        if (formData.phone.length !== 10) {
            alert("⚠️ Phone number must be 10 digits");
            return false;
        }
        if (formData.pincode.length !== 6) {
            alert("⚠️ Pincode must be 6 digits");
            return false;
        }
        return true;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-indigo-600">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Create Your Account
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="flex items-center space-x-3">
                        <FaUser className="text-2xl text-purple-600" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name (e.g., Jane Doe)"
                            className="border-2 focus:border-purple-400 focus:ring focus:ring-purple-200 p-3 w-full rounded-lg transition-all"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="flex items-center space-x-3">
                        <FaEnvelope className="text-2xl text-purple-600" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address (e.g., jane.doe@example.com)"
                            className="border-2 focus:border-purple-400 focus:ring focus:ring-purple-200 p-3 w-full rounded-lg transition-all"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Username Field */}
                    <div className="flex items-center space-x-3">
                        <FaUser className="text-2xl text-purple-600" />
                        <input
                            type="text"
                            name="username"
                            placeholder="Username (e.g., janedoe123)"
                            className="border-2 focus:border-purple-400 focus:ring focus:ring-purple-200 p-3 w-full rounded-lg transition-all"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Phone Field */}
                    <div className="flex items-center space-x-3">
                        <FaPhone className="text-2xl text-purple-600" />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number (e.g., 9876543210)"
                            className="border-2 focus:border-purple-400 focus:ring focus:ring-purple-200 p-3 w-full rounded-lg transition-all"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Gender Field */}
                    <div className="flex items-center space-x-3">
                        <FaUser className="text-2xl text-purple-600" />
                        <select
                            name="gender"
                            className="border-2 focus:border-purple-400 focus:ring focus:ring-purple-200 p-3 w-full rounded-lg transition-all"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Address Field */}
                    <div className="flex items-center space-x-3">
                        <FaAddressCard className="text-2xl text-purple-600" />
                        <input
                            type="text"
                            name="address"
                            placeholder="Home Address (e.g., 123 Main St)"
                            className="border-2 focus:border-purple-400 focus:ring focus:ring-purple-200 p-3 w-full rounded-lg transition-all"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Pincode Field */}
                    <div className="flex items-center space-x-3">
                        <FaFlag className="text-2xl text-purple-600" />
                        <input
                            type="text"
                            name="pincode"
                            placeholder="Pincode (e.g., 123456)"
                            className="border-2 focus:border-purple-400 focus:ring focus:ring-purple-200 p-3 w-full rounded-lg transition-all"
                            value={formData.pincode}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Country Field */}
                    <div className="flex items-center space-x-3">
                        <FaGlobe className="text-2xl text-purple-600" />
                        <input
                            type="text"
                            name="country"
                            placeholder="Country (e.g., United States)"
                            className="border-2 focus:border-purple-400 focus:ring focus:ring-purple-200 p-3 w-full rounded-lg transition-all"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Skills Field */}
                    <div className="flex items-center space-x-3">
                        <FaTools className="text-2xl text-purple-600" />
                        <input
                            type="text"
                            name="skills"
                            placeholder="Skills (e.g., React, Node.js)"
                            className="border-2 focus:border-purple-400 focus:ring focus:ring-purple-200 p-3 w-full rounded-lg transition-all"
                            value={formData.skills}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        className="bg-purple-500 text-white p-3 w-full rounded-lg hover:bg-purple-600 transition-all transform hover:scale-105"
                        type="submit"
                    >
                        Register Now 🎉
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
