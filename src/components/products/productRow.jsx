export function ProductRow({product}) {
    return <tr key={product.name}>
        <td className={product.stocked ? '' : 'text-danger'}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}
