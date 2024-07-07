export function CheckBox({isCheckde, label, onCheck}) {
    return <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
            {label}
        </label>
    </div>
}