export function ProductCategoryRow({product}) {
    return <tr key={product.category}>
        <td colSpan={2} align="center"><strong>{product.category}</strong></td>
    </tr>
}
