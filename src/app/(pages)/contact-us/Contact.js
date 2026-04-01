'use client';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { CheckCircle, X } from 'lucide-react';
import { ToastContainer, toast as toastify, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // State for the newsletter form
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);

  // Left side form handler (unchanged)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    
    const loadingToast = toast.loading(
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        <span className="text-gray-700">Sending...</span>
      </div>,
      {
        style: {
          background: '#f9fafb',
          color: '#374151',
          borderRadius: '12px',
          padding: '14px 24px',
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb',
        },
      }
    );

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@eraflip.com', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        toast.dismiss(loadingToast);
        e.target.reset();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 4000);
      } else {
        toast.dismiss(loadingToast);
        toast.error('Something went wrong. Please try again.', {
          duration: 5000,
          position: 'top-center',
          style: {
            background: '#fef2f2',
            color: '#991b1b',
            borderRadius: '12px',
            padding: '14px 24px',
          },
        });
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error('Network error. Check your connection.', {
        duration: 5000,
        position: 'top-center',
        style: {
          background: '#fffbeb',
          color: '#92400e',
          borderRadius: '12px',
          padding: '14px 24px',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Newsletter form handler with react‑toastify (slides from bottom‑right)
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setNewsletterSubmitting(true);

    // Loading toast
    const loadingId = toastify.loading('Sending your email...', {
      position: 'bottom-right',
      autoClose: false,
      closeOnClick: false,
      draggable: false,
    });

    try {
      const res = await fetch('https://formsubmit.co/ajax/info@eraflip.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      if (res.ok) {
        toastify.dismiss(loadingId);
        toastify.success(
          <div className="flex items-center gap-3">

            <div>
              <p className="font-semibold text-emerald-800">You're signed up!</p>
              <p className="text-xs text-emerald-600 mt-0.5">Check your inbox for updates.</p>
            </div>
          </div>,
          {
            position: 'bottom-right',
            autoClose: 4000,
            icon: false,
            style: {
              background: '#f0fdf4',
              borderRadius: '16px',
              padding: '12px 20px',
              border: '1px solid #bbf7d0',
            },
          }
        );
        setNewsletterEmail(''); // clear input
      } else {
        throw new Error();
      }
    } catch (error) {
      toastify.dismiss(loadingId);
      toastify.error(
        <div className="flex items-center gap-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <p className="font-semibold text-rose-800">Something went wrong</p>
            <p className="text-xs text-rose-600 mt-0.5">Please try again later.</p>
          </div>
        </div>,
        {
          position: 'bottom-right',
          autoClose: 4000,
          icon: false,
          style: {
            background: '#fef2f2',
            borderRadius: '16px',
            padding: '12px 20px',
            border: '1px solid #fecaca',
          },
        }
      );
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  return (
    <>
      {/* react‑hot‑toast (used for left form) */}
      <Toaster position="top-center" reverseOrder={false} />
      
      {/* react‑toastify (used for newsletter) */}
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        transition={Slide}   // 👈 enables slide animation
      />

      <section className="w-full bg-white pt-12 pb-12 sm:pt-20 sm:pb-20 lg:py-24 px-4 sm:px-6 mt-12 sm:mt-16 lg:mt-20">
        <div className="max-w-full lg:max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto px-2 sm:px-0 text-sm sm:text-base">
              Team Eraflip Tech is just a click away from you. Connect with us to get
              solutions to your business growth, market existence, and sustainability.
            </p>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16">

            {/* LEFT SIDE (unchanged) */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">
                Share your project idea with us
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <input type="hidden" name="_subject" value="New Project Inquiry from Eraflip Website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://eraflip.com/thank-you" />
                
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 outline-none hover:border-gray-400 focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 text-sm sm:text-base" 
                />
                
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email Address" 
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 outline-none hover:border-gray-400 focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 text-sm sm:text-base" 
                />

                <select 
                  name="category"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 outline-none hover:border-gray-400 focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 text-gray-500 text-sm sm:text-base appearance-none bg-white pr-12 sm:pr-14"
                  style={{
                    backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ii8+PC9zdmc+')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center right 1rem',
                    backgroundSize: '16px',
                  }}
                >
                  <option value="">Select Category</option>
                  <option value="Game Development">Game Development</option>
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">App Development</option>
                </select>

                <input 
                  type="text" 
                  name="budget"
                  placeholder="Approx Budget" 
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 outline-none hover:border-gray-400 focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 text-sm sm:text-base" 
                />

                <textarea 
                  name="details"
                  placeholder="Project Details" 
                  rows={4} 
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 sm:px-6 py-3 sm:py-4 outline-none hover:border-gray-400 focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 resize-none text-sm sm:text-base"
                ></textarea>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:bg-gray-800 transition w-full text-sm sm:text-base disabled:opacity-50 disabled:hover:bg-black"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Project'}
                </button>
              </form>
            </div>

            {/* RIGHT SIDE - Newsletter Form */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">
                Stay up to date on global innovations.
              </h3>

              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <input
                  type="email"
                  name="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 border border-gray-300 rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 outline-none hover:border-gray-400 focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 text-sm sm:text-base"
                />
                <button
                  type="submit"
                  disabled={newsletterSubmitting}
                  className="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:bg-gray-800 transition w-full sm:w-auto text-sm sm:text-base disabled:opacity-50 disabled:hover:bg-black"
                >
                  {newsletterSubmitting ? 'Sending...' : 'Sign Up'}
                </button>
              </form>

              <div className="w-full flex justify-center">
                <img
                  src="/images/Eraflip-Countermesh.png"
                  alt="Fantasy Characters"
                  className="w-full max-w-sm sm:max-w-md object-contain mt-6 sm:mt-8 lg:mt-10"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SUCCESS MODAL (unchanged) */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowSuccess(false)}></div>
          
          <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden border-t-4 border-emerald-500">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-8">
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Message Sent Successfully
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  Thank you for contacting us. Our team will review your message and get back to you within 24 hours.
                </p>
                
                <div className="w-12 h-0.5 bg-emerald-100 mx-auto my-4"></div>
                
                <p className="text-xs text-emerald-600 font-medium">
                  Response expected within 24 hours
                </p>
              </div>
            </div>
            
            <div className="h-1 w-full bg-gradient-to-r from-emerald-100 via-emerald-300 to-emerald-100"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;