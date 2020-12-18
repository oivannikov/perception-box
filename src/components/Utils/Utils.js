export function charactersWithId(characters) {
  const favorites = localStorage.getItem('favorites');
  const likedCharacters = favorites ? JSON.parse(favorites) : [];

  return characters.map(character => {
    const id = character.url.split('/').slice(-2, -1)[0];

    return ({
      ...character,
      liked: likedCharacters.includes(id),
      id,
    })
  });
}

export function updateFavoritesStorage(id) {
  const favorites = localStorage.getItem('favorites');
  const likedCharacters = favorites ? JSON.parse(favorites) : [];
  let updatedFavorites;
 
  if (likedCharacters.includes(id)) {
    updatedFavorites = likedCharacters.filter(characterId => characterId !== id);
  } else {
    updatedFavorites = [...likedCharacters, id];
  }

  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
}
