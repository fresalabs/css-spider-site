export type Option = { key: string; value: string; label: string };

interface OptionAction {
  category: string;
  choices: Option[];
  chosenKey: string;
}

export type Options = Array<OptionAction>;

export const defaultCSSSpiderOptions: Options = [
  {
    category: 'On click:',
    choices: [
      { key: 'copyCode', value: 'copyCode', label: 'Copy Code' },
      { key: 'pinTheCSSWindow', value: 'pinTheCSSWindow', label: 'Pin the CSS window' },
    ],
    chosenKey: 'copyCode',
  },
  {
    category: 'Pseudo-classes and Pseudo-elements styles:',
    choices: [
      { key: 'doNotCopyCode', value: 'doNotCopyCode', label: "Don't Copy Code"},
      { key: 'copyItSeparately', value: 'copyItSeparately', label: 'Copy it separately'},
      { key: 'copyItNested', value: 'copyItNested', label: 'Copy it nested (SASS/LESS)'},
    ],
    chosenKey: 'copyItSeparately',
  }
];
