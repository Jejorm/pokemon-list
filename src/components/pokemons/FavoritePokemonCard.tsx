import type { FavoritePokemon } from '@interfaces/favorite-pokemon'
import { createSignal, Show, type Component } from 'solid-js'

interface Props {
	pokemon: FavoritePokemon
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
	const [isVisible, setIsVisible] = createSignal(true)

	const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

	const deleteFavorite = () => {
		const favorites = JSON.parse(
			localStorage.getItem('favorites-pokemons') ?? '[]',
		)

		const newFavorites = favorites.filter(
			(fav: FavoritePokemon) => fav.id !== pokemon.id,
		)

		localStorage.setItem('favorites-pokemons', JSON.stringify(newFavorites))

		setIsVisible(false)
	}

	return (
		<Show when={isVisible()}>
			<div class="flex flex-col justify-center items-center mt-8">
				<a href={`/pokemon/${pokemon.name}`}>
					<img src={imageSrc} alt={pokemon.name} width={150} height={150} />
					<p class="capitalize text-2xl text-center">
						#{pokemon.id} {pokemon.name}
					</p>
				</a>
				<button
					onClick={deleteFavorite}
					class="text-red-400 cursor-pointer text-xl"
					type="button"
				>
					Delete
				</button>
			</div>
		</Show>
	)
}
