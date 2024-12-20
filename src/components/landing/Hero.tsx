import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';
import { ScaleIn } from '../animations/ScaleIn';

export default function Hero() {
  return (
    <div className="pt-32 pb-20 bg-gradient-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Transform Your<br />Payment Experience
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-600 mb-8">
              Experience lightning-fast payouts, secure transactions, and comprehensive financial solutions tailored for modern businesses.
            </p>
          </FadeIn>

          <ScaleIn delay={0.4}>
            <div className="flex gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/login"
                  className="px-6 py-3 rounded-lg bg-gradient-primary text-white hover:opacity-90 transition-opacity"
                >
                  Login Now
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-lg border-2 border-primary-200 text-primary-600 hover:bg-primary-50 transition-colors"
                >
                  Contact Sales
                </Link>
              </motion.div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </div>
  );
}