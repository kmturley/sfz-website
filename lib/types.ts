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
  license: string;
  name: string;
  short_description: string;
  slug: string;
  url: string;
};

export type YamlInstruments = {
  categories: YamlCategory[];
};

export type YamlApplication = {
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
