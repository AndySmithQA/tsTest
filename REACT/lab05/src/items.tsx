type ItemCardProps = {
    symbol: string,
    name: string,
    UnicodeVal: string
}

function ItemCard({ symbol, name, UnicodeVal}: ItemCardProps) {
    return (
        <div className="item-card">
            <h2>{symbol} {name}</h2>
            <p>{UnicodeVal}</p>
        </div>
    )
}

export default ItemCard;