interface CharacterModel {
    id: number;
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
    comics: {
      items: {
        name: string;
      }[];
    };
  }

  export default CharacterModel