<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-xl shadow-xl w-full max-w-md text-center">
      <h2 class="text-2xl font-bold mb-6">Login with Google</h2>
      <div id="g_id_signin"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
const config = useRuntimeConfig()

function handleCredentialResponse(response) {
  const token = response.credential;

  fetch('http://localhost:5054/api/auth/google-login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token })
  })
    .then(res => {
      if(!res.ok) throw  new Error("Login Failed");
      return res.text();
    })
    .then (jwt => {
      console.log('LOGIN SUCCESFUL :::', jwt);
      localStorage.setItem("token", jwt)

      window.location.href = "/homepage"
    })
    .then(res => res.json())
    .then(data => {
      console.log('Login successful:', data);
      // Save token and redirect
    })
    .catch(console.error);
}


onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://accounts.google.com/gsi/client';
  script.async = true;
  script.defer = true;
  script.onload = () => {
    window.google?.accounts.id.initialize({
      client_id: config.public.googleClientId,
      callback: handleCredentialResponse,
    });

    window.google?.accounts.id.renderButton(
      document.getElementById('g_id_signin'),
      { theme: 'outline', size: 'large' }
    );
  };
  document.head.appendChild(script);
});
</script>
