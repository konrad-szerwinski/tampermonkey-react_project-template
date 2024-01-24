import style from './itemStyle.module.css';

interface ItemProps {
    onClick(title: string): void;
    title: string
}

const Item = ({onClick, title}: ItemProps) => {

    return (
        <div className={style.container} onClick={() => onClick(title)}>{title}</div>
    )
}

export default Item;