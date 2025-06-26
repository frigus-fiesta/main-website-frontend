import Header from "@/components/Header";
export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@frigusfiesta.com',
      subtext: 'Get in touch via email',
      color: 'from-amber-400 to-yellow-600',
      type: 'email',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '91-91826-84160',
      subtext: '24/7 Customer Support',
      color: 'from-purple-400 to-pink-600',
      type: 'phone',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Jawahar Nagar, Sainikpuri',
      subtext: 'Hyderabad, Telangana, India- 500094',
      color: 'from-blue-400 to-indigo-600',
      type: 'location',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7609.93065747853!2d78.55794824031105!3d17.50916843359547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b5918496265%3A0x4d19b982b705c4df!2sJawahar%20Nagar%2C%20Sainikpuri%2C%20Secunderabad%2C%20Telangana%20500094!5e0!3m2!1sen!2sin!4v1750941309487!5m2!1sen!2sin',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9AM - 6PM',
      subtext: 'Weekend: 10AM - 4PM',
      color: 'from-green-400 to-teal-600',
      type: 'hours',
    }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <GoldAnimatedBackground />
      <Header />
      <ContactUsLanding />
    </>
  );
}
