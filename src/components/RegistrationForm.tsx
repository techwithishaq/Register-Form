import React from "react";
import { useForm } from "react-hook-form";
import { FormData } from "../type/FormData";

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    alert("Registration Successful!");
    // In a real-world scenario, you would send `data` to a backend API.
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">School E-Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded">
        {/* Full Name */}
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
            {...register("fullName", { required: "Full name is required" })}
          />
          {errors.fullName && (
            <div className="invalid-feedback">{errors.fullName.message}</div>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        {/* Phone Number */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Phone number must be numeric",
              },
            })}
          />
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone.message}</div>
          )}
        </div>

        {/* Grade */}
        <div className="mb-3">
          <label htmlFor="grade" className="form-label">
            Level
          </label>
          <select
            id="grade"
            className={`form-control ${errors.grade ? "is-invalid" : ""}`}
            {...register("grade", { required: "Grade level is required" })}
          >
            <option value="">Select Level</option>
            <option value="Grade 1">100 level</option>
            <option value="Grade 2">200 level</option>
            <option value="Grade 3">300 level</option>
            <option value="Grade 4">400 level</option>
          </select>
          {errors.grade && (
            <div className="invalid-feedback">{errors.grade.message}</div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
