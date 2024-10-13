import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaAddressCard } from "react-icons/fa";

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
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-400 to-indigo-600">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 w-full max-w-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Register Your Profile
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="flex items-center space-x-2">
                        <FaUser className="text-xl text-gray-600" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="border-2 focus:border-blue-400 focus:ring focus:ring-blue-200 p-2 w-full rounded transition-all"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="flex items-center space-x-2">
                        <FaEnvelope className="text-xl text-gray-600" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="border-2 focus:border-blue-400 focus:ring focus:ring-blue-200 p-2 w-full rounded transition-all"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Username Field */}
                    <div className="flex items-center space-x-2">
                        <FaUser className="text-xl text-gray-600" />
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="border-2 focus:border-blue-400 focus:ring focus:ring-blue-200 p-2 w-full rounded transition-all"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Phone Field */}
                    <div className="flex items-center space-x-2">
                        <FaPhone className="text-xl text-gray-600" />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            className="border-2 focus:border-blue-400 focus:ring focus:ring-blue-200 p-2 w-full rounded transition-all"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Gender Field */}
                    <div className="flex items-center space-x-2">
                        <FaUser className="text-xl text-gray-600" />
                        <select
                            name="gender"
                            className="border-2 focus:border-blue-400 focus:ring focus:ring-blue-200 p-2 w-full rounded transition-all"
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
                    <div className="flex items-center space-x-2">
                        <FaAddressCard className="text-xl text-gray-600" />
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            className="border-2 focus:border-blue-400 focus:ring focus:ring-blue-200 p-2 w-full rounded transition-all"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Pincode Field */}
                    <div className="flex items-center space-x-2">
                        <FaAddressCard className="text-xl text-gray-600" />
                        <input
                            type="text"
                            name="pincode"
                            placeholder="Pincode"
                            className="border-2 focus:border-blue-400 focus:ring focus:ring-blue-200 p-2 w-full rounded transition-all"
                            value={formData.pincode}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Country Field */}
                    <div className="flex items-center space-x-2">
                        <FaAddressCard className="text-xl text-gray-600" />
                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            className="border-2 focus:border-blue-400 focus:ring focus:ring-blue-200 p-2 w-full rounded transition-all"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Skills Field */}
                    <div className="flex items-center space-x-2">
                        <FaUser className="text-xl text-gray-600" />
                        <input
                            type="text"
                            name="skills"
                            placeholder="Skills (e.g., React, Node)"
                            className="border-2 focus:border-blue-400 focus:ring focus:ring-blue-200 p-2 w-full rounded transition-all"
                            value={formData.skills}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        className="bg-blue-500 text-white p-3 w-full rounded hover:bg-blue-600 transition-all transform hover:scale-105"
                        type="submit"
                    >
                        Register 🎉
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
