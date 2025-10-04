<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
    <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-10 animate-fadeIn">
      
      <!-- Header -->
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-6">
          <i class="fas fa-file-contract"></i>
          <span>Terms & Conditions</span>
        </div>

        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Terms of Use Agreement
        </h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Welcome to <span class="font-semibold text-blue-600">DevPluse Pvt. Ltd.</span>  
          Before using our website, services, or applications, please read these Terms & Conditions carefully.
        </p>
      </div>

      <!-- Terms Sections -->
      <div class="space-y-10 text-gray-700 leading-relaxed">
        
        <!-- Section 1 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <i class="fas fa-user-check text-blue-600"></i> 1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using our website, applications, or services, you agree to comply with and be bound by these Terms & Conditions. 
            If you do not agree with any part of these terms, please do not use our services.
          </p>
        </section>

        <!-- Section 2 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <i class="fas fa-briefcase text-purple-600"></i> 2. Company Information
          </h2>
          <p>
            Raison Consultancy Services Pvt. Ltd. is a registered private limited company in India, 
            specializing in IT consulting, software development, and digital solutions.  
            All content, tools, and materials on this website are owned and operated by the company.
          </p>
        </section>

        <!-- Section 3 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <i class="fas fa-clipboard-check text-green-600"></i> 3. Use of Services
          </h2>
          <ul class="list-disc list-inside space-y-2">
            <li>Services are intended for lawful purposes only.</li>
            <li>You agree not to misuse, copy, modify, or redistribute any part of our content without prior written consent.</li>
            <li>You must not attempt to hack, disrupt, or gain unauthorized access to our systems or databases.</li>
          </ul>
        </section>

        <!-- Section 4 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <i class="fas fa-copyright text-orange-600"></i> 4. Intellectual Property
          </h2>
          <p>
            All trademarks, logos, software, content, and designs displayed on this site are the intellectual property of 
            <span class="font-semibold text-blue-600">Raison Consultancy Services Pvt. Ltd.</span> or its partners.  
            Unauthorized use or reproduction of any materials is strictly prohibited.
          </p>
        </section>

        <!-- Section 5 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <i class="fas fa-database text-blue-600"></i> 5. User Data & Privacy
          </h2>
          <p>
            Your use of our website and services is also governed by our 
            <router-link to="/privacy-policy" class="text-blue-600 hover:underline">Privacy Policy</router-link>.  
            We collect and process personal data responsibly and in compliance with applicable laws.
          </p>
        </section>

        <!-- Section 6 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <i class="fas fa-handshake text-green-600"></i> 6. Third-Party Services
          </h2>
          <p>
            Our platform may include links or integrations with third-party services.  
            We are not responsible for the privacy practices, content, or reliability of these external websites or providers.
          </p>
        </section>

        <!-- Section 7 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <i class="fas fa-money-bill-wave text-yellow-600"></i> 7. Payments & Subscriptions
          </h2>
          <p>
            For any paid services, users must provide accurate billing information.  
            All payments are non-refundable unless otherwise stated.  
            We reserve the right to change pricing or terminate services with prior notice.
          </p>
        </section>

        <!-- Section 8 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <i class="fas fa-exclamation-circle text-red-600"></i> 8. Limitation of Liability
          </h2>
          <p>
            We make no warranties about the completeness, reliability, or accuracy of the information provided.  
            <span class="font-semibold">Raison Consultancy Services Pvt. Ltd.</span> shall not be liable for any direct or indirect damages arising from the use or inability to use our services.
          </p>
        </section>

        <!-- Section 9 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <i class="fas fa-balance-scale text-blue-600"></i> 9. Governing Law
          </h2>
          <p>
            These Terms & Conditions shall be governed by and construed in accordance with the laws of India.  
            Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh.
          </p>
        </section>

        <!-- Section 10 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <i class="fas fa-sync text-purple-600"></i> 10. Changes to Terms
          </h2>
          <p>
            We reserve the right to update or modify these Terms & Conditions at any time without prior notice.  
            Updated versions will be posted on this page with a revised “Last Updated” date.
          </p>
        </section>

        <!-- Section 11 -->
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <i class="fas fa-envelope text-blue-600"></i> 11. Contact Information
          </h2>
          <p>
            For any legal inquiries or concerns regarding these terms, please contact us at:
          </p>
          <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-3">
            <p><strong>Raison Consultancy Services Pvt. Ltd.</strong></p>
            <p>Email: <a href="mailto:legal@raisonconsultancy.com" class="text-blue-600 hover:underline">legal@raisonconsultancy.com</a></p>
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
