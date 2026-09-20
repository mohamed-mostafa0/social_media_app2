"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLock } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { authApi } from "@/api/auth.api";
import { useFormik } from "formik";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      setError("");
      
      try {
        const data = await authApi.login(values);
        console.log(data.data.data);

        if (data.data?.data?.accessToken) {
          localStorage.setItem("accessToken", data.data.data.accessToken);
          if (data.data?.data?.refreshToken) {
            localStorage.setItem("refreshToken", data.data.data.refreshToken);
          }
          router.push("/");
        } else {
          throw new Error("Invalid response from server");
        }
      } catch (err: any) {
        setError(err.response?.data?.message || err.message || "Something went wrong");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Welcome back</h1>
        <p className="text-sm text-gray-500">Please enter your details to sign in.</p>
      </div>

      {error && (
        <div className="mb-6 p-3 bg-red-50 text-red-600 text-sm font-medium rounded-xl border border-red-100 text-center">
          {error}
        </div>
      )}

      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <Input
          label="Email address"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          icon={<FiMail className="w-4 h-4" />}
          required
        />
        
        <div>
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="••••••••"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            icon={<FiLock className="w-4 h-4" />}
            required
          />
          <div className="flex justify-between items-center mt-3 px-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-xs font-semibold text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-700">Forgot password?</a>
          </div>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full py-3 text-sm mt-4 shadow-lg shadow-blue-500/30"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-8 font-medium">
        Don't have an account?{" "}
        <Link href="/register" className="text-blue-600 hover:text-blue-700 font-bold">
          Sign up
        </Link>
      </p>
    </motion.div>
  );
}
