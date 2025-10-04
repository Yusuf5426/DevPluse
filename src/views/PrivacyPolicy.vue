<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
    <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-10 animate-fadeIn">
      
      <!-- Header -->
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-6">
          <i class="fas fa-shield-alt"></i>
          <span>Privacy Policy</span>
        </div>

        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Your Privacy Matters to Us
        </h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          At <span class="font-semibold text-blue-600">DevPluse Pvt. Ltd</span>, 
          we are committed to protecting your personal information and ensuring transparency in how we handle your data.
        </p>
      </div>

      <!-- Policy Content -->
      <div class="space-y-10 text-gray-700 leading-relaxed">
        <!-- Section 1 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <i class="fas fa-user-secret text-blue-600"></i> 1. Information We Collect
          </h2>
          <p>
            We collect personal details such as your name, email, phone number, and professional information 
            when you register, apply for a job, or interact with our platform. 
            Additionally, we may collect non-personal data such as browser type, device information, and cookies for better user experience.
          </p>
        </section>

        <!-- Section 2 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <i class="fas fa-database text-purple-600"></i> 2. How We Use Your Information
          </h2>
          <ul class="list-disc list-inside space-y-2">
            <li>To process your job applications and manage recruitment workflows.</li>
            <li>To improve our website’s performance and user experience.</li>
            <li>To communicate updates, notifications, or service-related information.</li>
            <li>To comply with legal obligations and prevent misuse or fraud.</li>
          </ul>
        </section>

        <!-- Section 3 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <i class="fas fa-lock text-green-600"></i> 3. Data Protection & Security
          </h2>
          <p>
            We implement advanced encryption and strict access controls to protect your personal information. 
            Your data is stored securely, and only authorized personnel have access to it for legitimate business purposes.
          </p>
        </section>

        <!-- Section 4 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <i class="fas fa-share-alt text-blue-600"></i> 4. Data Sharing & Disclosure
          </h2>
          <p>
            We never sell your personal data. We may share your information only with trusted partners, 
            vendors, or service providers who assist in operating our business — always under strict confidentiality agreements.
          </p>
        </section>

        <!-- Section 5 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <i class="fas fa-user-cog text-purple-600"></i> 5. Your Rights
          </h2>
          <p>
            You have full control over your data. You can request access, correction, or deletion of your personal information 
            anytime by contacting our support team at 
            <a href="mailto:support@raisonconsultancy.com" class="text-blue-600 hover:underline">support@raisonconsultancy.com</a>.
          </p>
        </section>

        <!-- Section 6 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <i class="fas fa-cookie-bite text-yellow-600"></i> 6. Cookies Policy
          </h2>
          <p>
            We use cookies to improve functionality, analyze traffic, and personalize your experience. 
            You can modify your browser settings to reject cookies, but some site features may not work properly.
          </p>
        </section>

        <!-- Section 7 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <i class="fas fa-calendar-alt text-pink-600"></i> 7. Policy Updates
          </h2>
          <p>
            We may update this Privacy Policy occasionally to reflect company, legal, or regulatory changes. 
            Updates will be posted here with a revised “Last Updated” date.
          </p>
        </section>

        <!-- Section 8 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <i class="fas fa-headset text-blue-600"></i> 8. Contact Us
          </h2>
          <p>
            For any privacy-related questions or concerns, please reach out to us at:
          </p>
          <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-3">
            <p><strong>Raison Consultancy Services Pvt. Ltd.</strong></p>
            <p>Email: <a href="mailto:privacy@raisonconsultancy.com" class="text-blue-600 hover:underline">privacy@raisonconsultancy.com</a></p>
            <p>Address: Lucknow, Uttar Pradesh, India</p>
          </div>
        </section>
      </div>

      <!-- Last Updated -->
      <div class="mt-10 text-center text-sm text-gray-500 border-t pt-6">
        Last Updated: October 5, 2025
      </div>
    </div>
  </div>
</template>

<script setup>
// Simple fade-in animation on mount
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.6s ease-out forwards;
}
</style>
