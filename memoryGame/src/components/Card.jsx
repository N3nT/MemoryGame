import { useState, useEffect } from 'react';

const Card = (props) => {

    const [pokemonName, setPokemonName] = useState('');
    const [pokemonImage, setPokemonImage] = useState('');

	const fetchAPI = (id) => {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				return response.json()
			})
			.then((data) => {
				console.log(data)
                setPokemonName(data.name);
                setPokemonImage(data.sprites.other.dream_world.front_default);
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	}

    useEffect(() => {
        fetchAPI(props.id);
    }, [props.id]);

	return (
		<>
			<h1>{pokemonName}</h1>
			<img src={pokemonImage} alt={pokemonName} />
		</>
	)
}

export default Card
