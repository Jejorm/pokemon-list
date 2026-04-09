import type { FavoritePokemon } from '@interfaces/favorite-pokemon'
import { createSignal, For } from 'solid-js'

const getLocalStoragePokemons = (): FavoritePokemon[] => {
	const favoritesPokemons = localStorage.getItem('favorites-pokemons') ?? '[]'

	return JSON.parse(favoritesPokemons)
}

export const FavoritesPokemons = () => {
	const [pokemons, setPokemons] = createSignal<FavoritePokemon[]>(
		getLocalStoragePokemons(),
	)

	return (
		<div class="grid grdi-cols-2 sm:grid-cols-4">
			<For each={pokemons()}>{(pokemon) => <h1>{pokemon.name}</h1>}</For>
		</div>
	)
}
