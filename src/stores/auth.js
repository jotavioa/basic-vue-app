import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {

	const email = ref("");
	const password = ref("");
	const isAuthenticated = ref(false);

	function login() {
		// Perform login logic
		isAuthenticated.value = true;
	}

	function logout() {
		// Perform logout logic
		isAuthenticated.value = false;
	}

	return { email, password, isAuthenticated, login, logout };
});
