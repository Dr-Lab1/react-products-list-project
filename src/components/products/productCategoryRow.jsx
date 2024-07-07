export function ProductCategoryRow({product}) {
    return <tr>
        <td colSpan={2}><strong>{product.category}</strong></td>
    </tr>
}
