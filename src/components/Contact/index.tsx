"use client";
import { SCRIPT_URL } from "@/utils/constants";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AddressDetails from "./NewsLatterBox";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.sessionStorage?.getItem("form-submitted")) {
        setAlreadySubmitted(true);
      }
    } catch {
      // Ignore storage access errors (common in Android Chrome Incognito or In-App WebViews)
    }
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    const t = toast.loading("Sending...");
    e.preventDefault();
    const form = new FormData();
    form.append("name", formDetails.name);
    form.append("email", formDetails.email);
    form.append("message", formDetails.message);
    try {
      const res = await fetch(SCRIPT_URL, { method: "POST", body: form });
      const response = await res.json();
      if (response?.result === "error") {
        throw Error("Something went wrong");
      }
      toast.success("Message sent successfully", { id: t });
      try {
        if (typeof window !== "undefined") {
          window.sessionStorage?.setItem("form-submitted", "true");
        }
      } catch {
        // Ignore storage errors in restricted browsing modes
      }
      setAlreadySubmitted(true);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { id: t });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="overflow-hidden">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full lg:w-7/12 xl:w-8/12 px-4">
            <div className="mb-12 rounded-xl border border-slate-200 bg-slate-100 px-8 py-11 shadow-three sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              {!alreadySubmitted ? (
                <>
                  <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                    Need Help? Connect with us
                  </h2>
                  <p className="mb-12 text-base font-medium text-body-color">
                    Our support team will get back to you as soon as possible via email.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="-mx-4 flex flex-wrap">
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="name"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Your Name
                          </label>
                          <input
                            onChange={(e) =>
                              setFormDetails({ ...formDetails, name: e.target.value })
                            }
                            required
                            type="text"
                            placeholder="Enter your name"
                            className="border-stroke w-full rounded-lg border bg-slate-200 px-6 py-3 text-base text-dark outline-none focus:border-slate-100 dark:border-transparent dark:shadow-two dark:focus:shadow-none"
                          />
                        </div>
                      </div>
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="email"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Your Email
                          </label>
                          <input
                            onChange={(e) =>
                              setFormDetails({ ...formDetails, email: e.target.value })
                            }
                            required
                            type="email"
                            placeholder="Enter your email"
                            className="border-stroke w-full rounded-lg border bg-slate-200 px-6 py-3 text-base text-dark outline-none focus:border-slate-100 dark:border-transparent dark:shadow-two dark:focus:shadow-none"
                          />
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-8">
                          <label
                            htmlFor="message"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Your Message
                          </label>
                          <textarea
                            onChange={(e) =>
                              setFormDetails({ ...formDetails, message: e.target.value })
                            }
                            required
                            name="message"
                            rows={5}
                            placeholder="Enter your Message"
                            className="border-stroke w-full resize-none rounded-lg border bg-slate-200 px-6 py-3 text-base text-dark outline-none focus:border-slate-100 dark:border-transparent dark:shadow-two dark:focus:shadow-none"
                          ></textarea>
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <button
                          type="submit"
                          disabled={loading || alreadySubmitted}
                          className="rounded-lg disabled:bg-primary/50 bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                        >
                          {loading ? "Submitting..." : "Submit"}
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Thank you for reaching out to us, we'll get back to you soon.
                </h2>
              )}
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <AddressDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
