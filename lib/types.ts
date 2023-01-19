export type YamlDocument = {
  slug: string[];
  title: string;
  content: string;
};

export type YamlCategory = {
  slug: string;
  instruments: YamlInstrument[];
  name: string;
};

export type YamlInstrument = {
  author: string;
  category: string;
  download_size: string;
  downloads?: YamlInstrumentDownload[];
  license: string;
  name: string;
  page: string;
  short_description: string;
  slug: string;
  url: string;
  version: string;
};

export type YamlInstrumentDownload = {
  label: string;
  url: string;
  format: string;
  samplerate: string;
  size: string;
  short_description: string;
};

export type YamlInstruments = {
  categories: YamlCategory[];
};

export type YamlApplication = {
  page: string;
  slug: string;
  category: string;
  author: string;
  name: string;
  license: string;
  url: string;
  os: string[];
  short_description: string;
};

export type YamlSoftwareCategory = {
  slug: string;
  name: string;
  applications: YamlApplication[];
};

export type YamlSoftware = {
  categories: YamlSoftwareCategory[];
  os: string[];
};
