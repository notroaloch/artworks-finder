<template>
	<div class="w-full pt-2 flex justify-center gap-3 lg:justify-end">
		<!-- Language Selector -->
		<div class="flex items-center gap-1">
			<TranslateIcon
				class="w-5 h-5 cursor-pointer hover:text-purple-600"
				@click="changeLangFromIcon"
			/>
			<select
				name="language"
				id="language"
				v-model="lang"
				class="cursor-pointer"
				@change="changeLang"
			>
				<option
					v-for="language in availableLanguages"
					:key="`locale-${language.code}`"
					:value="language.code"
				>
					{{ language.name }}
				</option>
			</select>
		</div>

		<!-- Color Mode Selector -->
		<div class="flex items-center gap-1">
			<SunIcon
				class="w-5 h-5 cursor-pointer hover:text-purple-600 dark:hidden"
				@click="changeTheme('dark')"
			/>
			<MoonIcon
				class="w-5 h-5 cursor-pointer hover:text-purple-600 hidden dark:block"
				@click="changeTheme('light')"
			/>
			<select
				name="theme"
				id="theme"
				v-model="theme"
				@change="changeTheme(this.theme)"
				class="cursor-pointer"
			>
				<option value="dark">
					{{ $t('selectDarkMode') }}
				</option>
				<option value="light">
					{{ $t('selectLightMode') }}
				</option>
			</select>
		</div>
	</div>
</template>

<script>
import { TranslateIcon, SunIcon, MoonIcon } from '@heroicons/vue/outline';

export default {
	name: 'CustomSelectors',
	props: {
		availableLanguages: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			theme: 'light',
			lang: 'es-MX',
		};
	},
	methods: {
		changeTheme(theme) {
			const body = document.querySelector('body');

			if (theme !== 'dark') {
				body.classList.remove('dark');
			} else {
				body.classList.add('dark');
			}

			localStorage.setItem('theme', theme);
			this.theme = theme;
		},
		changeLang() {
			this.lang = localStorage.getItem('lang') || 'es-MX';
			localStorage.setItem('lang', this.lang);
			this.$root.$i18n.locale = this.lang;
		},
		changeLangFromIcon() {
			const actualLang = localStorage.getItem('lang') || 'es-MX';
			const lang = actualLang === 'es-MX' ? 'en-US' : 'es-MX';

			this.lang = lang;
			localStorage.setItem('lang', lang);
			this.$root.$i18n.locale = lang;
		},
	},
	components: { TranslateIcon, SunIcon, MoonIcon },
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
		localStorage.setItem('theme', this.theme);

		this.lang = localStorage.getItem('lang') || 'es-MX';
		localStorage.setItem('lang', this.lang);

		this.changeLang(this.lang);
		this.changeTheme(this.theme);
	},
};
</script>

<style scoped>
select {
	@apply bg-transparent border-none rounded-xl focus:ring-2 focus:ring-purple-600  dark:text-white;
}
select option {
	@apply dark:text-black;
}
</style>
