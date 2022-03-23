export interface AlbumTracks {
  href:     string;
  items:    ItemTrack[];
  limit:    number;
  next:     null;
  offset:   number;
  previous: null;
  total:    number;
}

export interface ItemTrack {
  artists:           Artist[];
  available_markets: string[];
  disc_number:       number;
  duration_ms:       number;
  explicit:          boolean;
  external_urls:     ExternalUrls;
  href:              string;
  id:                string;
  is_local:          boolean;
  name:              string;
  preview_url:       null;
  track_number:      number;
  type:              ItemType;
  uri:               string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href:          string;
  id:            ID;
  name:          Name;
  type:          ArtistType;
  uri:           URI;
}

export interface ExternalUrls {
  spotify: string;
}

export enum ID {
  The3JSSjGYcIkgsrz7892CelT = "3JSSjGYcIkgsrz7892CelT",
  The3ZxodnZ10PEbv27IxLEQdQ = "3zxodnZ10PEbv27ixLeQdQ",
  The5ET6V0L25Osw5BzztPSMvD = "5ET6v0l25osw5BzztPsMvD",
}

export enum Name {
  DanielQuién = "Daniel Quién",
  EdMaverick = "Ed Maverick",
  MuelasDeGallo = "Muelas De Gallo",
}

export enum ArtistType {
  Artist = "artist",
}

export enum URI {
  SpotifyArtist3JSSjGYcIkgsrz7892CelT = "spotify:artist:3JSSjGYcIkgsrz7892CelT",
  SpotifyArtist3ZxodnZ10PEbv27IxLEQdQ = "spotify:artist:3zxodnZ10PEbv27ixLeQdQ",
  SpotifyArtist5ET6V0L25Osw5BzztPSMvD = "spotify:artist:5ET6v0l25osw5BzztPsMvD",
}

export enum ItemType {
  Track = "track",
}
