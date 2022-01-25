<template>
	<div class="w-full container mx-auto">
		<div class="flex flex-col mt-7 lg:mt-12">
			<h1 class="text-4xl font-black text-center lg:text-6xl">
				Artworks<span class="text-purple-600">Finder</span>
			</h1>
			<h3 class="text-sm text-center lg:text-2xl">
				{{ $t('headingMessage') }}
			</h3>
		</div>
		<div
			class="flex flex-col mx-auto mt-7 p-4 gap-3 bg-gray-200 rounded-xl dark:bg-gray-800 lg:flex-row lg:mt-14"
		>
			<input
				id="term"
				type="text"
				v-model="term"
				:placeholder="$t('inputSearchTerm')"
				class="border-none rounded-lg focus:ring-purple-600 dark:bg-gray-900 lg:grow"
			/>
			<select
				name="country"
				v-model="country"
				@change="changeCountry"
				class="border-none rounded-lg focus:ring-purple-600 hover:cursor-pointer dark:bg-gray-900 lg:grow"
			>
				<option
					v-for="country in countries"
					:key="country.code"
					:value="country.code"
				>
					{{ country.name }}
				</option>
			</select>
			<button
				@click="submitForm"
				:disabled="loading"
				class="border-none bg-purple-600 text-white rounded-lg p-2 hover:bg-purple-700 disabled:bg-purple-700 disabled:cursor-wait lg:grow"
			>
				{{ $t('buttonSearch') }}
			</button>
		</div>
	</div>
</template>

<script>
import countries from '../assets/js/countries';

export default {
	name: 'SearchBar',
	props: {
		loading: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			term: '',
			country: 'mx',
			countries,
			error: false,
		};
	},
	watch: {
		term(newValue, oldValue) {
			if (oldValue === '' && this.error === true) {
				this.error = false;
				this.hideInputError();
			}
		},
	},
	methods: {
		changeCountry() {
			localStorage.setItem('country', this.country);
		},
		showInputError() {
			const input = document.getElementById('term');
			input.classList.remove('focus:focus:ring-purple-600');
			input.classList.add('focus:ring-2');
			input.classList.add('focus:ring-red-600');
			input.focus();
		},
		hideInputError() {
			const input = document.getElementById('term');
			input.classList.remove('focus:ring-2');
			input.classList.remove('focus:ring-red-600');
			input.classList.add('focus:focus:ring-purple-600');
		},
		submitForm() {
			if (this.term === '') {
				this.error = true;
				this.showInputError();
				return;
			}

			this.$emit('submit', { term: this.term, country: this.country });
		},
	},
	created() {
		this.country = localStorage.getItem('country') || 'mx';
	},
};
</script>
