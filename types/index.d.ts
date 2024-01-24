declare module '*.module.css';
declare module '*.module.scss';
declare module '*.module.sass';
// and so on for whatever flavor of css you're using

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}