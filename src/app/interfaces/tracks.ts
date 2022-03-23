export interface Tracks {
  tracks: Track[];
}

export interface Track {
  album:         Album;
  artists:       Artist[];
  disc_number:   number;
  duration_ms:   number;
  explicit:      boolean;
  external_ids:  ExternalIDS;
  external_urls: ExternalUrls;
  href:          string;
  id:            string;
  is_local:      boolean;
  is_playable:   boolean;
  name:          string;
  popularity:    number;
  preview_url:   string;
  track_number:  number;
  type:          TrackType;
  uri:           string;
}

export interface Album {
  album_type:             AlbumTypeEnum;
  artists:                Artist[];
  external_urls:          ExternalUrls;
  href:                   string;
  id:                     string;
  images:                 Image[];
  name:                   string;
  release_date:           string;
  release_date_precision: ReleaseDatePrecision;
  total_tracks:           number;
  type:                   AlbumTypeEnum;
  uri:                    string;
}

export enum AlbumTypeEnum {
  Album = "album",
  Single = "single",
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
  The06HL4Z0CvFAxyc27GXpf02 = "06HL4z0CvFAxyc27GXpf02",
  The4NDoRrQiYLoBzwC5BhVJzF = "4nDoRrQiYLoBzwC5BhVJzF",
  The6EUKZXaKkcviH0Ku9W2N3V = "6eUKZXaKkcviH0Ku9w2n3V",
  The75VKfyoBlkmrJFDqo1O2VY = "75VKfyoBlkmrJFDqo1o2VY",
}

export enum Name {
  CamilaCabello = "Camila Cabello",
  EdSheeran = "Ed Sheeran",
  FireboyDML = "Fireboy DML",
  TaylorSwift = "Taylor Swift",
}

export enum ArtistType {
  Artist = "artist",
}

export enum URI {
  SpotifyArtist06HL4Z0CvFAxyc27GXpf02 = "spotify:artist:06HL4z0CvFAxyc27GXpf02",
  SpotifyArtist4NDoRrQiYLoBzwC5BhVJzF = "spotify:artist:4nDoRrQiYLoBzwC5BhVJzF",
  SpotifyArtist6EUKZXaKkcviH0Ku9W2N3V = "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V",
  SpotifyArtist75VKfyoBlkmrJFDqo1O2VY = "spotify:artist:75VKfyoBlkmrJFDqo1o2VY",
}

export interface Image {
  height: number;
  url:    string;
  width:  number;
}

export enum ReleaseDatePrecision {
  Day = "day",
  Year = "year",
}

export interface ExternalIDS {
  isrc: string;
}

export enum TrackType {
  Track = "track",
}
