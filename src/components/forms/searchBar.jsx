export function SearchBar({search, placeholder, onSearch}) {
    return <div className="my-3">
        <input type="text" value={search} onChange={onSearch} className="form-control" placeholder={placeholder} />
    </div>
}