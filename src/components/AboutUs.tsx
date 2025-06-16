
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="py-20 bg-bezaleel-gray/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bezaleel-dark mb-8">
              About Us
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Bezaleel Consultants has evolved to become a leading partner for businesses expanding into South Africa and Zambia, specializing in guiding companies through seamless market entry. As your trusted advisor and partner, we offer a comprehensive range of services tailored to your unique needs. Our approach is built on honesty and expertise – we tell you what you need to know, not just what you want to hear. With a one-stop solution and 24/7/365 availability, we're committed to delivering exceptional support. Our entrepreneurial culture drives us to innovate and improve, ensuring the best outcomes for our clients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
