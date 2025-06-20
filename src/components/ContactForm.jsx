import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = ({ isDark, cardClasses }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccessMsg('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setSuccessMsg('Failed to send. Please try again later.');
      })
      .finally(() => setSending(false));
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className={`${cardClasses} p-8 rounded-xl border`}>
        {/* Date and Time */}
        <input type="hidden" name="datetime" value={new Date().toLocaleString()} />

        {/* Name */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-3 rounded-lg border ${
              isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all`}
            placeholder="John Smith"
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Email Address</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-3 rounded-lg border ${
              isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full px-4 py-3 rounded-lg border ${
              isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none`}
            placeholder="Tell me about your project..."
          />
          {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
        </div>

        {/* Success/Error */}
        {successMsg && (
          <p className="text-sm text-green-500 mb-4">{successMsg}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={sending}
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          {sending ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;