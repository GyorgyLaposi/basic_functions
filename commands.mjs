export function getAlbumWithMostOfGenres(albums) {
  let mostOfGenres = albums[0];
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].genres.length > mostOfGenres.genres.length) {
      mostOfGenres = albums[i];
    }
  }
  console.log("Most of genres", mostOfGenres.title);
}

export function getAlbumWithTeMostOfSale(albums) {
  let mostOfSale = albums[0];
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].sale > mostOfSale.sale) {
      mostOfSale = albums[i];
    }
  }
  console.log("Most of sale", mostOfSale.title);
}

export function getAlbumWithFewestGenres(albums) {
  let minOfGenres = albums[0];
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].genres.length < minOfGenres.genres.length) {
      minOfGenres = albums[i];
    }
  }
  console.log("Fewes genres", minOfGenres.title);
}

export function getAlbumWithYearOf(albums, year) {
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].year === year) {
      console.log("By year", albums[i].title);
      break; // exit the for loop
    }
  }
}

// search album by artist
// node index.mjs artist "Michael Jackson"

export function getAlbumWithArtistName(albums, artist) {
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].artist === artist) {
      console.log("Album of Michael Jackson", albums[i].title);
      break; // exit the for loop
    }
  }
}

// search album by genre
// node index.mjs genre rock

export function getAlbumWithRockGenre(albums, genre) {
  for (let i = 0; i < albums.length; i++) {
    if (albums[i].genres === genre) {
      console.log("Album genre is rock", albums[i].title);
      break; // exit the for loop
    }
  }
}