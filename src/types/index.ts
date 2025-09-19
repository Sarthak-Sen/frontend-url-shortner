export interface URLShortenRequest {
  url: string;
}

export interface URLShortenResponse {
  shortUrl: string;
  originalUrl: string;
  id?: string;
}

export interface URLInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export interface ResultDisplayProps {
  shortenedUrl: string;
  onReset: () => void;
}