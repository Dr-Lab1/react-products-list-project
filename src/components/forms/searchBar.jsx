export function SearchBar({ search, placeholder, onSearch, range, onRange }) {
    return <div className="my-3">
        <div>
            <input type="text" value={search} onChange={onSearch} className="form-control" placeholder={placeholder} />
        </div>

        <div className="mt-3">
            <input type="range" className="form-range" min={1} max={10} value={range} onChange={onRange} />
        </div>

    </div>
}