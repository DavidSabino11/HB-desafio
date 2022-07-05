interface ComicModel {
    id: number;
    title: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    creators: {
        items: {
            name: string;
        }[];
    };
}

export default ComicModel;