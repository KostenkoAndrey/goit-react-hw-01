import css from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) => {
return <table className={css.tableFrom}>
<thead>
<tr>
    <th className={css.thItems}>Type</th>
    <th className={css.thItems}>Amount</th>
    <th className={css.thItems}>Currency</th>
</tr>
</thead>
<tbody>
{items.map(({ id, type, amount, currency }) => <tr className={css.trItem} key={id}>
<td className={css.tdItem}>{type}</td>
<td className={css.tdItem}>{amount}</td>
<td className={css.tdItem}>{currency}</td>
</tr>)
}
</tbody>
</table>
}

export default TransactionHistory;