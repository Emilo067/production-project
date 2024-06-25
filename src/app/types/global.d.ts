declare module '*.scss' {
    interface IClassnames {
        [className: string]: string;
    }

    const classnames: IClassnames;
    export = classnames;
}