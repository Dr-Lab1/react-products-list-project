export function ProductCategoryRow({product}) {
    return <tr>
        <td colSpan={2} align="center"><strong>{product.category}</strong></td>
    </tr>
}
