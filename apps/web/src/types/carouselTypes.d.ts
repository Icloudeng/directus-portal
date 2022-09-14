export type ICarouselData = {
    bigTitle: string;
    description: string;
    href: string;
    external?: boolean;
    items: {
        title: string;
        itemsList: string[];
    };
}

export type ICarouselButton = {
    enabled: boolean,
    onClick: React.MouseEventHandler
}

export type IDotButton = {
    position: number
    selected: boolean,
    onClick: React.MouseEventHandler
}