export function CheckBox({isChecked, label, onCheck}) {
    return <div className="form-check">
        <input className="form-check-input" type="checkbox" checked={isChecked} onChange={onCheck} id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
            {label}
        </label>
    </div>
}
